import TextLink from "@/components/ui/textlink";
import Link from "next/link";

export default function ModelIndependentAnalyses() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20">
                <h1 className="mb-6 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900">
                    Consider running model-independent analyses
                </h1>
                <p className="text-center mb-8">
                    The most common reason a suitable signature model cannot be identified in a sample, despite the presence of sufficient mutations, is that the mechanism driving the mutational signatures is not captured by the known signature collection used for screening. Three possible explanations are:
                </p>
                <hr className="mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
                    <div>
                        <h3 className="font-semibold mb-2 text-xl underline">1</h3>
                        <h3 className="font-semibold mb-2">Small Signature Database</h3>
                        <p>Unlikely when using the Cosmic Human Cancer Signature (v3) or Signal Cancer Reference Signatures collections.</p>
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
                    If you know you are using a small signature database (e.g., one specific to the organ your sample was collected from), consider switching to a different/larger database. If that results in a convincing model, then <TextLink href="/workflow/screen/fit" newtab={false} text="return here"></TextLink>. Otherwise, proceed with the remaining checks.
                </p>

                <div
                    className="p-2 bg-blue-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                    role="alert"
                >
                    <span className="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                        Warning
                    </span>
                    <span className="font-semibold mr-2 text-left flex-auto">
                        Repeatedly re-running signature analysis using different databases increases the risk of finding a good-fitting but biologically meaningless signature combination by random chance. If your primary signature database is small, re-run the analysis only once with a much larger database.
                    </span>
                    <svg
                        className="fill-current opacity-75 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                </div>


                <hr className="mb-8" />
                <h2 className="font-bold text-xl mb-4">[2,3] Is my mutational profile artefactual or does it represent interesting (potentially new) biology?</h2>
                <p className="mb-4">
                    Perform a similar sample analysis against the rest of your cancer cohort. If the most similar samples share biological features, the observed mutational profile may truly be driven by a mechanism not described in the signature database used. However, if similar samples only share technical features (e.g., sequenced in the same batch), then the interesting mutational profile is likely artefactual.
                </p>
                <p className="mb-8">
                    If you do not have access to a large collection of samples, use the Signal online platform to compare your sample to the PCAWG, Hartwig, and the Genomics England 100,000 Genomes Project cancer samples.
                </p>
                <hr className="mb-8" />
                <h2 className="underline text-xl mb-4">Additional checks for artificial signatures</h2>
                <p className="mb-8">
                    Manually review mutations in a genome viewer (<TextLink text={"IGV"} newtab={true} href="https://igv.org/doc/desktop/"></TextLink>) for signs they might be artificial, such as alternate alleles only at the ends of reads, sequencing read strand bias, or presence exclusively in low-complexity or homopolymer regions.
                </p>
                <hr className="mb-8" />
                <h2 className="underline text-xl mb-4">Motif Discovery</h2>
                <p>
                    Finally, utilize tools like STREME for motif discovery to identify any sequence-context biases of your mutations.
                </p>
            </div>
        </div >
    );
}
