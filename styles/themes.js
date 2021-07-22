const defaultTheme = {
  primary: '#121212',
  secondary: '#fff',
  accent: '#F20530',
  muted: '#3d3737',
  BG: '#f2f2f2',
  codeBG: '#121212',
  link: '#1F51FF',
  body: '1.6rem',
  headingXL: '3.6rem',
  headingLG: '2.8rem',
  headingMD: '2.4rem',
  headingSM: '2.0rem',
};

const darkTheme = {
  ...defaultTheme,
  primary: '#f4f4f4',
  secondary: '#121212',
  muted: '#d1caca',
  BG: '#222',
  codeBG: '#222',
  link: '#87CEEB',
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

export { defaultTheme, darkTheme, getFromTheme };
