import TextLink from "@/components/ui/textlink"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";
import QuickRefLink from "@/components/ui/quickreflink";
export default function Home() {
    return (

        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

                <div className="relative px-4 py-10 bg-orange-100 shadow-lg sm:rounded-1xl sm:p-20">
                    <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">Mutational signatures can not be interpreted reliably</h1>
                    <p className="text-center pb-8">If your sample has too few mutations, signature analysis is unlikely to be reliable or interpretable. Many model-independent analyses (e.g. similar sample searches and motif analysis) may also be unreliable. </p>
                    <hr className="h-0.5 mx-auto my-2 bg-black border-0 rounded md:my-10"></hr>
                    <p className="text-center font-bold text-xl pt-4 pb-2">Next Steps</p>
                    <p className="text-center pb-8">Consider exploring other types of signatures. For instance, a sample can contain too few single base substitutions (SBS)  for SBS signature analysis to be useful, but contain sufficient insertions and deletions (INDELs) for indel signature analysis, or large rearrangements for structural variant signature analysis.
                        <br /><br />
                        If the tumour has very few mutations across all genomic variant types, it could indicate that tumorigenesis was not contingent on mechanisms that increase mutation rate.
                    </p>
                    {/* <p className="text-center pt-4"><FontAwesomeIcon icon={faTriangleExclamation} className="text-orange-300 text-4xl"></FontAwesomeIcon></p> */}

                </div>
                <QuickRefLink></QuickRefLink>
            </div>
        </div>
    );
}
