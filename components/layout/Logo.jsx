import styled from 'styled-components';
import { getFromTheme } from '../../styles/themes';

const logoContent = (
  <a>
    <div className='logo'>
      <div className='logo-text'>d</div>
      <div className='logo-slash'></div>
      <div className='logo-text'>g</div>
    </div>
  </a>
);

const Logo = styled.div.attrs((props) => ({ children: logoContent }))`
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid ${getFromTheme('muted')};
    border-radius: 100%;
    height: 8rem;
    width: 8rem;
    transform: rotate(-45deg);
    margin-right: -0.5rem;
  }
  .logo-text {
    font-size: ${getFromTheme('headingLG')};
    transform: rotate(45deg);
    color: ${getFromTheme('primary')};
  }
  .logo-slash {
    min-height: 0.5px;
    width: 6.5rem;
    background-color: red;
  }
`;
export default Logo;
