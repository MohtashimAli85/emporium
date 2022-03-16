import React, { Fragment } from 'react'
import { createClient } from "../../utils/client";
import CartView from '../../components/cart-view/cart-view';
export default function Home({ products }) {
    return (
        <Fragment>

            <CartView />

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