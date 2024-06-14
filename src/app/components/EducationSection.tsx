'use client'
import InputHandler from './InputHandler'
import React, {useState} from "react";
import {useEducationData} from './contexts/EducationDataContext'

interface Education  {
    schoolName : string,
    title : string,
    enrollDate : string,
    graduationDate : string
}

interface CardProps  {
    educations : Education[],
    setEducations : React.Dispatch<React.SetStateAction<Education[]>>
}

function Card({ educations, setEducations } : CardProps) {

    function deleteCard(index:number) :void{
        const newEducations = educations.filter((_, idx) => idx !== index);
        setEducations(newEducations)
    }

    return (
        <div className="flex flex-wrap">
            {educations.map((edu, index) => (
                <div key={index} className="experience-card my-2 p-2 border flex flex-col justify-center">
                    {Object.entries(edu).map(([key, value], index) => {
                        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        return <div key={index}><strong>{formattedKey}:</strong>{value}</div>
                    })}
                    <button className="border-2" onClick={() => deleteCard(index)}>Delete</button>
                </div>
            ))}
        </div>
    )
}


export default function EducationSection() : React.JSX.Element {
    const [schoolName, setSchoolName] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [enrollDate, setEnrollDate] = useState<string>("")
    const [graduationDate, setGraduationDate] = useState<string>("")
    const {educations, setEducations} = useEducationData();

    function handleClick() {
        const newEducation : Education = {
            schoolName,
            title,
            enrollDate,
            graduationDate
        }
        setEducations ([...educations, newEducation])
        setSchoolName('')
        setTitle('')
        setEnrollDate('')
        setGraduationDate('')
    }

    return (
        <div className="flex">

            <form className="flex flex-col items-center min-w-72 p-8"
                  id="contact-form"
                  onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                      e.preventDefault()
                      handleClick();
                  }}
            >
                <h1 className="text-2xl font-bold">Education</h1>
                <label htmlFor="school-name">School name:</label>
                <InputHandler inputType="text" name="school-name" setValue={setSchoolName} value={schoolName}/>
                <label htmlFor="title">Title:</label>
                <InputHandler inputType="text" name="title" setValue={setTitle} value={title}/>
                <label htmlFor="enroll-date">Enroll date:</label>
                <InputHandler inputType="date" name="enroll-date" setValue={setEnrollDate} value={enrollDate}/>
                <label htmlFor="graduation-date">Graduation date:</label>
                <InputHandler inputType="date" name="graduation-date" setValue={setGraduationDate}
                              value={graduationDate}/>
                <button className="border-2 my-3">Add Education</button>
                <div><Card educations={educations} setEducations={setEducations}/></div>
            </form>

        </div>
    )
}