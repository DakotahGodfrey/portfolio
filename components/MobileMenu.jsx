import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SiteLinks from './SiteLinks';
import { siteLinks } from '../utils/data';
import { GoChevronRight } from 'react-icons/go';

const MobileMenu = ({ handleThemeClick, theme, handleMenuClick }) => {
  return (
    <nav className='mobile-menu'>
      <button className='close' onClick={handleMenuClick}>
        <GoChevronRight />
      </button>
      <SiteLinks
        handleMenuClick={handleMenuClick}
        links={siteLinks}
        handleThemeClick={handleThemeClick}
        isMobile={true}
        theme={theme}
      />
    </nav>
  );
};
export default MobileMenu;
