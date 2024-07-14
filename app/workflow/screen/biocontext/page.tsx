import TextLink from "@/components/ui/textlink"
import Link from "next/link";

export default function BioContext() {
    return (

        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-1xl sm:p-20">
                    <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">Do the signatures make biological sense?</h1>
                    <p className="text-center pb-8">
                        Are the identified signatures typical of the tumor type? For treatment-associated signatures, did the patient receive the corresponding treatment? If there are signatures indicating DNA repair dysfunction, can you identify specific mutations that likely caused this dysfunction?</p>
                    <hr className="" />
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Signature makes biological sense</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">The aetiologies that generate the predicted signatures are likely to have occurred in the tumor.</p>
                            <Link href="/workflow/screen/biocontextpass"><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Signature does NOT make biological sense</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">The observed signature is not typical of this cancer type and cannot be easily explained by other biological evidence, such as specific gene mutations.</p>
                            <Link href=""><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
