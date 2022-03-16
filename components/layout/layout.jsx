import React, { useContext, Fragment } from "react";

import Blur from "./blur";
import CartView from "../cart-view/cart-view";
import DisplayContext from "../../context/display-context";
import styles from "../../styles/layout.module.css";

import Footer from '../footer/footer';
import NavBar from '../navbar/navbar';

const Layout = ({ children }) => {
  const { cartView } = useContext(DisplayContext);
  return (
    <Fragment>
      <NavBar />
      <Fragment>{children}</Fragment>
      <Footer />
    </Fragment>
  )
}

export default Layout;

    // <div className={cartView ? styles.noscroll : null}>
    //   <CartView />
    //   <Blur />
    //   <NavBar />
    //   <main>{children}</main>
    // </div>
