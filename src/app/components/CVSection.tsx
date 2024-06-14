'use client'
import React from 'react';
import {useEducationData} from './contexts/EducationDataContext'
import {useExperienceData} from './contexts/ExperienceDataContext'
import {useInfoData} from './contexts/InfoDataContext'
import {useAccentColor} from './contexts/AccentColorContext'

interface Prop {
    textColor : string
    darkenColor : string
}

const CvSection = () => {
    const {accentColor, darkenColor, setAccentColor, textColor} = useAccentColor()

    return (
        <div>
            <div className="w-[600px] h-[800px] bg-white border border-black flex">
            <div className="flex flex-col w-60"
                style={{backgroundColor: accentColor}}>
                <PersonalInfo textColor={textColor} darkenColor={darkenColor}/>
            </div>
            </div>

        </div>
    );
};

function PersonalInfo({textColor, darkenColor} : Prop):React.JSX.Element {
    const {info, setInfo} = useInfoData()
    return (
        <>
                <div className="p-2" style={{color: textColor}}>
                <p className="text-2xl"><strong>{info.name === '' ? 'Your name' : info.name}</strong></p>
                <p>{info.title === '' ? 'Title' : info.title}</p>
            </div>
            <div  style={{color: textColor}}>
                <div className="text-xl p-2" style={{backgroundColor:darkenColor}}><strong>Personal Info</strong></div>
                <div className="flex flex-col gap-2 p-2">
                    <p><strong>Phone</strong></p>
                    <p>{info.phone === '' ? '0123456789' : info.phone}</p>
                    <p><strong>Email</strong></p>
                    <p>{info.email === '' ? 'abc@mail.com' : info.email}</p>
                    {info.linkList && info.linkList.map((link, index) => (
                        <><p key={index}><strong>{link.linkName}</strong></p>
                        <p>{link.link}</p></>
                    ))}
                </div>
            </div>
        </>
    )
}

function EducationInfo(): React.JSX.Element {
    const {educations, setEducations} = useEducationData()
    return (
        <>
            {educations.map((edu, index) => (
                <div key={index} className="experience-card my-2 p-2 border flex flex-col justify-center">
                    {Object.entries(edu).map(([key, value], index) => {
                        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        return <div key={index}><strong>{formattedKey}:</strong>{value}</div>
                    })}
                </div>
            ))}
        </>
    )
}

function ExperiencesInfo():React.JSX.Element{
    const {experiences, setExperiences} = useExperienceData()
    return (
        <>
            {experiences.map((exp, index) => (
                <div key={index} className="experience-card my-2 p-2 border flex flex-col justify-center">
                    {Object.entries(exp).map(([key, value], index) => {
                        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        return <div key={index}><strong>{formattedKey}:</strong>{value}</div>
                    })}
                </div>
            ))}
        </>
    )
}

{/*{info && Object.entries(info).map(([key, value], index) => {*/}
{/*    // Format the key to make it more readable*/}
{/*    const formattedKey = key*/}
{/*        .replace(/([A-Z])/g, ' $1') // Add space before any uppercase letters*/}
{/*        .trim() // Remove any leading or trailing whitespace*/}
{/*        .replace(/^./, str => str.toUpperCase()); // Capitalize the first letter*/}

{/*    return (*/}
{/*        <div key={index}*/}
{/*        style={{color: textColor}}*/}
{/*        >*/}
{/*            <strong>{formattedKey}:</strong> {value}*/}
{/*        </div>*/}
{/*    );*/}
{/*})}*/}


export default CvSection;