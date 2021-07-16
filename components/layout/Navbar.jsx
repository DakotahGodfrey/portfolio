import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteLinks } from '../../utils/data';
import SiteLinks from '../SiteLinks';
import styled from 'styled-components';
import Logo from './Logo';
import { getFromTheme } from '../../styles/themes';

const SiteHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80rem;
  margin-inline: auto;
  padding: 2rem;
  font-size: ${getFromTheme('headingSM')};
  color: ${getFromTheme('primary')};
  nav{
    display: flex;
    align-items: center;
  ul {
    display: inherit;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid ${getFromTheme('muted')};
    a {
      display: inline-block;
      color: inherit;
    }
    li {
      margin-left: 0.75rem;
      &:last-child {
        margin-right: 0.75rem;
      }
    }
  }
  }
  button {
    display: flex;
    align-items: center;
    min-height 4.4rem;
    padding:0  0.4rem 0.4rem 0.4rem;
    span {
      transition: all 0.4s ease-out;
      border-radius:50px;
      height: 2.4rem;
      width: 2.4rem;
    }
    &:hover{
      cursor: pointer;
      span{
        transform: rotate(45deg);
      }
    }
  }
`;

const Navbar = () => {
  return (
    <SiteHeader>
      <nav>
        <Link href={'/'} passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <SiteLinks links={siteLinks} />
      </nav>
      <button>
        Too Bright? <span className='material-icons-outlined'>mode_night</span>
      </button>
    </SiteHeader>
  );
};

export default Navbar;
