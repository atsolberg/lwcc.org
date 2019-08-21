import { shape, string, oneOfType } from 'prop-types';

export const videoType = shape({
  id: oneOfType([string, shape({ videoId: string.isRequired })]).isRequired,
  snippet: shape({
    publishedAt: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
  }).isRequired,
});
