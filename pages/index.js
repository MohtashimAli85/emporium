import styles from "../styles/home.module.css";
import Link from "next/link";
import { createClient } from "../utils/client";
import { FaGithub } from "react-icons/fa";
import { formatPrices } from "../utils/prices";
import { useContext } from "react";
import StoreContext from "../context/store-context";
import React, { Fragment } from 'react';
import Hero from '../components/hero/hero';
import ChooseUs from '../components/hero/chooseus';
import NewArrivals from '../components/slider/newArrivals';
import Banner from '../components/hero/banner';
import Category from '../components/category/category';
import SellingHero from '../components/hero/sellinghero';
import { Certified } from '../components/certified/certified';
import NewArrivalsNoSrr from '../components/slider/newArrivalsnosrr';

export default function Home({ products }) {
  const { cart } = useContext(StoreContext)
  return (
    <Fragment>
      <Hero />
      <ChooseUs />
      <NewArrivals products={products} />
      <Banner />
      <Category />
      <SellingHero />
      <Certified />
    </Fragment>
  )
}



export const getStaticProps = async () => {
  const client = createClient();
  const { products } = await client.products.list();

  return {
    props: {
      products,
    },
  };
};
