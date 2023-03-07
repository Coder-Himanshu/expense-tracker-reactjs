import React from 'react';
import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [newTitle, setNewTitle] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newAmount, setNewAmount] = useState('');


    const changeTitle = (event) => {
        setNewTitle(event.target.value)
    }

    const changeDate = (event) => { 
        setNewDate(event.target.value)
    }

    const changeAmount = (event) => {
        setNewAmount(event.target.value)
    }

    const SubmitExpense = (event) => {
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }

        //after getting onSaveExpenseData from NewExpense (which is a parent component) pass object which have real values entered by user 
        props.onSaveExpenseData(expenseData);

        setNewTitle('');
        setNewDate('');
        setNewAmount('');
        
    }

    return(
        <form onSubmit={SubmitExpense}> 
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' placeholder="Enter title..." value={newTitle} onChange={changeTitle}/>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' placeholder="Enter amount..." min='0.01' step='0.01' value={newAmount} onChange={changeAmount}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={newDate} onChange={changeDate}/>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;