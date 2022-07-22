import { getFromTheme } from "@styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavWrapper = styled.header`
  max-width: 100rem;
  margin-inline: auto;
  background-color: ${getFromTheme("secondary")};
  padding: 2.2rem 1.2rem 1.2rem;
  > div {
    background-color: ${getFromTheme("BG")};
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    padding: 1.6rem;
    border-radius: 0.5rem;
    font-weight: 700;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
  }
  li,
  button {
    &:not(:last-child) {
      margin-right: 0.8rem;
    }
  }
  a,
  button {
    padding: 1rem 0.4rem;
    color: ${getFromTheme("primary")};
    border-radius: 0.5rem;
    &:hover {
      background-color: ${getFromTheme("secondary")};
    }
  }
  a:hover {
    color: ${getFromTheme("link")};
  }
  button:hover {
    color: ${getFromTheme("accent")};
  }
`;

const Settings: React.FC = () => {
  return (
    <ul>
      {/* 
      Possible Additional Settings
      - Font Size Slider
      - High Contrast
      - Font Weight Steps
      - Dyslexia Font Option
      - Color Blindness Themes
      - ZOOM?
      */}
    </ul>
  );
};
export const Navbar: React.FC = () => {
  return (
    <NavWrapper>
      <div>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Logo Here</Link>
            </li>
            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
        <div className='nav-menu'>
          <button>Switch Theme</button>
          <button>Settings</button>
        </div>
      </div>
    </NavWrapper>
  );
};
