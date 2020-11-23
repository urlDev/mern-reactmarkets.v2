import Search from '../search/Search';
import Logo from '../logo/Logo';
import Time from '../time/Time';

import { NavContainer } from './Nav.styles';

const Nav = () => {
  return (
    <>
      <NavContainer>
        <Time />
        <Logo />
        <Search />
      </NavContainer>
    </> //
  );
};

export default Nav;
