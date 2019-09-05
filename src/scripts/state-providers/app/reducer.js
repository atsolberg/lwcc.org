import jscookie from 'js-cookie';

export const initialState = {
  speed: null,
  cookies: jscookie.get(),
};

/**
 * Main reducer for this app
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */
const reducer = (draft, action) => {
  switch (action.type) {
    case 'speed': {
      draft.speed = action.payload;
      return draft;
    }

    default:
      throw new Error(`Unknown action type: "${action.type}"`);
  }
};

export default reducer;
