import "./App.css";
import { IncomeExpense } from "./components/Income/incomeExpense";
import { TransactionList } from "./components/Transactionlist/transactionL";
import { AddTransaction } from "./components/addTransaction/addtransaction";
import { Balance } from "./components/balance/balance";
import { Header } from "./components/header/header";
import { GlobalProvider } from "./context/mystate";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
