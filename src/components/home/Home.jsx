import PersonalNews from '../personalNews/PersonalNews';
import FeaturedStocks from '../featuredStocks/FeaturedStocks';
import PopularNews from '../popularNews/PopularNews';
import TechnologyNews from '../technologyNews/TechnologyNews';

import { HomeContainer } from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <PersonalNews />
      <FeaturedStocks />
      <PopularNews />
      <TechnologyNews />
    </HomeContainer>
  );
};

export default Home;
