import { VOWS } from '../data/vows';

/**
 * Encode a state object { [vowId]: levelIndex | -1 } into a query string value.
 * Format: "blood:1,fury:2" (1-based level, inactive vows omitted)
 */
export function encodeState(state) {
  const parts = [];
  VOWS.forEach((vow) => {
    const li = state[vow.id];
    if (li >= 0) parts.push(`${vow.id}:${li + 1}`);
  });
  return parts.join(',');
}

/**
 * Decode a query string (window.location.search) back into a state object.
 * Returns a partial state — only vows present in the URL are set.
 */
export function decodeSearch(search) {
  const params = new URLSearchParams(search);
  const v = params.get('v');
  const result = {};
  if (!v) return result;

  v.split(',').forEach((part) => {
    const [id, lvlStr] = part.split(':');
    const lvl = parseInt(lvlStr, 10);
    const vow = VOWS.find((vw) => vw.id === id);
    if (vow && !isNaN(lvl) && lvl >= 1 && lvl <= vow.levels.length) {
      result[id] = lvl - 1;
    }
  });

  return result;
}

/**
 * Build initial state from URL search params, falling back to -1 for any
 * vow not present in the URL.
 */
export function buildInitialState(search) {
  const fromUrl = decodeSearch(search);
  const state = {};
  VOWS.forEach((vow) => {
    state[vow.id] = fromUrl[vow.id] ?? -1;
  });
  return state;
}
