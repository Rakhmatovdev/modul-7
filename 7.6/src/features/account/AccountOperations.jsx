import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  qarzOlish,
  qarzYopish,
  shotSarfla,
  shotToldirish,
} from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  function handleDeposit() {
    if (depositAmount) {
      switch (currency) {
        case "USD": {
          dispatch(shotToldirish(+depositAmount));
          break;
        }
        case "EUR": {
          const eur=+depositAmount+(depositAmount*10)/100
          dispatch(shotToldirish(eur));
          break;
        }
        case "GBP": {
          const gbp=+depositAmount+(depositAmount*20)/100
          dispatch(shotToldirish(gbp));
          break;
        }
        default: {
          dispatch(shotToldirish(0));
        }
      }
    }
    setDepositAmount("");
  }
  function handleWithdrawal() {
    if (withdrawalAmount) {
      if (account.shot - withdrawalAmount >= -100) {
        dispatch(shotSarfla(+withdrawalAmount));
      } else {
        alert("Siz minimal summadan utib kettingiz");
      }
    } else {
      alert(" Siz ma'lumot kiritimadingiz !!!");
    }
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (loanPurpose.trim() && loanPurpose ) {
      if(!account.qarz){
        dispatch(qarzOlish({ qarz: loanAmount, qarzmaqsad: loanPurpose }));
      } else alert("Pul Olishingiz uchun qarzni yopishingiz kerak !!!")
    } else alert("Pul olish uchun sabab bo'lishi kerak !!!");
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    if (account.shot >= account.qarz) {
      dispatch(qarzYopish());
    } else alert("Sizning mablag'ingiz yetarli emas");
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

        {account.qarz > 0 && (
          <div>
            <span>
              Pay back {account.qarzMaqsadi} ${account.qarz}
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
