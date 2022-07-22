import { Repo } from "types/";
import { FlexContainer } from "./Containers";

interface IRepoCarouselProps {
  repos: Repo[];
}

export const RepoCarousel: React.FC<IRepoCarouselProps> = ({ repos }) => {
  return (
    <FlexContainer scrollable>
      <h2>Featured Github Repos</h2>
      <div className='row'>
        {repos.length ? (
          repos.map(({ node: { name, url, primaryLanguage, description } }) => (
            <div key={name} className='card card-repo'>
              <h3>
                <span style={{ marginRight: "0.5rem" }}>⭐️</span>{" "}
                <a href={url}>{name}</a>
              </h3>
              <p className='truncate-3'>{description}</p>
              <div className='lang-tag'>
                <span
                  style={{ backgroundColor: `${primaryLanguage.color}` }}
                ></span>{" "}
                {primaryLanguage.name}
              </div>
            </div>
          ))
        ) : (
          <div className='card repo-loading'>
            <h2>Loading</h2>
          </div>
        )}
      </div>
    </FlexContainer>
  );
};
