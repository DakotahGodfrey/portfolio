const defaultTheme = {
  primary: '#121212',
  secondary: '#f4f4f4',
  accent: '#F20530',
  muted: '#7f7f7f',
  body: '1.6rem',
  headingLG: '2.8rem',
  headingMD: '2.4rem',
  headingSM: '2.0rem',
};

const getFromTheme = (property) => (props) => {
  if (!props.theme) {
    throw new Error(
      'To use getFromTheme component must be wrapped in a <ThemeProvider />'
    );
  }
  if (!props.theme[property]) {
    throw new Error(`Theme property: ${property} not found`);
  }
  return props.theme[property];
};

export { defaultTheme, getFromTheme };
