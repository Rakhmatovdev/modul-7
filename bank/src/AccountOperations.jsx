import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBalance, payLoan, withBalance, withPayLoan } from "./userSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch=useDispatch()
  const {user}=useSelector(state=>state)
  console.log();
  function handleDeposit() {
    dispatch(addBalance(depositAmount))
    setDepositAmount("")
  }

  function handleWithdrawal() {
    dispatch(withBalance(withdrawalAmount))
    setWithdrawalAmount("")
  }

  function handleRequestLoan() {
   if(loanPurpose.trim()){
    const obj={
      loanAmount,
      loanPurpose,
      id:Date.now()
    }
    dispatch(addBalance(loanAmount))
    dispatch(payLoan(obj))
   } else alert("Pul olish uchun sabab kerak !!!")
   setLoanAmount("")
   setLoanPurpose("")

  }

  function handlePayLoan(date) {
    if(user.balance>=date.loanAmount){
      dispatch(withBalance(date.loanAmount))
      dispatch(withPayLoan(date.id))
    }else alert("Sizning mablag'ingiz yetarli emas")
  }
  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

       {user.payBack && user?.payBack.map((item)=>{
        return (<div key={item.id}>
          <span>Pay back {item.loanPurpose} ${item.loanAmount}</span>
          <button onClick={()=>handlePayLoan(item)}>Pay loan</button>
        </div>)
       })}
      </div>
    </div>
  );
}

export default AccountOperations;
