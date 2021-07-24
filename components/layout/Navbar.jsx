import React, { useState } from 'react';
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
import { CgMenuHotdog } from 'react-icons/cg';

const Navbar = ({ handleThemeClick, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useViewport();
  const isMobile = width <= mq.sm;
  const handleMenuClick = () => setIsOpen(!isOpen);
  return (
    <SiteHeader>
      <nav>
        <Logo />
        {!isMobile && <SiteLinks links={siteLinks} />}
      </nav>
      {isMobile && (
        <MenuButton onClick={handleMenuClick}>
          menu <CgMenuHotdog />
        </MenuButton>
      )}
      {!isMobile && (
        <button onClick={() => handleThemeClick()}>
          too {theme === 'default' ? 'bright' : 'dark'}?{' '}
          <span className='material-icons-outlined'>
            {theme === 'default' ? 'mode_night' : 'light_mode'}
          </span>
        </button>
      )}
    </SiteHeader>
  );
};

export default Navbar;
