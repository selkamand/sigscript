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
import TextCardsLinked from "@/components/ui/textcards"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

export default function databases() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center" >

            <Panel>
                <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-0">Published Signature Collections</h1>
                <p className="text-center pb-8">There are several different collections of published signatures whose aetiology has already been described. Collections are generated by using experimental models (see collections tagged <span className="font-semibold">experimental</span>) or by decomposing the mutational profiles of primary tumour samples and examining correlations with potentially mutational processes</p>
                {/* <hr className="h-px my-4 w-full bg-gray-500 border-0"></hr> */}

                <div className="grid grid-cols-3 gap-8 w-full px-10">
                    <TextCardsLinked title="COSMIC Human Cancer Signature Collection" description="A non-exhaustive set of high-confidence reference signatures extracted primarily from human cancer samples from the PCAWG initiative, but added to through curation of papers exploring specific exposures that were unlikely to be captured in the PCAWG dataset." icon={faDatabase} href="https://cancer.sanger.ac.uk/signatures/"></TextCardsLinked>
                    <TextCardsLinked title="Signal Cancer Reference Signatures" description="Mutational signatures originally extracted based on 3000 primary cancer tumours from PCAWG, but then validated and expanded using more than 18,000 samples across ICGC's PCAWG dataset, Hartwig Medical Foundation's collection of metastatic cancers and Genomics England's 100,000 Genomes Project. Includes many rare signatures." icon={faDatabase} href="https://signal.mutationalsignatures.com/explore/cancer/about"></TextCardsLinked>
                    <TextCardsLinked title="COSMIC Experimental Signature Collection" description="Mutational signatures extracted from experimental models following exposure to exogenous mutagens or knockout of genes of interest" icon={faDatabase} href="https://cancer.sanger.ac.uk/signatures/experimental/"></TextCardsLinked>
                    <TextCardsLinked title="Signal Experimental Signature Collections" description="Mutational signatures extracted from experimental models following exposure to exogenous mutagens or knockout of genes of interest" icon={faDatabase} href="https://signal.mutationalsignatures.com/explore/experimental/about"></TextCardsLinked>
                    <TextCardsLinked title="Signal Organ-Specific Cancer Signatures" description="A very large collection of organ-specific mutational signatures. Clustering of these signatures was used to create the much more process-level set of Cancer Reference Signatures" href="https://signal.mutationalsignatures.com/explore/cancer/about" icon={faDatabase}></TextCardsLinked>
                </div>
                {/*                 
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
                </div> */}
            </Panel >
            {/* <hr className="h-px my-4 w-full bg-gray-500 border-0"></hr> */}
            < h2 className="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 pb-4 pt-10" > Accessing Signature Collections in R</h2 >
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
