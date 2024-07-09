import TextLink from "../../../components/ui/textlink"
import Card1 from "../../../components/ui/card1"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Panel from "@/components/ui/panel"

export default function databases() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center" >

            <Panel>
                <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">Published Signature Collections</h1>
                <p className="text-center pb-8">There are several different collections of published signatures whose aetiology has already been described. Collections are generated by using experimental models (see collections tagged <span className="font-semibold">experimental</span>) or by decomposing the mutational profiles of primary tumour samples and examining correlations with potentially mutational processes</p>
                {/* <hr className="h-px my-4 w-full bg-gray-500 border-0"></hr> */}
                <div className="grid grid-cols-4 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>COSMIC Human Cancer Signature Collection</CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Version 2</p>
                            <p>Version 3</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>COSMIC Experimental Signature Collection</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p></p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Signal Experimental Signature Collection</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Organ Specific Signature Collection</CardTitle>
                            <CardDescription>Degasperi, 2022</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Cancer Reference Signatures</CardTitle>
                            <CardDescription>Degasperi, 2022</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </Panel>
            {/* <hr className="h-px my-4 w-full bg-gray-500 border-0"></hr> */}
            <h2 className="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-10">Accessing Signature Collections in R</h2>
            <p className="text-center">
                All of these signature collections are accessible in R using the <TextLink text="sigstash package" newtab={true} href="https://github.com/selkamand/sigstash"></TextLink>
            </p>
        </div >
    )
}

// <ol>Cosmic Human Cancer Signature Collection (V2)</ol>
// <ol>Cosmic Signature Collection (V3)</ol>

// <ol>Cosmic Experimental Signature Collection</ol>
// <ol>Signal Experimental Signature Collection</ol>
// <ol></ol>
