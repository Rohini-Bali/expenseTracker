//Filename for custom components should be in CapitalCamel case
import './expenseItem.css'


//to add dynamic variables  you should add js in function
function ExpenseItem(props) {
    //define three different vars for UI
    // const expenseDate = new Date(2022, 3, 24) //<div>{expenseDate}</div> if you try like this it would break //toISOString method is required when working with Date obj
    // const expenseTitle = 'Books'
    // const expenseAmount = 123
    // per return you can only have one root element
    //to overcome this you can put all the elements in a parent division
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );

}
export default ExpenseItem