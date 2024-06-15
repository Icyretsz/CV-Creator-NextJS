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

  )
}
