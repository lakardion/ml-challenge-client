import Head from "next/head";
import Image from "next/image";
import { useMemo } from "react";
import ItemDetailData from "../../types/Items/ItemDetailData";
import { formatCurrency, getDecimals } from "../../Utils/UtilFunctions";
import styles from "./ItemDetail.module.scss";

interface ItemDetailProps {
  item: ItemDetailData;
}
const ItemDetail = ({ item }: ItemDetailProps) => {
  const decimals = useMemo(
    () => getDecimals(item?.price.amount, item?.price.decimals),
    [item?.price.amount, item?.price.decimals]
  );
  
  return (
    <>
      <Head>
        <title>Challenge | {item?.title}</title>
      </Head>
      {item ? (
        <div className={styles["item-detail-container"]}>
          <div className={styles["image-price-container"]}>
            <div>
              <Image
                src={item.pictures?.[0]}
                alt="item picture"
                height={680}
                width={680}
                objectFit="contain"
              />
            </div>
            <div className={styles["price-status-container"]}>
              <div className={styles["status"]}>
                {item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {item.sold_quantity} vendidos
              </div>
              <h3 className={styles["title"]}> {item.title}</h3>
              <div className={styles["price"]}>
                {formatCurrency(item.price.amount)}
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
              <p className={styles["description"]}>{item.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ItemDetail;
