import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styles/styles.css";
import "../styles/custom.css";
import "swiper/swiper-bundle.css";

import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { DefaultSeo } from "next-seo";
import App from "next/app";

import Header from "../components/Header";
import SEO from "../next-seo.config";
import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async (appContext) => {
  return { ...(await App.getInitialProps(appContext)) };
};

export default appWithTranslation(MyApp);
