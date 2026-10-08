import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BeautySystemFile } from "@/components/beauty-system-file"
import { CommunityOperationsFile } from "@/components/community-operations-file"
import { DigitalCultureExperimentsFile } from "@/components/digital-culture-experiments-file"
import { LastChanceResearchFile } from "@/components/last-chance-research-file"
import { LeadMachineFile } from "@/components/lead-machine-file"
import { LiveEventOperationsFile } from "@/components/live-event-operations-file"
import { WorkflowLabFile } from "@/components/workflow-lab-file"
import { Dossier } from "@/components/dossier"
import { files, getFile } from "@/content/site"

type DossierPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return files.map((file) => ({ slug: file.slug }))
}

export async function generateMetadata({ params }: DossierPageProps): Promise<Metadata> {
  const { slug } = await params
  const file = getFile(slug)

  if (!file) {
    return { title: "File missing" }
  }

  return {
    title: slug === "automation-workflow-lab" ? "The workflow lab" : file.title,
    description:
      slug === "community-operations"
        ? "5,000 members. One live digital ecosystem."
        : slug === "live-event-operations"
          ? "Five days. One winner. A live event that had to keep moving."
          : slug === "psychology-of-last-chance"
            ? "An independent study of FOMO, scarcity and consumer behaviour."
            : slug === "the-lead-machine"
              ? "Turning messy web information into structured B2B prospect data."
              : slug === "the-beauty-system"
                ? "Turning a beauty brand’s ideas into content people actually want to watch."
                : slug === "automation-workflow-lab"
                  ? "Experiments in automation, AI-assisted research and digital systems."
                  : slug === "digital-culture-experiments"
                    ? "Observations on communities, attention, behaviour and the systems shaping the internet."
                    : file.abstract,
  }
}

export default async function DossierPage({ params }: DossierPageProps) {
  const { slug } = await params
  const file = getFile(slug)

  if (!file) {
    notFound()
  }

  if (slug === "community-operations") {
    return <CommunityOperationsFile />
  }

  if (slug === "live-event-operations") {
    return <LiveEventOperationsFile />
  }

  if (slug === "psychology-of-last-chance") {
    return <LastChanceResearchFile />
  }

  if (slug === "the-lead-machine") {
    return <LeadMachineFile />
  }

  if (slug === "the-beauty-system") {
    return <BeautySystemFile />
  }

  if (slug === "automation-workflow-lab") {
    return <WorkflowLabFile />
  }

  if (slug === "digital-culture-experiments") {
    return <DigitalCultureExperimentsFile />
  }

  return <Dossier file={file} />
}
