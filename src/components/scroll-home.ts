const HEADER_OFFSET = 88;
const ABOUT_WAIT_MS = 3000;

let pendingHomeTop = false;

export function markPendingHomeTop() {
  pendingHomeTop = true;
}

export function takePendingHomeTop() {
  if (!pendingHomeTop) return false;
  pendingHomeTop = false;
  return true;
}

export function instantScrollTo(top: number) {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo({ top, left: 0, behavior: "instant" as ScrollBehavior });
  html.style.scrollBehavior = previous;
}

export function stripHomeHash() {
  if (window.location.pathname === "/" && window.location.hash) {
    history.replaceState(null, "", "/");
  }
}

export function jumpHomeToTop() {
  stripHomeHash();
  instantScrollTo(0);
}

function waitForElement(id: string): Promise<HTMLElement | null> {
  const existing = document.getElementById(id);
  if (existing) return Promise.resolve(existing);

  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      const el = document.getElementById(id);
      if (el) {
        observer.disconnect();
        window.clearTimeout(timer);
        resolve(el);
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    const timer = window.setTimeout(() => {
      observer.disconnect();
      resolve(document.getElementById(id));
    }, ABOUT_WAIT_MS);
  });
}

function aboutTargetY(el: HTMLElement) {
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);
}

export async function scrollToAboutSection() {
  const el = await waitForElement("about");
  if (!el) return;

  const jump = () => instantScrollTo(aboutTargetY(el));

  jump();
  requestAnimationFrame(jump);
  window.setTimeout(jump, 100);

  if (document.fonts?.ready) {
    void document.fonts.ready.then(jump);
  }
}
