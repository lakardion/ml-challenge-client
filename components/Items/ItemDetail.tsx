import ItemDetailData from "../../types/Items/ItemDetailData";
import styles from "./Items.module.scss";
import Image from "next/image";

interface ItemDetailProps {
  itemDetailData: ItemDetailData;
}
const ItemDetail = ({ itemDetailData }: ItemDetailProps) => {
  return (
    <>
      <div className={styles["detail-container"]}>
        <div className={styles["image-container"]}>
          <Image
            src={itemDetailData.pictures?.[0]}
            alt="item picture"
            height={50}
            width={50}
          />
        </div>
        <div className={styles["description"]}>
          <h2>Descripción del producto</h2>
          <p>{itemDetailData.description}</p>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["status"]}>
          {itemDetailData.condition} - {itemDetailData.sold_quantity} vendidos
        </div>
        <div className={styles["name"]}> {itemDetailData.title}</div>
        <div className={styles["price"]}>
          <h2>$ {itemDetailData.price}</h2>
        </div>
        <button className={styles["buy-button"]}>Comprar</button>
      </div>
    </>
  );
};
export default ItemDetail;
