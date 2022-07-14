import React from "react";

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
    <nav>
      <ul>
        <li>Logo Here</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>About</li>
      </ul>
      <div className='nav-menu'>
        <button>Switch Theme</button>
        <button>Settings</button>
      </div>
    </nav>
  );
};
