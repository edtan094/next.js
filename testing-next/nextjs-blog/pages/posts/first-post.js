import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>NomNom Post</title>
      </Head>
      <h1>My Full Stack Web Application</h1>
      <h3>A full stack JavaScript web application for users who are hungry and do not know where to eat.</h3>
      <p>I decided to build this web application because of my love for food and trying new restaurants/locations.
        Typically, I would use yelp to decide where I should eat with my friends however,
        we would always have trouble deciding on a location since there were always a lot of options to pick from.
        One day, I had a thought that it would be cool if yelp could somehow limit the number of choices or just pick a
        location for the user. I had this idea way before I started my journey into coding. As I began to learn the necessary
        technologies to make a web application, I happily decided to pursue my take on a web application for hungry people.
      </p>
      <p><a href='https://nomnom-project.herokuapp.com/#sign-in'>You can view the application here!</a></p>
      <p><a href='https://github.com/edtan094/nomnom'>GitHub link</a></p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
