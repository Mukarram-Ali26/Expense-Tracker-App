import React from 'react';
import '../App.css';
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddComponent = () => {


    const { addTrans } = useContext(GlobalContext);

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            desc,
            amount: +amount

        }
        addTrans(newTransaction);
    }

    return (
        <div>
            <h3>Add Amount </h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Discription
                 </label>
                    <input
                        type="text"
                        id="description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Please Enter Description" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Amount
                 </label>
                    <input
                        type="number"
                        id="description"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Please Enter Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
