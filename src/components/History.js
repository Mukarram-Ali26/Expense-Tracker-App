import React, {useContext} from 'react';
import '../App.css';
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction';

export const History = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h3>Transactional History</h3>
            <ul className="list">
                {transactions.map(transaction =>(
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
                {/* <li className="plus">Project Income
                    <span>$1000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">Payment
                    <span>$500</span>
                    <button className="delete-btn">X</button>
                </li> */}

            </ul>
        </div>
    )
}
