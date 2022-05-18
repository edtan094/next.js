import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there!</p>
        <p>
          I am a full stack web developer that likes to eat, workout, and attend music festivals
        </p>
      </section>
    </Layout>
  );
}
