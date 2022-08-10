import v from '../../exported_scss_vars';

const smN = Number(v.gridBreakpoints.sm.replace('px', ''));
const mdN = Number(v.gridBreakpoints.md.replace('px', ''));
const lgN = Number(v.gridBreakpoints.lg.replace('px', ''));
const xlN = Number(v.gridBreakpoints.xl.replace('px', ''));
const maxN = Number(v.maxWidth.replace('px', ''));

export const desktop = `@media (min-width: ${v.gridBreakpoints.lg})`;
export const tablet = `@media (min-width: ${v.gridBreakpoints.md})`;
export const mobile = `@media (max-width: ${mdN - 1}px)`;

export const sm = `@media (min-width: ${v.gridBreakpoints.sm})`;
export const uptoSm = `@media (max-width: ${smN - 1}px)`;

export const md = `@media (min-width: ${v.gridBreakpoints.md})`;
export const uptoMd = `@media (max-width: ${mdN - 1}px)`;

export const lg = `@media (min-width: ${v.gridBreakpoints.lg})`;
export const uptoLg = `@media (max-width: ${lgN - 1}px)`;

export const xl = `@media (min-width: ${v.gridBreakpoints.xl})`;
export const uptoXl = `@media (max-width: ${xlN - 1}px)`;

export const max = `@media (min-width: ${v.maxWidth})`;
// Assuming 2 15px gutters
export const maxWithGutters = `@media (min-width: ${maxN + 30}px)`;
