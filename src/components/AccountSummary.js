import React, {useContext} from 'react';
import '../App.css';
import {GlobalContext} from '../context/GlobalState';


 const AccountSummary = () => {
    const {transactions} = useContext(GlobalContext);

     const Tamount = transactions.map(transaction => transaction.amount);

     const income = Tamount
     .filter(item => item > 0)
     .reduce((acc, item) => (acc += item), 0)
     .toFixed(2);

     const expense = (
        Tamount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
      ).toFixed(2);


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
    <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expense}</p>

            </div>

        </div>
    )
}

export default AccountSummary;

