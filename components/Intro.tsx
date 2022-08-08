import React from "react";

interface IIntroProps {
  heading: string;
  children: React.ReactNode;
}

export const Intro: React.FC<IIntroProps> = ({ heading, children }) => {
  return (
    <section>
      <h1>{heading}</h1>
      <div>
        <div>{children}</div>
      </div>
    </section>
  );
};
