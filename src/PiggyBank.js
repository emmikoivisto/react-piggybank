import {useState} from 'react';


const PiggyBank = ({title, amount}) => {
    // can use "props" in the brackets if adding multiple

    const [total, setTotal] = useState(0);
    // This is a hook. Setting the state to be 0. Total + setTotal need to match variable name

    const deposit = () => {
        setTotal(total + amount)
    }

    const withdraw = () => {
        setTotal(total - amount)
    }

    return (
        <>
            <h1>I am a {title}.</h1>
            <h2>Total: £{total}</h2>
            <button onClick={ () => deposit(amount) }>Deposit</button>
            <button onClick={ () => withdraw(amount)} >Withdraw</button>
        </>
    )
}

export default PiggyBank;