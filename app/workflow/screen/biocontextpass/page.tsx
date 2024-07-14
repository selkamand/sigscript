import TextLink from "@/components/ui/textlink"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";
export default function Home() {
    return (

        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

                <div className="relative px-4 py-10 bg-green-100 shadow-lg sm:rounded-1xl sm:p-20">
                    <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">High Confidence Signature</h1>
                    <p className="text-center pb-8">Your mutational signature analysis identified a signature representing an aetiology that is very likely to be active in the sample</p>
                    <hr className="h-0.5 mx-auto my-2 bg-black border-0 rounded md:my-10"></hr>
                    <p className="text-center font-bold text-xl pt-4 pb-2">Next Steps</p>
                    <p className="text-center pb-8">If you have other signatures in your model, place these in biological context too. Otherwise restart this workflow with another type of signature analysis (e.g. if you just did single base substitutions, proceed to indel / SV / copy-number analysis). </p>
                    {/* <p className="text-center pt-4"><FontAwesomeIcon icon={faTriangleExclamation} className="text-orange-300 text-4xl"></FontAwesomeIcon></p> */}

                </div>
            </div>
        </div>
    );
}
