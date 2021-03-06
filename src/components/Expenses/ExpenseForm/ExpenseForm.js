import React, {useState} from "react";
import './ExpenseForm.css';


const ExpenseForm = () => {
    // const [enteredTitle,setEnteredTitle] = useState('');
    // const [enteredAmount,setEnteredAmount] = useState('');
    // const [enteredDate,setEnteredDate]=useState('');
    const [userInput, setUserInput] =
    useState({
    enteredAmount:'',
    enteredDate:'',
    enteredTitle:''
    })
    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredTitle:event.target.value
        })
        // setEnteredTitle(event.target.value);
   

    }
    const dateChangeHandler = (event) =>{
        setUserInput({
            ...userInput, enteredDate:event.target.value
        })
        // setEnteredDate(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredAmount:event.target.value
        })
        // setEnteredAmount(event.target.value);

    }

return (
    <form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2030-12-31' onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number'min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        </div>

    </div>
    </form>
)
}

export default ExpenseForm;