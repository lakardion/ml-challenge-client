import Image from "next/image";
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
      <div className={styles["image-container"]}>
        {
          <Image
            src={itemData.picture}
            alt={itemData.title}
            height={100}
            width={100}
          />
        }
      </div>
      <div className={styles["item-description"]}>
        <div className={styles["price-description"]}>
          <div className={styles["price"]}>
            <h3>$ {itemData.price.amount}</h3>
          </div>
          <div className={styles["description"]}>
            <p>{itemData.title}</p>
          </div>
        </div>
        <div className={styles["seller-location"]}>
          <p>TODO</p>
        </div>
      </div>
    </div>
  );
};
export default Item;
