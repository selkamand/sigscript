import TextLink from "@/components/ui/textlink"
import Link from "next/link";

export default function Home() {
    return (

        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-1xl sm:p-20">
                    <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">Are there enough mutations in your sample?</h1>
                    <p className="text-center pb-8">Attempting to interpret mutational signatures results for samples with low mutation counts is unreliable. Ensure your sample has sufficient mutations before proceeding.</p>
                    <hr className="" />
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Sufficient Mutations</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">This patient has lots of mutations</p>
                            <Link href="/workflow/screen/fit"><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Quiet Tumour</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">Tumour has very few mutations</p>
                            <Link href=""><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Unsure</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">Uncertain how to identify whether there are enough mutations in the sample?</p>
                            <Link href=""><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
