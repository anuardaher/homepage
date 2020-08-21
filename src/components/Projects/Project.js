// @flow strict
import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import AniLink  from "gatsby-plugin-transition-link/AniLink";
import type { Edges } from '../../types';
import styles from './Project.module.scss';

type Props = {
  edges: Edges
};

const Project = ({ edges }: Props) => (
  <div className={styles['project']}>
    {edges.map((edge) => (
      <div className={styles['project__item']} key={edge.node.frontmatter.link}>
        <div className={styles['project__item-meta']}>
          <time className={styles['project__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).locale('pt-br').format('DD [de] MMMM [de] YYYY')}>
            {moment(edge.node.frontmatter.date).locale('pt-br').format('DD [de] MMMM [de] YYYY')}
          </time>
          <span className={styles['project__item-meta-divider']} />
          <span className={styles['project__item-meta-category']}>
            <AniLink fade duration={0.5} 
              to={edge.node.fields.categorySlug} 
              className={styles['project__item-meta-category-link']}>
                {edge.node.frontmatter.category}
            </AniLink>
          </span>
        </div>
        <h2 className={styles['project__item-title']}>
          <a  className={styles['project__item-title-link']} href={edge.node.frontmatter.link} target="_blank">
            {edge.node.frontmatter.title}
          </a>
        </h2>
        <p className={styles['project__item-description']}>{edge.node.frontmatter.description}</p>
        {
          edge.node.frontmatter.tags &&
            edge.node.frontmatter.tags.map(element => (
              <span className={styles['project__item-meta-category-link']}>
                {element}
              </span>
            ))
        }
      </div>
    ))}
  </div>
);

export default Project;
