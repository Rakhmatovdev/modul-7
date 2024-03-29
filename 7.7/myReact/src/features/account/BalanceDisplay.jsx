import { useSelector } from "react-redux";

function formatCurrency(value) {

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
 const shot=useSelector(state=>state.account.shot)
  return <div className="balance">{formatCurrency(shot)}</div>;
}

export default BalanceDisplay;
