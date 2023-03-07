import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React from 'react';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {

                //we are using map so that we can render throw array and pass that for new enties that can show in UI
                props.item.map(
                    expense => (
                    <ExpenseItem date = {expense.date} amount = {expense.amount} title = {expense.title} />
                    )
                )
            }
        </Card>
    )
}

export default Expenses;