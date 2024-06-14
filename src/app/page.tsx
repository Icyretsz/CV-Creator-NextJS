import {AccentColorProvider} from './components/contexts/AccentColorContext'
import {EducationDataProvider} from './components/contexts/EducationDataContext'
import {ExperienceDataProvider} from './components/contexts/ExperienceDataContext'
import {InfoDataProvider} from './components/contexts/InfoDataContext'
import CV from "@/app/components/InputContainer";
import {NotifyChangesProvider} from './components/contexts/NotifyChangesContext'

export default function Home() {
  return (
      <NotifyChangesProvider>
      <InfoDataProvider>
      <ExperienceDataProvider>
      <EducationDataProvider>
      <AccentColorProvider>
      <CV />
      </AccentColorProvider>
      </EducationDataProvider>
      </ExperienceDataProvider>
      </InfoDataProvider>
      </NotifyChangesProvider>
      // <>
      //     <div className="flex justify-center h-screen overflow-hidden gap-8">
      //         <div className="flex-grow flex flex-col items-center bg-white max-w-sm">
      //             <ToggleButton />
      //             <div className="flex-1 overflow-y-auto">
      //                 <h1 className="text-4xl font-bold m-8">CV CREATOR</h1>
      //                 <InfoSection/>
      //                 <EducationSection/>
      //                 <ExpSection/>
      //             </div>
      //         </div>
      //         <div className="w-[600px] h-[800px] bg-white border border-black">
      //             {/* A4 paper-like div */}
      //         </div>
      //     </div>
      // </>

  )
}
