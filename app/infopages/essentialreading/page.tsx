import Panel from "@/components/ui/panel"
import TextLink from "@/components/ui/textlink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faVideo } from "@fortawesome/free-solid-svg-icons"
import TextCardsLinked from "@/components/ui/textcards"

export default function essentialreading() {
    return (

        <div className="min-h-screen bg-gray-100 flex flex-col justify-center" >

            <Panel>
                <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">Essential Reading</h1>

                <div className="grid grid-cols-2 gap-8 w-full px-10">
                    <TextCardsLinked title="NCI Symposium on Mutation Signatures and Cancer" description="Many of the opening talks from a 2021 symposium offer an excellent great introduction to the fundamentals of mutational signature analysis" icon={faVideo} href="https://www.youtube.com/watch?v=tAM3NYWQ7eE"></TextCardsLinked>
                    <TextCardsLinked title="Mutational signatures: emerging concepts, caveats and clinical applications" description="Learn about the chronological history of mutational signature analyses in cancer and the challenges of the future" icon={faBook} href="https://doi.org/10.1038/s41568-021-00377-7"></TextCardsLinked>
                    <TextCardsLinked title="Portrait of a cancer: mutational signature analyses for cancer diagnostics" description="A great review of the status of mutational signatures" icon={faBook} href="https://doi.org/10.1186/s12885-019-5677-2"></TextCardsLinked>
                    <TextCardsLinked title="A practical guide for mutational signature analysis in hematological malignancies" description=" Highlights some of the challenges of interpreting mutational signature results, focusing on blood cancers" icon={faBook} href="https://doi.org/10.1038/s41467-019-11037-8"></TextCardsLinked>
                </div>

            </Panel>
            {/* <hr className="h-px my-4 w-full bg-gray-500 border-0"></hr> */}
            <h2 className="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-10">Notes</h2>
            <p className="text-center">
                There are many more seminal mutational signature papers and resources we could not include in this list!
            </p>
        </div >
    )
}
