import React, { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import axios from 'axios';

import { ResultPanel } from 'components/ResultPanel';
import { Pagination } from '../Pagination';

export default function App() {
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const apikey = 'YOUR_API_KEY';
  const fetchResult = async (keyword = '') => {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${keyword}&key=${apikey}`);
    setResult(res.data.items);
    // addSearchResult({ keyword });
  };
  useEffect(() => {
    fetchResult();
  }, []);
  return (
    <div>
      <Header fetchResult={fetchResult} />
      <ResultPanel items={result.slice(currentPage * 10, (currentPage + 1) * 10)} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

// const mapStateToProps = (state) => ({ searchResult: state });

// const mapDispatchToProps = (dispatch) => ({
//   fetchResult: () => dispatch(addSearchResult({ type: 'ADD_SEARCH_RESULT' })),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(App);
