import CreateCustomer from "./customer/CreateCustomer";
import Customer from "./customer/Customer";
import AccountOperations from "./account/AccountOperations";
import BalanceDisplay from "./account/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
