
'use client'
import React, {createContext, ReactNode, useContext, useState} from "react";

interface Education  {
    schoolName : string,
    title : string,
    enrollDate : string,
    graduationDate : string
}

interface EducationDataContext  {
    educations : Education[],
    setEducations : React.Dispatch<React.SetStateAction<Education[]>>
}

  const EducationDataContext = createContext<EducationDataContext | undefined>(undefined);

const EducationDataProvider: React.FC<{ children : ReactNode }> = ({ children }) => {
    const [educations, setEducations] = useState<Education[]>([])

    return (
        <EducationDataContext.Provider value={{educations, setEducations}}>
            { children }
        </EducationDataContext.Provider>
    )
}

const useEducationData = () => {
    const context = useContext(EducationDataContext)
    if (!context) {
        throw new Error('useEducationData must be used within an EducationDataProvider')
    }
    return context;
}

export { EducationDataProvider, useEducationData };