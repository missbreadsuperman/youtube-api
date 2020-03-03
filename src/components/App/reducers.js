/* eslint-disable no-case-declarations */
import { connect } from 'react-redux';

import axios from 'axios';

import {
  ADD_SEARCH_RESULT,
} from './actions';

export const initialState = {
  results: [],
  a: 'b',
};

export const searchResultReducer = async (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${action.keyword}&key=AIzaSyDlvAeiT_uVgSQUW1p8eOWv6t1wSUz6Zcw`);
      return { ...state, results: res.data.items };
    default:
      return state;
  }
};

const mapStateToProps = (state) => ({
  searchResult: state,
});

export default connect(mapStateToProps)(searchResultReducer);
