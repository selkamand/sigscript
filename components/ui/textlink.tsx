import Link from 'next/link';

export default function TextLink({ href = "", text = "link", newtab = false }) {
    let target = "_self"
    if (newtab) { target = "_blank" }
    return (
        <Link href={href} target={target} className="underline decoration-blue-500 hover:text-red-950 hover:uppercase duration-200">{text}</Link>

    )
}


// <Link href="/databases" className="underline decoration-blue-500 hover:text-red-950 hover:uppercase duration-200"> < /Link>
{/* cancer signature databases  */ }