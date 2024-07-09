export default function Panel(props: any) {
    return (
        <div className="relative px-4 py-10 bg-white shadow-lg rounded-1xl p-20">{props.children}</div>
    )
}