import LogoSrc from '../../assets/logo.svg';
import { LogoContainer } from './Logo.styles';

const Logo = () => {
  return (
    <>
      <LogoContainer src={LogoSrc} alt="logo" />
    </> //
  );
};

export default Logo;
