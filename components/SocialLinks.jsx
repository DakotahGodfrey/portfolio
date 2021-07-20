import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { socialLinks } from '../utils/data';

const SocialLinks = ({ links }) => (
  <ul>
    {links.map((link) => (
      <li key={link.display}>
        <a href={link.url}>{link.icon}</a>
      </li>
    ))}
  </ul>
);

socialLinks.propTypes = {
  links: PropTypes.array.isRequired,
};

export default SocialLinks;
