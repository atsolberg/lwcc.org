import v from '../../exported_scss_vars';
import bs from '../../postcss_vars';

const mb = Number(bs.breakpointMd.replace('px', ''));
export const desktop = `@media (min-width: ${bs.breakpointLg})`;
export const tablet = `@media (min-width: ${bs.breakpointMd})`;
export const mobile = `@media (max-width: ${mb - 1}px)`;

export const xl = `@media (min-width: ${bs.breakpointXl})`;
export const lg = desktop;
export const md = tablet;
export const sm = `@media (min-width: ${bs.breakpointSm})`;
export const max = `@media (min-width: ${v.maxWidth})`;
