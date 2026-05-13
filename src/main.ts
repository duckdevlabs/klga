import { marked } from "marked";
import mermaid from "mermaid";
import { createRouter } from "./router";
import { getPage, getHomePage } from "./pages";
import { homeHTML } from "./home";
import "./style.css";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#FF4D4D",
    primaryTextColor: "#FFFFFF",
    primaryBorderColor: "#FF6B35",
    lineColor: "#999999",
    secondaryColor: "#1E1E1E",
    tertiaryColor: "#2A2A2A",
  },
});

const app = document.getElementById("app")!;
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

function setActiveNav(route: string) {
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const linkRoute = href.slice(1);
    a.classList.toggle(
      "active",
      route === linkRoute || (linkRoute !== "/" && route.startsWith(linkRoute))
    );
  });
}

async function renderMermaid() {
  const els = app.querySelectorAll<HTMLElement>(".mermaid");
  for (const el of els) {
    const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
    const { svg } = await mermaid.render(id, el.textContent?.trim() || "");
    el.innerHTML = svg;
  }
}

function renderHome() {
  const page = getHomePage();
  document.title = `${page.title} — KLGA`;
  app.innerHTML = homeHTML;
}

async function renderPage(route: string) {
  const page = getPage(route);
  if (!page) {
    app.innerHTML = `
      <article class="page">
        <header class="page-header"><h1>Not Found</h1></header>
        <div class="page-content"><p>The page you're looking for doesn't exist.</p>
        <p><a href="#/">Go home</a></p></div>
      </article>`;
    document.title = "Not Found — KLGA";
    return;
  }

  document.title = `${page.title} — KLGA`;
  const html = await marked.parse(page.markdown);
  app.innerHTML = `
    <article class="page">
      <header class="page-header">
        <h1>${page.title}</h1>
        ${page.description ? `<p class="page-description">${page.description}</p>` : ""}
      </header>
      <div class="page-content">${html}</div>
    </article>`;
}

// Mobile nav: close on link click
document.querySelector(".nav-toggle")?.addEventListener("click", () => {
  document.querySelector(".nav-links")?.classList.toggle("open");
});
document.querySelectorAll(".nav-dropdown-toggle").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    (el as HTMLElement).parentElement?.classList.toggle("open");
  });
});
document.querySelectorAll(".nav-links a:not(.nav-dropdown-toggle)").forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.remove("open");
    document.querySelector(".nav-dropdown")?.classList.remove("open");
  });
});

createRouter(async (route) => {
  setActiveNav(route);
  window.scrollTo(0, 0);

  if (route === "/") {
    renderHome();
  } else {
    await renderPage(route);
  }

  await renderMermaid();
});
