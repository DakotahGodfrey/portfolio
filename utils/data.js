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

const podcasts = [
  {
    title: 'Ladybug Podcast',
    src: 'https://open.spotify.com/embed/show/1KBO1tSnm0XRlEILmqt7Em',
    description:
      "Ladybug is a podcast created by Emma Bostian, Kelly Vaughan, Sidney Buckner and Ali Spittel - 4 extremely talented software devs who bring a fresh perspective to the tech-podcasting world. Whether you're just starting out on your development or are trying to stay on topof the latest in the industry, this podcast is for you.",
  },
  {
    title: 'ShopTalk',
    src: 'https://open.spotify.com/embed/show/2PUoQB330ft0sTzSNoCPrH',
    description:
      "Hosted by Chris Coyier, and Dave Rupert Shoptalk is a podcast about just building websites - both Chris and Dave are well known in their fields. I highly reccomend this for anyone who is interested in web development. I've picked up quite a few tricks from this podcast.",
  },
  {
    title: 'CodeNewbie',
    src: 'https://open.spotify.com/embed/show/3rwr9GdoHxMWF8yZhsBzHn',
    description: `CodeNewbie is one my favorite tech podcasts. Hosted by Saron Yitbarek, Every week CodeNewbie interviews one person on their path to becoming a developer. They talk about their journey, their experiences, and their future plans. CodeNewbie guests come from all over the tech industry, I've found it's a great way to learn about different aspects of the world of tech.`,
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

export { siteLinks, socialLinks, podcasts };
