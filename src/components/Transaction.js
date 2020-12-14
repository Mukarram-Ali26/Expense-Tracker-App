import React from 'react';
import '../App.css';


export const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';
    const tType = transaction.amount > 0 ? 'plus' : 'minus';
    return (
        <li className={tType}>
            {transaction.desc}
    <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn">X</button>
        </li>
    )
}