import "../styles/styles.css";
import "../styles/custom.css";
import 'swiper/swiper-bundle.css';
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import {DefaultSeo} from 'next-seo';

import Header from "../components/Header";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header navigation={navigation}/>
      <Component {...pageProps} />
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  const navigation = await res.json();

  return { navigation };
};

export default MyApp;
