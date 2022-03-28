import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";

function App() {
  const expenses = [
    { title: "Books", amount: 152, date: new Date(2022, 3, 25), id: 1 },
    { title: "Pens", amount: 125, date: new Date(2022, 3, 25), id: 2 },
    { title: "Notes", amount: 521, date: new Date(2022, 3, 25), id: 3 },
    { title: "Water", amount: 512, date: new Date(2022, 3, 25), id: 4 },
  ];
  return (
    // <ExpenseItem></ExpenseItem> Either you can import the JSX like this or the other one that is given below
    <div>
    <NewExpense />
    <Expenses expense={expenses}></Expenses>
      </div>
    
  )

}
export default App;
