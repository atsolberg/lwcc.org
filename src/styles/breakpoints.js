import bs from '../../postcss_vars';

const mb = Number(bs.breakpointMd.replace('px', ''));
export const desktop = `@media (min-width: ${bs.breakpointLg})`;
export const tablet = `@media (min-width: ${bs.breakpointMd})`;
export const mobile = `@media (max-width: ${mb - 1}px)`;
