import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget, expenses , setRemaining} = useContext(AppContext);
    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
        
        let remaining = 0;
        if (expenses) {
            const totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
            remaining = budget - totalExpenses;
        }
        setRemaining(remaining);
        console.log("Budge:");
        console.log(budget);
        console.log(remaining);
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;