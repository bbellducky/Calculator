import React,{useState} from 'react'
import './Calculator.css'
const Calculator = () => {

    const [inputValue,setInputValue] = useState('0')

    const display = (value) =>{ 
        if(inputValue.toString().charAt(0) === '0'){
            setInputValue(value)
        }else{
            setInputValue(inputValue+value)
        }   
    }
    const reset = () =>{
        setInputValue("0")
    }
    const result = () => {
        let calculate = eval(inputValue)
        setInputValue(calculate)
    }

    return (
        <div className='calculator'>
            <div className='calculator-display'>
                <h1>{inputValue}</h1>
            </div>
            <div className='calculator-btn'>
                <button className='operator' onClick={()=>display("+")}>+</button>
                <button className='operator'onClick={()=>display("-")}>-</button>
                <button className='operator' onClick={()=>display("*")}>x</button>
                <button className='operator' onClick={()=>display("/")}>÷</button>

                <button className='number' onClick={()=>display("7")}>7</button>
                <button className='number' onClick={()=>display("8")}>8</button>
                <button className='number' onClick={()=>display("9")}>9</button>

                <button className='number' onClick={()=>display("4")}>4</button>
                <button className='number' onClick={()=>display("5")}>5</button>
                <button className='number' onClick={()=>display("6")}>6</button>

                <button className='number' onClick={()=>display("1")}>1</button>
                <button className='number' onClick={()=>display("2")}>2</button>
                <button className='number' onClick={()=>display("3")}>3</button>

                <button className='number' onClick={()=>display(".")}>.</button>
                <button className='number' onClick={()=>display("0")}>0</button>
                <button className='clear-btn' onClick={reset}>C</button>
                <button className='equal operator' onClick={result}>=</button>



            </div>
        </div>
    )
}

export default Calculator
