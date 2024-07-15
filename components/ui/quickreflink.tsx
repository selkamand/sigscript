import Link from "next/link"
export default function QuickRefLink() {
    return (
        <div className="flex flex-row justify-end w-full">
            <Link href="/reference"><p className="bg-transparent hover:cursor-pointer hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4  border-blue-500 hover:border-transparent rounded">Quick Reference &#8594;</p></Link>
        </div>
    )
}