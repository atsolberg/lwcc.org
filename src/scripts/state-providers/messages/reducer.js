import jscookie from 'js-cookie';

import { entityTable } from '../../util/array';

export const initialState = {
  loading: true,

  videos: {
    byId: {},
    allIds: [],
  },

  cookies: jscookie.get(),
};

/**
 * Main reducer for this app
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */
const reducer = (draft, action) => {
  switch (action.type) {
    case 'videos': {
      draft.videos = entityTable(action.payload);
      return draft;
    }

    case 'loading': {
      draft.loading = action.payload;
      return draft;
    }

    default:
      throw new Error(`Unknown action type: "${action.type}"`);
  }
};

export default reducer;
