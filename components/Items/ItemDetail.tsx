import Head from "next/head";
import Image from "next/image";
import useItemsStore from "../../stores/itemsStore";
import styles from "./Items.module.scss";

const ItemDetail = () => {
  const singleItem = useItemsStore((is) => is.singleItem);
  return (
    <>
      <Head>
        <title>Challenge | {singleItem?.title}</title>
      </Head>
      {singleItem ? (
        <div className={styles["item-detail-container"]}>
          <div className={styles["detail-container"]}>
            <div className={styles["image-container"]}>
              <Image
                src={singleItem.pictures?.[0]}
                alt="item picture"
                height={500}
                width={300}
              />
            </div>
            <div className={styles["description"]}>
              <h2>Descripción del producto</h2>
              <p>{singleItem.description}</p>
            </div>
          </div>
          <div className={styles["container"]}>
            <div className={styles["status"]}>
              {singleItem.condition} - {singleItem.sold_quantity}{" "}
              vendidos
            </div>
            <div className={styles["name"]}> {singleItem.title}</div>
            <div className={styles["price"]}>
              <h2>$ {singleItem.price.amount}</h2>
            </div>
            <button className={styles["buy-button"]}>Comprar</button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ItemDetail;
