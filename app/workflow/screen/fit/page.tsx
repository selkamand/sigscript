import TextLink from "@/components/ui/textlink"
import Link from "next/link";

export default function Home() {
    return (

        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-1xl sm:p-20">
                    <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">Does the mutational signature model fit the data well?</h1>
                    <p className="text-center pb-8">If the signature model does not accurately represent the observed data, the signature contribution percentages derived from the model are not reliable and cannot provide meaningful insights.</p>
                    <hr className="" />
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Model fits the data well</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">The model shows high cosine-similarity to the observed data, but not overfit (i.e. similarity is not achieved by the presence of large numbers of unrelated signatures)</p>
                            <Link href="/workflow/screen/biocontext"><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Model is not representative of the observed data</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">The algorithms employed could not reconstruct a mutational profile similar to what was observed using only known signatures from <TextLink href="/infopages/databases" text="published signature collections"></TextLink></p>
                            <Link href="/workflow/screen/model_independent_analyses"><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Unsure</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">How do I check whether the model is fitting my data well?</p>
                            <Link href=""><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
