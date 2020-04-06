// @flow strict
import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import styles from './Meta.module.scss';

type Props = {
  date: string,
  timeToRead: String
};

const Meta = ({ date, timeToRead }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>
      {moment(date).locale('pt-br').format('DD [de] MMMM [de] YYYY')}
      <span className={styles['meta__time']}> • {timeToRead} {timeToRead == 1 ? 'minuto' : 'minutos'} de leitura</span>
    </p>
  </div>
);

export default Meta;
