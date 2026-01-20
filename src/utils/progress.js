const KEY = "prepmate_progress_v1";

export function getProgress() {
  if (typeof window === "undefined") {
    return { strong: {}, weak: {} };
  }

  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { strong: {}, weak: {} };
    return JSON.parse(raw);
  } catch (e) {
    return { strong: {}, weak: {} };
  }
}

export function saveProgress(data) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function markStrong(id) {
  const p = getProgress();
  p.strong[id] = true;
  delete p.weak[id];
  saveProgress(p);
  return p;
}

export function markWeak(id) {
  const p = getProgress();
  p.weak[id] = true;
  delete p.strong[id];
  saveProgress(p);
  return p;
}
