import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteLinks } from '../../utils/data';
import SiteLinks from '../SiteLinks';
import styled from 'styled-components';
import Logo from './Logo';
import { getFromTheme } from '../../styles/themes';

const SiteHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  justify-content: space-between;
  max-width: 100rem;
  margin-inline: auto;
  background-color: ${getFromTheme('secondary')};
  padding: 2rem;
  font-size: ${getFromTheme('headingSM')};
  color: ${getFromTheme('primary')};
  nav{
    display: flex;
    align-items: center;
    grid-column: 1;
  ul {
    display: inherit;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid ${getFromTheme('muted')};
    a {
      display: block;
      color: inherit;
      transition: all 0.4s ease-out;
      padding: 0 0.75rem
    }
    li {
      border-bottom: 2px solid transparent;
      margin-bottom: -0.45rem;
      transition: all 0.4s ease-out;
      &:hover{
        border-color: ${getFromTheme('accent')};
        a{

          transform: scale(1.1);
        }
      }
      &:first-child{
        margin-left: 0.2rem ;
        }
      }
    }
  }
  button {
    grid-column: 2;
    display: flex;
    align-items: center;
    min-height 4.4rem;
    padding:0 0.4rem 0.4rem 0.4rem;
    span {
      transition: all 0.4s ease-out;
      border-radius:50px;
      height: 2.4rem;
      width: 2.4rem;
      margin:  0.4rem;
    }
    &:hover{
      cursor: pointer;
      span{
        transform: rotate(45deg);
      }
    }
  }
`;

const Navbar = ({ handleThemeClick, theme }) => {
  return (
    <SiteHeader>
      <nav>
        <Logo />
        <SiteLinks links={siteLinks} />
      </nav>
      <button onClick={() => handleThemeClick()}>
        too {theme === 'default' ? 'bright' : 'dark'}?{' '}
        <span className='material-icons-outlined'>
          {theme === 'default' ? 'mode_night' : 'light_mode'}
        </span>
      </button>
    </SiteHeader>
  );
};

export default Navbar;
