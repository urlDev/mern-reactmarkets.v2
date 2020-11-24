import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMostPopular } from '../../redux/actions/news';

import DefaultNewsComponent from '../defaultNewsComponent/DefaultNewsComponent';

const PopularNews = () => {
  const { popular } = useSelector((news) => news.news);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMostPopular());
  }, [dispatch]);

  return <DefaultNewsComponent newsType={popular} newsTitle="Popular" />;
};

export default PopularNews;
