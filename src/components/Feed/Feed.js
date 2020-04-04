// @flow strict
import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import AniLink  from "gatsby-plugin-transition-link/AniLink";
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).locale('pt-br').format('DD [de] MMMM [de] YYYY')}>
            {moment(edge.node.frontmatter.date).locale('pt-br').format('DD [de] MMMM [de] YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <AniLink fade duration={0.5} to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</AniLink>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <AniLink cover bg="#383a59" duration={0.7} className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</AniLink>
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
        <AniLink cover bg="#383a59" duration={0.7} className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Leia mais</AniLink>
      </div>
    ))}
  </div>
);

export default Feed;
