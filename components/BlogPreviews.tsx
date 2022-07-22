import React from "react";
import { Article } from "types/";

interface IBlogPreviews {
  articles: Article[];
}
export const BlogPreviews: React.FC<IBlogPreviews> = ({ articles }) => {
  return (
    <section>
      <h2>Recent Articles</h2>
      <div>
        {articles ? (
          articles.map(({ title, slug, description, category, image }) => (
            <div key={slug} className='card card-article'>
              <h3>
                <a href={""}>{title}</a>
              </h3>
              <p>{description}</p>
              <p>
                <span
                  className='lang-tag'
                  style={{ backgroundColor: `${category.color}` }}
                ></span>{" "}
                {category.title}
              </p>
            </div>
          ))
        ) : (
          <div>
            <h3>Loading</h3>
          </div>
        )}
      </div>
    </section>
  );
};
