import metronomeRaw from "../metronome.md?raw";
import tapTempoRaw from "../tap-tempo.md?raw";
import practiceCalendarRaw from "../practice-calendar.md?raw";
import settingsRaw from "../settings.md?raw";
import tempoMarkingsRaw from "../reference/tempo-markings.md?raw";
import timeSignaturesRaw from "../reference/time-signatures.md?raw";
import gradualMutingRaw from "../reference/gradual-muting.md?raw";

export interface Page {
  title: string;
  description: string;
  markdown: string;
  layout: "page" | "home";
}

interface FrontMatter {
  title: string;
  description: string;
  layout: string;
}

function parseFrontMatter(raw: string): { meta: FrontMatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: { title: "", description: "", layout: "page" }, body: raw };

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
  }

  return {
    meta: {
      title: meta.title || "",
      description: meta.description || "",
      layout: meta.layout || "page",
    },
    body: match[2],
  };
}

function processPage(raw: string): Page {
  const { meta, body } = parseFrontMatter(raw);
  const cleaned = body.replace(
    /\{\{\s*'([^']+)'\s*\|\s*relative_url\s*\}\}/g,
    (_match, path: string) => `#${path}`
  );
  return {
    title: meta.title,
    description: meta.description,
    markdown: cleaned,
    layout: meta.layout === "default" ? "home" : "page",
  };
}

const pages: Record<string, Page> = {
  "/metronome": processPage(metronomeRaw),
  "/tap-tempo": processPage(tapTempoRaw),
  "/practice-calendar": processPage(practiceCalendarRaw),
  "/settings": processPage(settingsRaw),
  "/reference/tempo-markings": processPage(tempoMarkingsRaw),
  "/reference/time-signatures": processPage(timeSignaturesRaw),
  "/reference/gradual-muting": processPage(gradualMutingRaw),
};

export function getPage(route: string): Page | undefined {
  return pages[route];
}

export function getHomePage(): Page {
  return {
    title: "Home",
    description: "Kiko Loureiro Guitar Academy — Practice Companion App",
    markdown: "",
    layout: "home",
  };
}
