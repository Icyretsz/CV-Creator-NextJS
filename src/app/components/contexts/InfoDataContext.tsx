'use client'
import {useState, useContext, createContext, ReactNode} from 'react'

interface Link {
    linkName : string
    link : string
}

interface Info {
    name : string
    email  : string
    phone : string
    description : string
    title : string
    linkList : Link[]
}

interface InfoDataContext {
    info : Info
    setInfo : React.Dispatch<React.SetStateAction<Info>>
    linkList : Link[]
    setLinkList : React.Dispatch<React.SetStateAction<Link[]>>
}

const InfoDataContext = createContext<InfoDataContext>({
    info: { name: '', email: '', phone: '', description: '', title: '', linkList: []}, // Include 'title' here
    setInfo: () => {} , // Dummy function,
    linkList: [],
    setLinkList: () => {}
});

const InfoDataProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
    const [linkList, setLinkList] = useState<Link[]>([])
    const [info, setInfo] = useState<Info>({
        name: '',
        email: '',
        phone: '',
        description: '',
        title: '',
        linkList: []
    });

    return (
        <InfoDataContext.Provider value={{info, setInfo, linkList, setLinkList}}>
            { children }
        </InfoDataContext.Provider>
    )
}

const useInfoData = () => {
    const context = useContext(InfoDataContext)
    if (!context) {
        throw new Error('useInfoData must be used within an InfoDataProvider')
    }
    return context;
}

export { InfoDataProvider, useInfoData }