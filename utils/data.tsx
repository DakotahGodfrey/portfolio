import {
  FaGithubAlt,
  FaTwitter,
  FaLinkedinIn,
  FaCodepen,
} from "react-icons/fa";
export const socialLinks: {
  display: string;
  url: string;
  icon: JSX.Element;
}[] = [
  {
    display: "GitHub",
    url: "https://github.com/dakotahgodfrey",
    icon: <FaGithubAlt />,
  },
  {
    display: "Twitter",
    url: "https://twitter.com/dakotah_dev",
    icon: <FaTwitter />,
  },
  {
    display: "LinkedIn",
    url: "https://www.linkedin.com/in/dakotahgodfrey",
    icon: <FaLinkedinIn />,
  },
  {
    display: "CodePen",
    url: "https://codepen.io/dakotahgodfrey",
    icon: <FaCodepen />,
  },
];
export const podcastReccomendations: {
  title: string;
  url: string;
  description: string;
}[] = [
  {
    title: "Ladybug Podcast",
    url: "https://open.spotify.com/embed/show/1KBO1tSnm0XRlEILmqt7Em",
    description:
      "Ladybug is a podcast created by Emma Bostian, Kelly Vaughan, Sidney Buckner and Ali Spittel - 4 extremely talented software devs who bring a fresh perspective to the tech-podcasting world. Whether you're just starting out on your development or are trying to stay on topof the latest in the industry, this podcast is for you.",
  },
  {
    title: "ShopTalk",
    url: "https://open.spotify.com/embed/show/2PUoQB330ft0sTzSNoCPrH",
    description: `Hosted by Chris Coyier, and Dave Rupert Shoptalk is a podcast about just building websites - both Chris and Dave are well known in their fields. I highly reccomend this for anyone who is interested in web development. I've picked up quite a few tricks from this podcast.`,
  },
  {
    title: "CodeNewbie",
    url: "https://open.spotify.com/embed/show/2T2OwucPOy2uDG1CUsjIMB?utm_source=generator",
    description: `CodeNewbie is one my favorite tech podcasts. Hosted by Saron Yitbarek, Every week CodeNewbie interviews one person on their path to becoming a developer. They talk about their journey, their experiences, and their future plans. CodeNewbie guests come from all over the tech industry, I've found it's a great way to learn about different aspects of the world of tech.`,
  },
  {
    title: "Syntax",
    url: "https://open.spotify.com/embed/show/4kYCRYJ3yK5DQbP5tbfZby?utm_source=generator",
    description: `Hosted by Wes Bos and Scott Tolinski, Syntax covers a variety of topics from the perspective of an 2 well respected educators in the JS and web develompent space.`,
  },
];
