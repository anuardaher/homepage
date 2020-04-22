// @flow strict
import React from 'react';
import { withPrefix } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <AniLink fade transition={0.5} to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        alt={author.name}
      />
    </AniLink>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <AniLink fade transition={0.5} to="/" className={styles['author__title-link']} to="/">
          {author.name}
        </AniLink>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <AniLink fade transition={0.5} to="/" className={styles['author__title-link']} to="/">
          {author.name}
        </AniLink>
      </h2>
    )}
    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
);

export default Author;
