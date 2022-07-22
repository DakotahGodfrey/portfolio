import Image from "next/image";
import React from "react";
import { Article } from "types/";
import { GridContainer, ImageContainer } from "./Containers";

interface IBlogPreviews {
  articles: Article[];
}
export const BlogPreviews: React.FC<IBlogPreviews> = ({ articles }) => {
  return (
    <section>
      <h2>Recent Articles</h2>
      <GridContainer columns={2}>
        {articles ? (
          articles.map(({ title, slug, description, category, image }) => (
            <div key={slug} className='card card-article'>
              <ImageContainer
                mBottom='1.6rem'
                pBottom='0.8rem'
                height='20rem'
                rounded
              >
                <Image
                  src={image.url}
                  alt={title}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center center'
                  quality={75}
                />
              </ImageContainer>
              <h3>
                <a href={""}>{title}</a>
              </h3>
              <p>{description}</p>
              <div className='lang-tag'>
                <span style={{ backgroundColor: `${category.color}` }}></span>{" "}
                {category.title}
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3>Loading</h3>
          </div>
        )}
      </GridContainer>
    </section>
  );
};
