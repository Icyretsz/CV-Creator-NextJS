'use client'

import {createContext, ReactNode, useContext, useState} from "react";

interface Experience {
    companyName: string;
    title: string;
    mainRes: string;
    startDate: string;
    endDate: string;
}

interface ExperienceDataContext  {
    experiences : Experience[],
    setExperiences : React.Dispatch<React.SetStateAction<Experience[]>>
}

const ExperienceDataContext = createContext<ExperienceDataContext | undefined>(undefined);

const ExperienceDataProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
    const [experiences, setExperiences] = useState<Experience[]>([])

    return (
        <ExperienceDataContext.Provider value={{experiences, setExperiences}}>
            {children}
        </ExperienceDataContext.Provider>
    )
}

const useExperienceData = () => {
    const context = useContext(ExperienceDataContext)
    if (!context) {
        throw new Error('useEducationData must be used within an EducationDataProvider')
    }
    return context;
}

export {ExperienceDataProvider, useExperienceData}