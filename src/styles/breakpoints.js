import v from '../../exported_scss_vars';
import bs from '../../postcss_vars';

const smN = Number(bs.breakpointSm.replace('px', ''));
const mdN = Number(bs.breakpointMd.replace('px', ''));
const lgN = Number(bs.breakpointLg.replace('px', ''));
const xlN = Number(bs.breakpointXl.replace('px', ''));
const maxN = Number(v.maxWidth.replace('px', ''));

export const desktop = `@media (min-width: ${bs.breakpointLg})`;
export const tablet = `@media (min-width: ${bs.breakpointMd})`;
export const mobile = `@media (max-width: ${mdN - 1}px)`;

export const sm = `@media (min-width: ${bs.breakpointSm})`;
export const uptoSm = `@media (max-width: ${smN - 1}px)`;

export const md = `@media (min-width: ${bs.breakpointMd})`;
export const uptoMd = `@media (max-width: ${mdN - 1}px)`;

export const lg = `@media (min-width: ${bs.breakpointLg})`;
export const uptoLg = `@media (max-width: ${lgN - 1}px)`;

export const xl = `@media (min-width: ${bs.breakpointXl})`;
export const uptoXl = `@media (max-width: ${xlN - 1}px)`;

export const max = `@media (min-width: ${v.maxWidth})`;
// Assuming 2 15px gutters
export const maxWithGutters = `@media (min-width: ${maxN + 30}px)`;
