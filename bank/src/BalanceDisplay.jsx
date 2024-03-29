import { useSelector } from "react-redux";

function formatCurrency(value) {

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
 const {user}= useSelector(state=>state)
  return <div className="balance">{formatCurrency(user?.balance)}</div>;
}

export default BalanceDisplay;
