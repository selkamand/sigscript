import WorkflowSVG from "@/components/svgs/workflow";
import Panel from "@/components/ui/panel";
import Image from "next/image";




export default function Reference() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <Panel className="flex flex-col max-h-dvh">
                <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">Quick Reference Guide</h1>
                <p className="text-center pb-8">Follow this workflow to interpret the results of a mutational signature analysis</p>
                <div className="flex justify-center">

                    <WorkflowSVG className="max-h-[600px]"></WorkflowSVG>
                </div>
                {/* <Image src={workflow} alt="Workflow" className="mx-auto"></Image> */}
            </Panel >
        </div >

    )
}
