import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteLinks } from '../../utils/data';
import SiteLinks from '../SiteLinks';
import styled from 'styled-components';
import Logo from './Logo';
import { getFromTheme } from '../../styles/themes';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';
import { SiteHeader, MenuButton } from './Lib';
import { CgMenu } from 'react-icons/cg';
import MobileMenu from '../MobileMenu';

const Navbar = ({ handleThemeClick, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useViewport();
  const isMobile = width <= mq.sm;

  const handleMenuClick = () => setIsOpen(!isOpen);

  return (
    <SiteHeader>
      {!isMobile && (
        <nav>
          <Logo />
          <SiteLinks links={siteLinks} className={'full-nav'} />
        </nav>
      )}
      {isMobile && (
        <>
          <Logo />
          <MenuButton
            ariaExpanded={isOpen}
            onClick={handleMenuClick}
            handleMenuClick={handleMenuClick}
          >
            <CgMenu />
          </MenuButton>
        </>
      )}
      {!isMobile && (
        <button onClick={() => handleThemeClick()}>
          Too {theme === 'default' ? 'bright' : 'dark'}?{' '}
          <span className='material-icons-outlined'>
            {theme === 'default' ? 'mode_night' : 'light_mode'}
          </span>
        </button>
      )}
      {isOpen && isMobile && (
        <MobileMenu
          handleThemeClick={handleThemeClick}
          theme={theme}
          handleMenuClick={handleMenuClick}
        />
      )}
    </SiteHeader>
  );
};

export default Navbar;
