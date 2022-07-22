import { getFromTheme } from "@styles/theme";
import { socialLinks } from "@utils/data";
import styled from "styled-components";
import { GridContainer } from "./Containers";
import Logo from "./Logo";

const FooterWrapper = styled.footer`
  max-width: 100rem;
  margin-inline: auto;
  background-color: ${getFromTheme("secondary")};
  padding: 2.2rem 1.2rem 1.2rem;
  > section {
    background-color: ${getFromTheme("BG")};
    margin-inline: auto;
    font-size: 1.8rem;
    padding: 1.6rem;
    border-radius: 0.5rem;
    font-weight: 700;
  }

  small {
    font-size: 1rem;
    padding: 0 1.2rem;
  }

  .social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    ul {
      display: flex;
      /* justify-content: flex-end; */
    }
    li {
      a {
        display: flex;
        align-items: center;
        font-size: 2.2rem;
        padding: 1.2rem;
      }
    }
  }
`;

export const SiteFooter: React.FC = () => {
  return (
    <FooterWrapper>
      <GridContainer columns={2}>
        {/* Quick Contact */}
        <div></div>
        {/* Socials */}
        <div className='social'>
          <ul>
            {socialLinks.map(({ display, url, icon }) => (
              <li key={display}>
                <a href={url}>
                  {icon} <span className='sr-only'>{display}</span>
                </a>
              </li>
            ))}
          </ul>
          <small>&copy; {new Date().getFullYear()} dakotah godfrey</small>
        </div>
      </GridContainer>
    </FooterWrapper>
  );
};
