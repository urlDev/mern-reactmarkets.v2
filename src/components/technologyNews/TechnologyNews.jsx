import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTopStories } from '../../redux/actions/news';

import DefaultNewsComponent from '../defaultNewsComponent/DefaultNewsComponent';

const TechnologyNews = () => {
  const { tech } = useSelector((news) => news.news);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTopStories('technology'));
  }, [dispatch]);

  return <DefaultNewsComponent newsType={tech} newsTitle="Technology" />;
};

export default TechnologyNews;
