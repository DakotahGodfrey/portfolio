import { Repo } from "../types";

interface IRepoCarouselProps {
  repos: Repo[];
}

export const RepoCarousel: React.FC<IRepoCarouselProps> = ({ repos }) => {
  return (
    <div>
      <h2>Featured Repos</h2>
      <section>
        {repos.length ? (
          repos.map(({ node: { name, url, primaryLanguage, description } }) => (
            <div key={name} className='card card-repo'>
              <h3>
                <i>Star</i> <a href={url}>{name}</a>
              </h3>
              <p>{description}</p>
              <p>
                <span
                  className='lang-tag'
                  style={{ backgroundColor: `${primaryLanguage.color}` }}
                ></span>{" "}
                {primaryLanguage.name}
              </p>
            </div>
          ))
        ) : (
          <div className='card repo-loading'>
            <h2>Loading</h2>
          </div>
        )}
      </section>
    </div>
  );
};
