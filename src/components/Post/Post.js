// @flow strict
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html, timeToRead } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <AniLink cover direction="right" bg="#282a36" duration={0.7} className={styles['post__home-button']} to="/">Ver todos</AniLink>

      <div className={styles['post__content']}>
        <Content body={html} title={title} date={date} timeToRead={timeToRead} />
      </div>

      <div className={styles['post__footer']}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
