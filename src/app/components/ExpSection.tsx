'use client'
import InputHandler from './InputHandler'
import React, {useState} from "react";
import {useExperienceData} from './contexts/ExperienceDataContext'

interface Experience {
    companyName: string;
    title: string;
    mainRes: string;
    startDate: string;
    endDate: string;
}

interface CardProps {
    experiences: Experience[]
    setExperiences : React.Dispatch<React.SetStateAction<Experience[]>>
}

function Card({ experiences, setExperiences } : CardProps) : React.JSX.Element{

    function deleteCard(index : number) : void {
        const newExperiences = experiences.filter((_, idx) => idx !== index);
        setExperiences(newExperiences);
    }

    return (
        <div className="flex flex-wrap justify-center">
            {experiences.map((exp, index) => (
                <div key={index} className="experience-card my-2 p-2 border flex flex-col justify-center">
                    {Object.entries(exp).map(([key, value], index) => {
                        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        return <div><strong>{formattedKey}:</strong>{value}</div>
                    })}
                    <button className="border-2" onClick={() => deleteCard(index)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default function ExpSection(): React.JSX.Element {
    const [companyName, setCompanyName] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [mainRes, setMainRes] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const {experiences, setExperiences} = useExperienceData()

    function handleClick(): void {
        const newExperience: Experience = {
            companyName,
            title,
            mainRes,
            startDate,
            endDate
        };
        setExperiences([...experiences, newExperience]);
        setCompanyName("");
        setTitle("");
        setMainRes("");
        setStartDate("");
        setEndDate("");
    }



    return (
        <div className="flex">
            <form className="flex flex-col items-center min-w-72 p-8"
                  id="contact-form"
                    onSubmit={(e) => {e.preventDefault()
                    handleClick()}}>
                <h1 className="text-2xl font-bold">Experience</h1>
                <label htmlFor="company-name">Company name:</label>
                <InputHandler inputType="text" name="company-name" setValue={setCompanyName} value={companyName}/>
                <label htmlFor="job-title">Job title:</label>
                <InputHandler inputType="text" name="job-title" setValue={setTitle} value={title}/>
                <label htmlFor="main-res">Main responsibilities:</label>
                <InputHandler inputType="text" name="main-res" setValue={setMainRes} value={mainRes}/>
                <label htmlFor="start-date">Start date:</label>
                <InputHandler inputType="date" name="start-date" setValue={setStartDate} value={startDate}/>
                <label htmlFor="end-date">End date:</label>
                <InputHandler inputType="date" name="end-date" setValue={setEndDate} value={endDate}/>
                <button className="border-2 my-3">Add experience</button>
                <Card experiences = {experiences} setExperiences={setExperiences}  />
            </form>

        </div>
    )
}