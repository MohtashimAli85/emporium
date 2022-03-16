import React, { useContext } from "react";
import DisplayContext from "../../context/display-context";
import StoreContext from "../../context/store-context";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/cart-view.module.css";
import { quantity, sum, formatPrice } from "../../utils/helper-functions";
import { formatPrices, myformatPrices } from "../../utils/prices";

const CartView = () => {
  const { cartView, updateCartViewDisplay, updateCheckoutStep } =
    useContext(DisplayContext);
  const { cart, currencyCode, updateLineItem, removeLineItem } =
    useContext(StoreContext);
  const router = useRouter();

  return (
    <div className='max-w-7xl mx-auto px-4 my-5'>
      <div className='flex mobile:flex-col '>
        <table className=' basis-3/5 mobile:basis-full '>
          <thead className='text-left '>
            <tr className='text-navy-blue font-semibold h-20'>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>

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
                  <tr key={i.id} className=' border-b border-titan-white '>
                    <td className='w-1/4 py-3'>
                      <div className='flex gap-x-2'>
                        <div className='relative'>
                          <figure onClick={() => updateCartViewDisplay()}>
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
                                    height="100%"
                                    width="100%"
                                    src={i.variant.product.thumbnail}
                                    alt={`${i.title}`}
                                    className='rounded-md'
                                  />

                                </div>
                              </a>
                            </Link>
                          </figure>
                          <button
                            className='absolute -top-2 -right-1'
                            onClick={() => removeLineItem(i.id)}
                          >
                            <Image src='/cross.svg' width={12} height={12} alt='cross icon' />
                          </button>
                        </div>
                        <div className='pt-4'>
                          <Link
                            href={{
                              pathname: `/product/[id]`,
                              query: { id: i.variant.product.id },
                            }}
                            passHref
                          >
                            <a>{i.title}</a>
                          </Link>
                          <p className='text-gull-grey text-sm'>Size: {i.variant.title}</p>

                        </div>
                      </div>
                    </td>
                    <td className='w-1/5 py-3'>{myformatPrices(cart, i.unit_price, 2)}</td>
                    <td className='w-1/5 py-3'>
                      <div className='flex items-center'>
                        <button
                          className='bg-lavender-mist p-1  '
                          onClick={() =>
                            updateLineItem({
                              lineId: i.id,
                              quantity: i.quantity - 1,
                            })
                          }
                        >
                          <Image src='/minus.svg' width={10} height={8} alt='minus icon' />
                        </button>
                        <p className='text-center p-1 px-3 bg-[#F0EFF2]'>{i.quantity}</p>
                        <button
                          className='bg-lavender-mist  p-1  '
                          onClick={() =>
                            updateLineItem({
                              lineId: i.id,
                              quantity: i.quantity + 1,
                            })
                          }
                        >
                          <Image src='/plus.svg' width={10} height={10} alt='plus' />
                        </button>
                      </div>
                    </td>

                  </tr>
                );
              })}

          </tbody>
        </table>
        <div className=' basis-2/6 ml-20 mobile:ml-0 mobile:mt-10'>
          <h1 className='text-navy-blue font-semibold text-center text-3xl  mt-4 mb-8'>Cart Totals</h1>
          <div className='bg-lavender-mist p-5 rounded'>
            <div className=' inline-flex justify-between w-full text-navy-blue border-b border-titan-white pb-3'>
              <p className='font-semibold text-[18px]'>Subtotals:</p>
              <p>{cart.region ? formatPrice(cart.subtotal, currencyCode) : 0}</p>
            </div>
            <div className='py-3'>
              <div className='text-sm text-[#8A91AB] inline-flex  gap-x-1 pb-2'>
                <Image src='/scheck.svg' width={10} height={10} alt='check icon' className='' />
                <p>Shipping & taxes calculated at checkout</p>
              </div>
              <button
                className='bg-[#19D16F] px-3 py-2 text-white block w-9/12 mx-auto mt-12 rounded-md'
                onClick={() => {
                  updateCheckoutStep(1);
                  updateCartViewDisplay();
                  router.push("/checkout");
                }}
                disabled={cart.items.length < 1 ? true : false}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <button className='' onClick={() => updateCartViewDisplay()}>X</button> */}
    </div>
    // <div className={`${styles.container} ${cartView ? styles.active : null}`}>
    //   <div className={styles.top}>
    //     <p>Bag</p>
    //     <p>
    //       {cart.items.length > 0 ? cart.items.map(quantity).reduce(sum) : 0}{" "}
    //       {cart.items.length > 0 && cart.items.map(quantity).reduce(sum) === 1
    //         ? "item"
    //         : "items"}
    //     </p>
    //     <button
    //       className={styles.closebtn}
    //       onClick={() => updateCartViewDisplay()}
    //     >
    //       X
    //     </button>
    //   </div>
    //   <div className={styles.overview}>
    //     {cart.items
    //       .sort((a, b) => {
    //         const createdAtA = new Date(a.created_at),
    //           createdAtB = new Date(b.created_at);

    //         if (createdAtA < createdAtB) return -1;
    //         if (createdAtA > createdAtB) return 1;
    //         return 0;
    //       })
    //       .map((i) => {
    //         return (
    //           <div key={i.id} className={styles.product}>
    //             <figure onClick={() => updateCartViewDisplay()}>
    //               <Link
    //                 href={{
    //                   pathname: `/product/[id]`,
    //                   query: { id: i.variant.product.id },
    //                 }}
    //                 passHref
    //               >
    //                 <a>
    //                   <div className={styles.placeholder}>
    //                   <Image
    //                     objectFit="cover"
    //                     height="100%"
    //                     width="100%"
    //                     src={i.variant.product.thumbnail}
    //                     alt={`${i.title}`}
    //                   />
    //                   </div>
    //                 </a>
    //               </Link>
    //             </figure>
    //             <div className={styles.controls}>
    //               <div>
    //                 <div>
    //                   <Link
    //                     href={{
    //                       pathname: `/product/[id]`,
    //                       query: { id: i.variant.product.id },
    //                     }}
    //                     passHref
    //                   >
    //                     <a>{i.title}</a>
    //                   </Link>
    //                   <p className={styles.size}>Size: {i.variant.title}</p>
    //                   <p className={styles.size}>
    //                     Price:{" "}
    //                     {formatPrices(cart, i.variant)}
    //                   </p>
    //                 </div>
    //                 <div>
    //                   <div className={styles.mid}>
    //                     <div className={styles.selector}>
    //                       <button
    //                         className={styles.qtybtn}
    //                         onClick={() =>
    //                           updateLineItem({
    //                             lineId: i.id,
    //                             quantity: i.quantity - 1,
    //                           })
    //                         }
    //                       >
    //                         {"–"}
    //                       </button>
    //                       <p className={styles.ticker}>{i.quantity}</p>
    //                       <button
    //                         className={styles.qtybtn}
    //                         onClick={() =>
    //                           updateLineItem({
    //                             lineId: i.id,
    //                             quantity: i.quantity + 1,
    //                           })
    //                         }
    //                       >
    //                         {"+"}
    //                       </button>
    //                     </div>
    //                   </div>
    //                   <p>{}</p>
    //                 </div>
    //               </div>
    //               <button
    //                 className={styles.remove}
    //                 onClick={() => removeLineItem(i.id)}
    //               >
    //                 Remove
    //               </button>
    //             </div>
    //           </div>
    //         );
    //       })}
    //   </div>
    //   <div className={styles.subtotal}>
    //     <p>Subtotal (incl. taxes)</p>
    //     <span>
    //       {cart.region ? formatPrice(cart.subtotal, currencyCode) : 0}
    //     </span>
    //   </div>
    //   <div className={styles.bottom}>
    //     <button
    //       className={styles.checkoutbtn}
    //       onClick={() => {
    //         updateCheckoutStep(1);
    //         updateCartViewDisplay();
    //         router.push("/checkout");
    //       }}
    //       disabled={cart.items.length < 1 ? true : false}
    //     >
    //       Checkout
    //     </button>
    //   </div>
    // </div>
  );
};

export default CartView;
