// @flow strict
import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Publicado em {moment(date).locale('pt-br').format('DD [de] MMMM [de] YYYY[.]')}</p>
  </div>
);

export default Meta;
