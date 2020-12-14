import React from 'react';
import '../App.css';


export const History = () => {
    return (
        <div>
            <h3>Transactional History</h3>
            <ul className="list">
                <li className="plus">Project Income
                    <span>$1000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">Payment
                    <span>$500</span>
                    <button className="delete-btn">X</button>
                </li>

            </ul>
        </div>
    )
}
