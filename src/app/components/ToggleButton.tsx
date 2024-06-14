'use client'
import React, { useState } from 'react';
import {useAccentColor} from './contexts/AccentColorContext'
//import { getContrastYIQ } from './utils/contrast'

interface Prop  {
    content : string,
    setContent :  React.Dispatch<React.SetStateAction<string>>
}

const ToggleButton = ({content, setContent} : Prop) => {
    const {accentColor, setAccentColor, textColor} = useAccentColor();

    return (
        <div className="flex justify-center">
            <button
                className={`py-2 px-4 ${content === 'content' ? '' : 'bg-gray-300 text-white'} rounded-l`}
                style={content === 'content' ? {backgroundColor: accentColor, color: textColor} : {}}
                onClick={() => setContent('content')}
            >
                Content
            </button>
            <button
                className={`py-2 px-4 ${content === 'config' ? '' : 'bg-gray-300 text-white'} rounded-r`}
                style={content === 'config' ? {backgroundColor: accentColor, color: textColor} : {}}
                onClick={() => setContent('config')}
            >
                Config
            </button>
        </div>
    );
};

export default ToggleButton;
