import { shape, string, instanceOf } from 'prop-types';

export const videoType = shape({
  id: string,
  speaker: string,
  title: string,
  thumb: string,
  date: instanceOf(Date),
  description: string,
});
