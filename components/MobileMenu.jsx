import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SiteLinks from './SiteLinks';
import { siteLinks } from '../utils/data';
import { GoChevronRight } from 'react-icons/go';
const trapFocus = () => {};
const MobileMenu = ({ handleThemeClick, theme, handleMenuClick }) => {
  useEffect(() => {
    const focusableElements = ['button', '[href]'];
    const modal = document.getElementById('modal');
    const firstFocusItem = modal.querySelectorAll(focusableElements[0]);
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusItem = focusableContent[focusableContent.length - 1];
    const modalOverlay = document.getElementById('modal-overlay');

    const handleFocusChange = (e) => {
      let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusItem[0]) {
          lastFocusItem.focus(); // add focus for the last focusable element
          e.preventDefault();
        }
      } else {
        // if tab key is pressed
        if (document.activeElement === lastFocusItem) {
          // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusItem[0].focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      }
    };

    const handleOverlayClick = (e) => {
      if (e.target.id === 'modal-overlay') {
        handleMenuClick();
      }
    };

    modalOverlay.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleFocusChange);
    firstFocusItem[0].focus();
    return () => {
      modalOverlay.removeEventListener('click', handleOverlayClick);
      document.removeEventListener('keydown', handleFocusChange);
    };
  }, []);

  return (
    <div id='modal-overlay'>
      <nav className='mobile-menu' id='modal'>
        <button
          className='close'
          aria-label='Close dialog'
          onClick={handleMenuClick}
        >
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
    </div>
  );
};
export default MobileMenu;
