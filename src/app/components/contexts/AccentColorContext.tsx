'use client'
import {createContext, ReactNode, useContext, useState} from "react";

interface AccentColorContextType {
    accentColor : string,
    darkenColor : string,
    setAccentColor : (color:string) => void,
    textColor : string
}

export const AccentColorContext = createContext<AccentColorContextType | undefined>(undefined);

const AccentColorProvider: React.FC<{ children : ReactNode }> = ({ children }) => {
    const [accentColor, setAccentColor] = useState<string>('#FF5733')
    const textColor = getContrastYIQ (accentColor)
    const darkenColor : string = darkenHexColor(accentColor)

    return (
        <AccentColorContext.Provider value={{accentColor, darkenColor, setAccentColor, textColor}}>
            { children }
        </AccentColorContext.Provider>
    )
}

const useAccentColor = () => {
    const context = useContext(AccentColorContext)
    if (!context) {
        throw new Error('useAccentColor must be used within an AccentColorProvider')
    }
    return context;
}

const getContrastYIQ = (hexcolor: string) => {
    hexcolor = hexcolor.replace('#', '');
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
};

const darkenHexColor = (hex : string) => {
    // Convert hex to RGB
    let percent = 20;
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    // Calculate the adjustment factor
    let factor = (100 - percent) / 100;

    // Apply the adjustment factor
    r = Math.round(r * factor);
    g = Math.round(g * factor);
    b = Math.round(b * factor);

    // Convert RGB back to hex
    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
}

export { AccentColorProvider, useAccentColor };