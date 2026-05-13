type RouteHandler = (route: string) => void;

export function createRouter(handler: RouteHandler) {
  function onHashChange() {
    const hash = window.location.hash || "#/";
    const route = hash.slice(1) || "/";
    handler(route);
  }

  window.addEventListener("hashchange", onHashChange);
  onHashChange();
}
