import React from 'react';

import SquareSrc from '../../assets/numberSquare.svg';
// import AllSrc from '../../assets/all.svg';

import {
  PopularNewsContainer,
  SectionTitle,
  SectionContainer,
  SectionHeader,
  SectionHeaderSquare,
  SectionContent,
} from '../popularNews/PopularNews.styles.js';

const DefaultNewsComponent = ({ newsType, newsTitle }) => {
  return (
    <PopularNewsContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingRight: '2rem',
        }}
      >
        <SectionTitle>{newsTitle}</SectionTitle>
      </div>

      <hr />
      {newsType.map((news) => {
        return (
          <>
            <SectionContainer
              url={
                news.media
                  ? news.media[0]['media-metadata'][2].url
                  : news.multimedia[2].url
              }
            >
              <SectionHeader>
                <h6>{news.byline.split(',').slice(0, 1)}</h6>
                <SectionHeaderSquare>
                  <p>{news.section}</p>
                  <img src={SquareSrc} alt="" />
                </SectionHeaderSquare>
              </SectionHeader>
              <SectionContent>
                <h1>{news.title}</h1>
                <img
                  url="true"
                  src={
                    news.media
                      ? news.media[0]['media-metadata'][2].url
                      : news.multimedia[2].url
                  }
                  alt=""
                />
              </SectionContent>
            </SectionContainer>
            <hr />
          </> //
        );
      })}
    </PopularNewsContainer>
  );
};

export default DefaultNewsComponent;
