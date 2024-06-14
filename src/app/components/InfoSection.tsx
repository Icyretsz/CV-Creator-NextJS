'use client'
import InputHandler from "./InputHandler"
import React, {useState} from "react";
import { useInfoData } from "./contexts/InfoDataContext"
import { useAccentColor } from "./contexts/AccentColorContext"
import {useNotifyChanges} from './contexts/NotifyChangesContext'

interface Link {
    linkName : string
    link : string
}

export default function InfoSection() : React.JSX.Element {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const {notify, setNotify} = useNotifyChanges()
    const [link, setLink] = useState<string>("")
    const [linkName, setLinkName] = useState<string>("")
    const {info,setInfo, setLinkList, linkList} = useInfoData()
    const [showLinkInput, setShowLinkInput] = useState(false)
    const {accentColor, textColor} = useAccentColor()



    const handleSubmit = (event: React.FormEvent):void => {
        event.preventDefault();
        setNotify(false)
        setInfo({ name, email, phone, description, title, linkList });
    };

    const showInput = () : void => {
        setShowLinkInput(true)
    }

    const hideInput = () : void => {
        const newLink:Link = {link:link, linkName:linkName}
        setLinkList([...linkList, newLink])
        setLink("")
        setLinkName("")
        setShowLinkInput(false)
    }

    const LinkCard = () : React.JSX.Element => {
        function deleteCard(index:number) :void{
            const newLinkList = linkList.filter((_, idx) => idx !== index);
            setLinkList(newLinkList)
            setNotify(true)
        }

        return (
            <>
                {linkList.map((link, index) => {
                    return (
                        <div key={index} className="my-2 p-2 border flex flex-col justify-center" style={{backgroundColor: accentColor, color: textColor}}>
                            <div><strong>Link Name:</strong> {link.linkName}</div>
                            <div><strong>Link URL:</strong> {link.link}</div>
                            <button className="border" onClick={() => deleteCard(index)}>Delete link</button>
                        </div>
                    )
                })}

            </>
        )
    }


return (
    <div className="flex justify-center">
            <form className="flex flex-col justify-center items-center w-72 p-8" id="contact-form"
                  onSubmit={handleSubmit}>
                <h1 className="text-2xl text-center font-bold ">Personal Information</h1>
                <label htmlFor="name">Name:</label>
                <InputHandler inputType="text" name="name" setValue={setName} value={name}/>
                <label htmlFor="name">Email:</label>
                <InputHandler inputType="text" name="email" setValue={setEmail} value={email}/>
                <label htmlFor="phoneNum">Phone number:</label>
                <InputHandler inputType="text" name="phoneNum" setValue={setPhone} value={phone}/>
                <label htmlFor="title">Applying title:</label>
                <InputHandler inputType="text" name="title" setValue={setTitle} value={title}/>
                <label htmlFor="description">Description:</label>
                <InputHandler inputType="textarea" name="description" setValue={setDescription} value={description}/>
                <LinkCard />
                <button className="py-2 px-4 rounded my-2"
                        style={{backgroundColor: accentColor, color: textColor}}
                    type="button" onClick={showInput}>Add link</button>
                {showLinkInput && (
                        <div>
                        <label htmlFor="linkName">Enter site name:</label>
                        <InputHandler inputType="text" name="linkName" setValue={setLinkName} value={linkName}/>
                        <label htmlFor="link">Enter link:</label>
                        <InputHandler inputType="text" name="link" setValue={setLink} value={link}/>
                        <button className="py-2 px-4 rounded"
                                style={{backgroundColor: accentColor, color: textColor}} onClick={hideInput}>Save link</button>
                        </div>

                )}
                { notify ? <p className="m-2">Changes made, click "Save changes" to save</p> : ""}
                <button className="py-2 px-4 rounded my-2"
                        style={{backgroundColor: accentColor, color: textColor}}>Save changes</button>
            </form>
        </div>
    )

}
