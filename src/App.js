import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { title: "Books", amount: 152, date: new Date(2022, 3, 25), id: 1 },
    { title: "Pens", amount: 125, date: new Date(2022, 3, 25), id: 2 },
    { title: "Notes", amount: 521, date: new Date(2022, 3, 25), id: 3 },
    { title: "Water", amount: 512, date: new Date(2022, 3, 25), id: 4 },
  ];
  return (
    // <ExpenseItem></ExpenseItem> Either you can import the JSX like this or the other one that is given below

    <>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date} /><>
        <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date} />
        <ExpenseItem
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={expenses[3].date} /></>
      </>
  )

}
export default App;
