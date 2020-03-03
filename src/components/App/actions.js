export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

export function addSearchResult({ keyword = '' }) {
  return {
    type: ADD_SEARCH_RESULT,
    keyword,
  };
}
