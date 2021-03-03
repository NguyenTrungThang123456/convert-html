import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import "antd/dist/antd.css";

import { Layout } from "antd";

import WeDo from "./components/WeDo";
import * as themeActionCreator from "./actionCreators/themes";
import * as wedoActionCreator from "./actionCreators/wedos";

import Employees from "./components/Employees";
import Themes from "./components/Themes";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Partner from "./components/Partner";
import Contact from "./components/Contact";
import Callback from "./components/Callback";

type AppProps = {
  themeAction?: any;
  wedoAction?: any;
  theme?: any;
  wedo?: any;
};

function App(props: AppProps) {
  const { error, fetching, themes } = props.theme;
  const { wedos } = props.wedo;

  useEffect(() => {
    props.themeAction.getThemes();
    props.wedoAction.getWedos();
  }, []);

  return (
    <Layout>
      <Header />
      <Hero />
      <WeDo wedos={wedos} />

      <Callback />
      <Employees />
      <Themes themes={themes} fetching={fetching} error={error} />

      <Partner />
      <Contact />
      <Footer />
    </Layout>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state.themeReducer,
    wedo: state.wedoReducer,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    themeAction: bindActionCreators(themeActionCreator, dispatch),
    wedoAction: bindActionCreators(wedoActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
