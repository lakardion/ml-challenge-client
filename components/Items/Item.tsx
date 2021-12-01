import { useRouter } from "next/router";
import ItemData from "../../types/Items/ItemData";
import styles from "./Items.module.scss";
interface ItemProps {
  itemData: ItemData;
}
const Item = ({ itemData }: ItemProps) => {
  const router = useRouter();
  return (
    <div
      className={styles.item}
      onClick={() => {
        router.push(`/items/${itemData.id}`);
      }}
    >
      <div className={styles["image-container"]}>{/**render image */}</div>
      <div className={styles["item-description"]}>
        <div className={styles["price-description"]}>
          <div className={styles["price"]}></div>
          <div className={styles["description"]}></div>
        </div>
        <div className={styles["seller-location"]}>
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default Item;
