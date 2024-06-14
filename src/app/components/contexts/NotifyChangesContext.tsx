'use client'
import React, {useContext, createContext, useState, ReactNode} from 'react'



interface NotifyChangesContext {
    notify : boolean,
    setNotify : React.Dispatch<React.SetStateAction<boolean>>
}

const NotifyChangesContext = createContext<NotifyChangesContext>({
        notify: false,
        setNotify : () => {}
    }
)

const NotifyChangesProvider : React.FC< {children : ReactNode}> = ({children}) => {
    const [notify, setNotify] = useState(false)
    return (
        <NotifyChangesContext.Provider value={{notify, setNotify}}>
            {children}
        </NotifyChangesContext.Provider>
    )
}

const useNotifyChanges = () => {
    const context = useContext(NotifyChangesContext)
    if (!context) {
        throw Error('useNotifyChanges must be used within an NotifyChangesProvider')
    }
    return context
}

export { NotifyChangesProvider, useNotifyChanges }