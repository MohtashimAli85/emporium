import React, { useContext } from "react";
import { PuffLoader } from "react-spinners";
import styles from "../../styles/checkout-summary.module.css";
import itemStyles from "../../styles/cart-view.module.css";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "../../utils/helper-functions";
import { sum, quantity } from "../../utils/helper-functions";
import DisplayContext from "../../context/display-context";
import { formatPrices, myformatPrices } from "../../utils/prices";

const CheckoutSummary = ({ cart }) => {
  const { orderSummary, updateOrderSummaryDisplay } =
    useContext(DisplayContext);
  return cart ? (
    <div className={`flex flex-col justify-between h-full  ${orderSummary ? styles.active : ""}`}>
      {/* <div className={itemStyles.top}>
        <p>
          <strong>Order Summary</strong>
        </p>
        <p>
          {cart.items.length > 0 ? cart.items.map(quantity).reduce(sum) : 0}{" "}
          {cart.items.length > 0 && cart.items.map(quantity).reduce(sum) === 1
            ? "item"
            : "items"}
        </p>
        <button
          className={styles.closeBtn}
          onClick={() => updateOrderSummaryDisplay()}
        >
          X
        </button>
      </div> */}
      <div className='max-h-96 overflow-y-auto pr-2'>
        {cart.items
          .sort((a, b) => {
            const createdAtA = new Date(a.created_at),
              createdAtB = new Date(b.created_at);

            if (createdAtA < createdAtB) return -1;
            if (createdAtA > createdAtB) return 1;
            return 0;
          })
          .map((i) => {
            return (
              <div key={i.id} className='flex items-center justify-between border-b-2 border-titan-white'>
                <div className='flex gap-x-2'>
                  <figure>
                    <Link
                      href={{
                        pathname: `/product/[id]`,
                        query: { id: i.variant.product.id },
                      }}
                      passHref
                    >
                      <a>
                        <div className=''>
                          <Image
                            objectFit="cover"
                            height={87}
                            width={83}
                            src={i.variant.product.thumbnail}
                            alt={`${i.title}`}
                          />
                        </div>
                      </a>
                    </Link>
                  </figure>
                  <div className='mt-3'>
                    <div>
                      <Link
                        href={{
                          pathname: `/product/[id]`,
                          query: { id: i.variant.product.id },
                        }}
                        passHref
                      >
                        <a>{i.title}</a>
                      </Link>
                    </div>
                    <p className='text-[#A1A8C1] text-sm'>Size: {i.variant.title}</p>
                    <p className='text-[#A1A8C1] text-sm'>Quantity: {i.quantity}</p>
                  </div>
                </div>

                <div className=''>
                  <p className='text-navy-blue'>
                    {myformatPrices(cart, i.unit_price, 2)}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className='bg-lavender-mist p-5 rounded mt-4'>
        <div className=' inline-flex justify-between w-full text-navy-blue border-b border-titan-white pb-3'>
          <p className='font-semibold text-[18px]'>Subtotals:</p>
          <p>{cart.region ? formatPrice(cart.subtotal, cart.region.currency_code) : 0}</p>
        </div>
        <div className={styles.breakdown}>
          <p>Shipping</p>
          <span>
            {cart.region
              ? formatPrice(cart.shipping_total, cart.region.currency_code)
              : 0}
          </span>
        </div>
        <div className={styles.total}>
          <p>Total</p>
          <span>
            {cart.region ? formatPrice(cart.total, cart.region.currency_code) : 0}
          </span>
        </div>
        <div className='py-3'>
          <div className='text-sm text-[#8A91AB] inline-flex  gap-x-1 pb-2'>
            <Image src='/scheck.svg' width={10} height={10} alt='check icon' className='' />
            <p>Shipping & taxes calculated at checkout</p>
          </div>
        </div>
      </div>



    </div>
  ) : (
    <div className={styles.spinnerContainer}>
      <PuffLoader />
    </div>
  );
};

export default CheckoutSummary;
