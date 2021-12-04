import Head from "next/head";
import Image from "next/image";
import { useMemo } from "react";
import useItemsStore from "../../stores/itemsStore";
import { formatCurrency, getDecimals } from "../../Utils/UtilFunctions";
import styles from "./ItemDetail.module.scss";

const ItemDetail = () => {
  const singleItem = useItemsStore((is) => is.singleItem);
  const decimals = useMemo(
    () => getDecimals(singleItem?.price.amount, singleItem?.price.decimals),
    [singleItem?.price.amount, singleItem?.price.decimals]
  );
  return (
    <>
      <Head>
        <title>Challenge | {singleItem?.title}</title>
      </Head>
      {singleItem ? (
        <div className={styles["item-detail-container"]}>
          <div className={styles["image-price-container"]}>
            <div>
              <Image
                src={singleItem.pictures?.[0]}
                alt="item picture"
                height={680}
                width={680}
                objectFit="contain"
              />
            </div>
            <div className={styles["price-status-container"]}>
              <div className={styles["status"]}>
                {singleItem.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {singleItem.sold_quantity} vendidos
              </div>
              <h3 className={styles["title"]}> {singleItem.title}</h3>
              <div className={styles["price"]}>
                {formatCurrency(singleItem.price.amount)}
                {decimals.map((d, idx) => (
                  <sup key={`decimal-number-${idx}`}>{d}</sup>
                ))}
              </div>
              <button className={styles["buy-button"]}>Comprar</button>
            </div>
          </div>
          <div>
            <div>
              <h2>Descripción del producto</h2>
              <p className={styles["description"]}>{singleItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ItemDetail;
