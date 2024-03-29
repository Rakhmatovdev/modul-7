import CreateCustomer from "./features/user/CreateCustomer";
import Customer from "./features/account/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import { useSelector } from "react-redux";
import Showuser from "./components/Showuser";

function App() {
  const  user  = useSelector((state) => state.user);

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

      <Showuser/>
    </div>
  );
}

export default App;
