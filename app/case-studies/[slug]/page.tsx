// app/case-studies/[slug]/page.tsx

import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";



type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
const {slug} = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="px-8 py-32">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-wide text-zinc-500">
          Case Study
        </p>

        <h1 className="text-5xl font-bold">{study.title}</h1>

        <p className="mt-4 text-xl text-zinc-600">{study.client}</p>
      </section>

      <section className="mx-auto mt-16 grid max-w-4xl gap-10">
        <div>
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="mt-3 text-zinc-600">{study.problem}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Our Strategy</h2>
          <p className="mt-3 text-zinc-600">{study.strategy}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Results</h2>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600">
            {study.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}