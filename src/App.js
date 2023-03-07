import React , { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';


let DUMMY_EXPENSE = [];

const App = (props) => {

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    response.json()
  })
  .then(data => setExpenses(data));

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpense = (expense) => {
    const updatedExpense = [expense, ...expenses]; //expenses is old data which we are already passing in Expense selector tag
    setExpenses(updatedExpense,expenses)
  }
  
  return (
    <div>
      <h2 className='heading'>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpense}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
