import Image from "next/image";
import { useRouter } from "next/router";
import ItemData from "../../types/Items/ItemData";
import formatCurrency from "../../Utils/formatCurrency";
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
            height={180}
            width={180}
          />
        }
      </div>
      <div className={styles["item-description"]}>
        <div className={styles["price-state"]}>
          <div className={styles["price-shipping"]}>
            <div className={styles['price']}>{formatCurrency(itemData.price.amount)}</div>
            {itemData.free_shipping ? (
              <div className={styles["free-shipping-icon"]}>
                <Image
                  src="/ic_shipping.png"
                  alt="free shipping"
                  width={20}
                  height={20}
                />
              </div>
            ) : null}
          </div>
          <div className={styles["seller-location"]}>{itemData.state_name}</div>
        </div>
        <div className={styles["description"]}>{itemData.title}</div>
      </div>
    </div>
  );
};
export default Item;
