import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Nav from './components/nav/Nav';
import FinanceBar from './components/financeBar/FinanceBar';
import Home from './components/home/Home';

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
      <FinanceBar />
      <Home />
    </div>
  );
};

export default App;
