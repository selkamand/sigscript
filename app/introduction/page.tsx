import TextLink from "@/components/ui/textlink"
import Link from "next/link";

export default function Home() {
    return (

        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-1xl sm:p-20">
                    <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">Choose Your Type of Analysis</h1>
                    <p className="text-center pb-8">There are two very different approaches to mutational signature analysis. You can either screen your samples using a database of previously described signatures with known aetiologies, or search for new signatures using de novo signature discovery</p>
                    <hr className="" />

                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Screen for Known Signatures</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">Screen your sample using a database of <TextLink href="/infopages/databases" text="previously described signatures"></TextLink> with known aetiologies</p>
                            <Link href="/workflow/screen/mutationcount"><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Discover New Signatures</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">Best if you have a large collection of samples and do not expect aetiologies driving the tumours to be represented in <TextLink href="/infopages/databases" text="common signature databases"></TextLink>  </p>
                            <Link href="/underconstruction"><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                        <div className="p-8 flex flex-col items-center text-center">
                            <h1 className="font-bold text-blue-500 text-lg">Learn More About Signatures</h1>
                            <p className="text-sm font-light text-gray-400 pt-4 pb-4">First time running signature analysis? Get up to speed with the essential reading list</p>
                            <Link href="/infopages/essentialreading"><button className="bg-blue-500 text-white font-bold py-2 px-4 hover:scale-110 duration-75">{'->'}</button></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end w-full">
                    <Link href="/reference"><p className="bg-transparent hover:cursor-pointer hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4  border-blue-500 hover:border-transparent rounded">Quick Reference &#8594;</p></Link>
                </div>
            </div>
        </div>
    );
}
