// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import Meta from '../Meta'

type Props = {
  body: string,
  title: string,
  date: String,
  timeToRead: String,
};

const Content = ({ body, title, date, timeToRead }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__data']}> <Meta date={date} timeToRead={timeToRead}/></div> 
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
