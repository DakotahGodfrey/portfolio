import React from "react";

export const Intro: React.FC = () => {
  return (
    <section>
      <h1>Hi Welcome To My Portfolio!</h1>
      <div>
        {/* 
   Image
   2 Intro Paragraphs
   */}
        <div>
          <p>
            Welcome, my name is Dakotah Godfrey and I'm a community-taught
            frontend developer from Toronto, Canada. I enjoy working on projects
            that make the web a more inclusive and accessible space. I feel web
            accessibility is an increasingly important topic given how many of
            us rely on websites and apps to perform cruical daily tasks.
          </p>
          <p>
            Feel free to look through my past and current projects, and if you
            have a project you'd like to work together on{" "}
            <a href=''>drop me a line here</a>
          </p>
        </div>
        <div className='profile-photo'></div>
      </div>
    </section>
  );
};
