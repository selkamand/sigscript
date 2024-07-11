import TextLink from "@/components/ui/textlink";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20">
                <h1 className="mb-6 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900">
                    Consider running model-independent analyses
                </h1>
                <p className="text-center mb-8">
                    The most common reason no good signature model could be found in a sample despite sufficient mutations being present is that the mechanism driving mutational signatures is not described by the known signature collection used for screening. There are three explanations:
                </p>
                <hr className="mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
                    <div>
                        <h3 className="font-semibold mb-2 text-xl underline">1</h3>
                        <h3 className="font-semibold mb-2">Small Signature Database</h3>
                        <p>If using version 3 of the Cosmic Human Cancer Signature or Signal Cancer Reference Signatures collections, this is unlikely.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 text-xl underline">2</h3>
                        <h3 className="font-semibold mb-2">Rare or Undescribed Mechanism</h3>
                        <p>There could could be exciting new biology to discover.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 text-xl underline">3</h3>
                        <h3 className="font-semibold mb-2">Sequencing or Bioinformatic Artifact</h3>
                        <p>The mutations cannot be explained by the database because they are not real.</p>
                    </div>
                </div>
                <hr className="mb-8" />
                <p className="mb-8">All three possibilities should be explored systematically.</p>
                <h2 className="font-bold text-xl mb-4">[1] Was my database too small?</h2>
                <p className="mb-8">
                    If you know you are using a small signature database (e.g., one specific to the organ your sample was collected from), consider switching to a different/larger database. If that results in a convincing model, great. If not, proceed with the remaining checks.
                </p>
                <hr className="mb-8" />
                <h2 className="font-bold text-xl mb-4">[2,3] Is my mutational profile artefactual or does it represent interesting (potentially new) biology?</h2>
                <p className="mb-4">
                    Perform a similar sample analysis against the rest of your cancer cohort. If there are some very similar samples that share other biological similarities with your sample, an undescribed signature may be a possibility. If similar samples exist but share no biological features, only technical ones (e.g., samples sequenced in the same batch), then your sample is probably artificial.
                </p>
                <p className="mb-8">
                    If you do not have access to a large collection of samples, use the Signal online platform to compare your sample to the PCAWG, Hartwig, and the Genomics England 100,000 Genomes Project cancer samples.
                </p>
                <hr className="mb-8" />
                <h2 className="underline text-xl mb-4">Additional checks for artificial signatures</h2>
                <p className="mb-8">
                    Manually review your mutations in IGV to see if there are any obvious signs that the mutations are not real (e.g., alt alleles present only at the end of reads, sequencing read strand bias, exclusive presence in low-complexity/homopolymer regions).
                </p>
                <hr className="mb-8" />
                <h2 className="underline text-xl mb-4">Motif Discovery</h2>
                <p>
                    Finally, you can use tools like STREME to perform motif discovery and identify any sequence-context biases of your mutations.
                </p>
            </div>
        </div>
    );
}
