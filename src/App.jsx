import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Nav from './components/nav/Nav';

import { fetchChart } from './redux/actions/chart';
import { fetchTopStories } from './redux/actions/news';

import './App.css';

const App = () => {
  // const { chart } = useSelector((chart) => chart.chart);
  // const { loading, news, error } = useSelector((news) => news.news);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchChart());
  //   dispatch(fetchTopStories('business'));
  // }, [dispatch]);

  return (
    <div className="App">
      <Nav />
    </div>
  );
};

export default App;
