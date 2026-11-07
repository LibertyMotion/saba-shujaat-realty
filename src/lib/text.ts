import { TODO_MARK } from '../config/site';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const TODO_RE = new RegExp(`${TODO_MARK}\\[(.*?)\\]${TODO_MARK}`, 'g');

/** Escape text and highlight any todo('...') placeholders. Use with set:html. */
export const rich = (s: string) =>
  escapeHtml(s).replace(TODO_RE, (_m, label) => `<span class="todo" title="Placeholder — replace before launch">[${label}]</span>`);

/** Plain text for attributes, <title>, JSON-LD: strips the invisible markers. */
export const plain = (s: string) => s.replaceAll(TODO_MARK, '');
