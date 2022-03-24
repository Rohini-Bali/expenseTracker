//Filename for custom components should be in CapitalCamel case
import './expenseItem.css'
function ExpenseItem(){
    // per return you can only have one root element
    //to overcome this you can put all the elements in a parent division
    return(
        <div className='expense-item'>
            <div>24 March 2022</div>
            <div className='expense-item__description'>
            <h2>Car insurance</h2>
            <div className='expense-item__price'>$123</div>
            </div>
        </div>
    );

}
export default ExpenseItem