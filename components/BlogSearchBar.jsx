import styled from 'styled-components';
import React, { useState } from 'react';
import { getFromTheme } from '../styles/themes';
import { CategoryButton, SearchForm } from './layout/Lib';
import { BLOG_URL, GITHUB_URL } from '../api/api';

const BlogSearchBar = ({ categories, handleSubmit, setTerm, term }) => {
  return (
    <SearchForm onSubmit={(e) => e.preventDefault()}>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type='search'
        placeholder='Search blogposts'
      />
      <div className='categories'>
        {categories.map((category) => (
          <CategoryButton
            key={category.title}
            onClick={() => setTerm(category.title)}
            color={category.color}
          >
            {category.title}
          </CategoryButton>
        ))}
      </div>
    </SearchForm>
  );
};

export default BlogSearchBar;
