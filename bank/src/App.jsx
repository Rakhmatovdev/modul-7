import CreateCustomer from "./CreateCustomer";
import Customer from "./Customer";
import AccountOperations from "./AccountOperations";
import BalanceDisplay from "./BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state);

  return (
    <div>
      {" "}
      {!user.fullName && (
        <>
          <h1>🏦 The React-Redux Bank ⚛️</h1>
          <CreateCustomer />
        </>
      )}
      {user.fullName && (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
