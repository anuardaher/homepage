// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Não encontrado - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Ops...">
        <p>A página que você tentou acessar não existe. 😢</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
