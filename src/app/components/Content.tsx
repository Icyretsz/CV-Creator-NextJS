'use client'
import InfoSection from './InfoSection'
import EducationSection from './EducationSection'
import ExpSection from './ExpSection'
import ToggleButton from "@/app/components/ToggleButton";
import { useState } from 'react'
import {useAccentColor} from './contexts/AccentColorContext'

export default function Content() {
    const [content, setContent] = useState('content')
    const {accentColor, setAccentColor} = useAccentColor()
    return (
        <>
            <ToggleButton content={content} setContent={setContent}/>
            {
                content === 'content' ?
                    <>
                        <InfoSection/>
                        <EducationSection/>
                        <ExpSection/>
                    </> :
                    <>
                        <label htmlFor="favcolor">Accent color :</label>
                        <input type="color" id="favcolor" name="favcolor" value={accentColor} onChange={(e) => setAccentColor(e.target.value)}/>
                    </>
            }
        </>
    )
}