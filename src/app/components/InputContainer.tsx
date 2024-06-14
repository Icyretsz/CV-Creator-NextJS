
import CVSection from './CVSection'
import Content from './Content'

export default function CV() {

    return (
        <>
            <div className="flex justify-center h-screen overflow-hidden gap-8">
                <div className="flex-grow flex flex-col items-center bg-white max-w-sm">
                    <div className="flex-1 overflow-y-auto">
                        <h1 className="text-4xl text-center font-bold m-8">CV CREATOR</h1>
                        <Content />
                    </div>
                </div>
                <CVSection />
            </div>
        </>

    )
}