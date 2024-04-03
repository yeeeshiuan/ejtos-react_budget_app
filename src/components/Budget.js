import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget, expenses , setRemaining, currency} = useContext(AppContext);
    const handleBudgetChange = (event) => {
        let currentBudget = event.target.value;
        
        let remaining = 0;
        if (expenses) {
            const totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
            remaining = currentBudget - totalExpenses;
        }

        if (remaining >= 0) {
            setBudget(currentBudget);
            setRemaining(remaining);
        } else {
            alert("You cannot reduce the budget value lower than the spending.");
        }

        console.log("Budge:");
        console.log(budget);
        console.log(remaining);
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} </span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;