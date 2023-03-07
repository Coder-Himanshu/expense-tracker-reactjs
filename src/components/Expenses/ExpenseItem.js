import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
    
    //if you are creating varible that can be dynamic which can chnage value so please use useState hook.
    //useState hook will return 2 thing first will be varible and second will be function and function should 
    //be used for update the value of first varible in our case it is title.
    //useState will always return array and we can use array de-estrucring for gettting value and function of useState hook
//     let [title, setTitle] = useState(props.title); 


//     //newTitle  is varible which we use for getting new value from input 
//     //and by default i intilized it as blank because we are passing '' double quots in useState();
//     let [newTitle, setNewTitle] = useState(''); 

//    const clickHandler = () => {
//     //passing newTitle because newTitle is holding value which we have input tag.
//         setTitle(newTitle);
//     }

//     const changeHandler = (event) => {
//         //using setNewTitle we are chnaing title in input tag by event and event is object so we are using event.target.value;
//        setNewTitle(event.target.value);
//     }

    return ( 
        <Card className='expense-Item'>
           <ExpenseDate tempDate={props.date}  />
           <div className='expense-Item__description'>
                <h2>{ props.title }</h2>
                <div className='expense-Item__price'>${props.amount}</div>
            </div> 
            {/* <input type='text' placeholder='Enter Expense Name...' value={newTitle} onChange={ changeHandler }/>
            <button onClick={ clickHandler }>Change Button</button> */}
        </Card>
    )
}

export default ExpenseItem;