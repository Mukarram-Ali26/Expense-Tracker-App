import React, { useContext } from 'react';
import '../App.css';
import { GlobalContext } from '../context/GlobalState';



export const Transaction = ({ transaction }) => {

    const { delTrans } = useContext(GlobalContext);


    const sign = transaction.amount > 0 ? '+' : '-';
    const tType = transaction.amount > 0 ? 'plus' : 'minus';
    return (
        <li className={tType}>
            {transaction.desc}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn"
                onClick={() => delTrans(transaction.id)}>
                X
                </button>
        </li>
    )
}