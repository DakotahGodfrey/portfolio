import PropTypes from 'prop-types';
import Link from 'next/link';

const SiteLinks = ({ links, children }) => {
  return (
    <ul>
      {links.map(({ display, path }) => {
        return (
          <li className='nav-link' key={path}>
            <Link href={path}>{display}</Link>
          </li>
        );
      })}
      {children}
    </ul>
  );
};

SiteLinks.propTypes = {
  links: PropTypes.array.isRequired,
};

export default SiteLinks;
