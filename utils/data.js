import {
  FaGithubAlt,
  FaTwitter,
  FaLinkedinIn,
  FaCodepen,
} from 'react-icons/fa';
const siteLinks = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'About',
    path: '/about',
  },
  {
    display: 'Blog',
    path: '/blog',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
  {
    display: 'Projects',
    path: '/projects',
  },
];

const socialLinks = [
  {
    display: 'GitHub',
    url: 'https://github.com/dakotahgodfrey',
    icon: <FaGithubAlt />,
  },
  {
    display: 'Twitter',
    url: 'https://twitter.com/dakotah_dev',
    icon: <FaTwitter />,
  },
  {
    display: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dakotahgodfrey',
    icon: <FaLinkedinIn />,
  },
  {
    display: 'CodePen',
    url: 'https://codepen.io/dakotahgodfrey',
    icon: <FaCodepen />,
  },
];

export { siteLinks, socialLinks };
