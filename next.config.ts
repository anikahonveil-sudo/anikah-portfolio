import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/operator", permanent: false },
      { source: "/work", destination: "/", permanent: false },
      { source: "/dossier/discord-community-moderation", destination: "/dossier/community-operations", permanent: false },
      { source: "/dossier/gaming-community-events", destination: "/dossier/community-operations", permanent: false },
      { source: "/dossier/poker-event-management", destination: "/dossier/live-event-operations", permanent: false },
      { source: "/dossier/fomo-marketing-research", destination: "/dossier/psychology-of-last-chance", permanent: false },
      { source: "/dossier/founder-research-and-databases", destination: "/dossier/the-lead-machine", permanent: false },
      { source: "/dossier/makeup-artist-social", destination: "/dossier/the-beauty-system", permanent: false },
      { source: "/dossier/workflow-experiments", destination: "/dossier/automation-workflow-lab", permanent: false },
      { source: "/work/discord-community-moderation", destination: "/dossier/community-operations", permanent: false },
      { source: "/work/gaming-community-events", destination: "/dossier/community-operations", permanent: false },
      { source: "/work/poker-event-management", destination: "/dossier/live-event-operations", permanent: false },
      { source: "/work/fomo-marketing-research", destination: "/dossier/psychology-of-last-chance", permanent: false },
      { source: "/work/founder-research-and-databases", destination: "/dossier/the-lead-machine", permanent: false },
      { source: "/work/makeup-artist-social", destination: "/dossier/the-beauty-system", permanent: false },
      { source: "/work/workflow-experiments", destination: "/dossier/automation-workflow-lab", permanent: false },
      { source: "/work/:slug", destination: "/dossier/:slug", permanent: false },
    ]
  },
}

export default nextConfig
