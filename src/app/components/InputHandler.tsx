
"use client"
import React from 'react'
import {useNotifyChanges} from './contexts/NotifyChangesContext'

type InputBoxProps = {
    inputType : string,
    name : string,
    setValue : React.Dispatch<React.SetStateAction<string>>
    value : string
}

const InputHandler = ({inputType, name, setValue, value} : InputBoxProps) : React.JSX.Element => {
    const {notify, setNotify} = useNotifyChanges()

    function handleInput( e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setNotify(true)
        setValue(e.target.value)
    }

    return (
        name === 'description' ?
            <div>
                <textarea
                       id={name}
                       name={name}
                       value={value}
                       className="border-2 mb-2 w-72 h-24"
                       onChange={handleInput}
                       required/>
            </div>
            :
            <div>
                <input type={inputType}
                       id={name}
                       name={name}
                       value={value}
                       className="border-2 w-72 mb-2"
                       onChange={handleInput}
                       required/>
            </div>
    );
};


export default InputHandler
