import './NewExpense.css';
import React from 'react';
import ExpenseForm from './ExpenseForm';


//this is parent component 
const NewExpense = (props) => {


    //for getting passing data from parent to child then create a function like below and pass some parameter then use that function in
    // child component selecter <ExpenseForm  onSaveExpenseData={saveExpenseData}/> then go to child component and access then using
    // props.onSaveExpensedata (because in this case we used varible name as onSaveexpenseData) and then inside onSaveexpenseData pass data which is holding
    //object which have value of real data entered by user
    const saveExpenseData = (enterExpenseData) => {
           const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
           }
           props.onAddExpense(expenseData);
           //console.log(expenseData)
    }  

    return (
        <div className='new-expense'>
            <ExpenseForm  onSaveExpenseData={saveExpenseData}/>
        </div>
    )
}

export default NewExpense;