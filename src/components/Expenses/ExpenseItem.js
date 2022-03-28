//Filename for custom components should be in CapitalCamel case
import React, {useState} from 'react';
import './expenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../common/Card';


//to add dynamic variables  you should add js in function
function ExpenseItem(props) {
    //define three different vars for UI
    // const expenseDate = new Date(2022, 3, 24) //<div>{expenseDate}</div> if you try like this it would break //toISOString method is required when working with Date obj
    // const expenseTitle = 'Books'
    // const expenseAmount = 123

    //introduction to events and hooks
    const [title,setTitle] = useState(props.title)
    const  clickHandler = () =>{
        setTitle('New title')
        console.log('Clicked');
    }
    


    // per return you can only have one root element
    //to overcome this you can put all the elements in a parent division
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Make Changes</button>
        </Card>
    );

}
export default ExpenseItem