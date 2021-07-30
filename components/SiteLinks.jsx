import PropTypes from 'prop-types';
import Link from 'next/link';

const SiteLinks = ({
  links,
  children,
  handleThemeClick,
  isMobile,
  theme,
  className,
  handleMenuClick,
}) => (
  <ul className={className}>
    {links.map(({ display, path, isMobile }) => {
      return (
        <li className='nav-link' key={path} onClick={handleMenuClick}>
          <Link href={path}>{display}</Link>
        </li>
      );
    })}
    {isMobile && (
      <li>
        <button
          aria-label='toggle dark mode'
          aria-pressed={theme !== 'default'}
          onClick={() => handleThemeClick()}
        >
          Too {theme === 'default' ? 'bright' : 'dark'}?{' '}
          <span className='material-icons-outlined'>
            {theme === 'default' ? 'mode_night' : 'light_mode'}
          </span>
        </button>
      </li>
    )}
    {children}
  </ul>
);
SiteLinks.propTypes = {
  links: PropTypes.array.isRequired,
};

export default SiteLinks;
