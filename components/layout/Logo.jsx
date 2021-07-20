import styled from 'styled-components';
import { getFromTheme } from '../../styles/themes';
import Link from 'next/link';

const logoContent = (
  <Link href='/' passHref>
    <div className='logo'>
      <div className='content'>
        <div className='logo-text'>d</div>
        <div className='logo-slash'></div>
        <div className='logo-text'>g</div>
      </div>
    </div>
  </Link>
);

const Logo = styled.div.attrs((props) => ({ children: logoContent }))`
  .logo {
    display: flex;
    justify-content: center;
    border: 2px solid ${getFromTheme('muted')};
    border-radius: 100%;
    height: 6rem;
    width: 6rem;
    transform: rotate(-45deg);
    margin-right: -0.5rem;
    transition: all 0.8s ease-out;
    cursor: pointer;
    &:hover {
      transform: rotate(360deg);
      .logo-text {
        transform: rotate(0deg);
      }
    }
  }
  .content {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 50%;
    flex-direction: column;
  }
  .logo-text {
    font-size: 2rem;
    transform: rotate(45deg);
    color: ${getFromTheme('primary')};
  }
  .logo-slash {
    position: absolute;
    min-height: 0.5px;
    min-width: 100%;
    top: 50%;
    bottom: 50%;
    transform-origin: center;
    transform: scaleX(1.5);
    background-color: red;
  }
`;
export default Logo;
