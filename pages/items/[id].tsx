import useFetchFromQuery from "../../components/hooks/useFetchFromQuery";
import ItemDetail from "../../components/Items/ItemDetail";
import useItemsStore from "../../stores/itemsStore";
import styles from "./items.module.scss";

const ItemById = () => {
  const fetchItemDetail = useItemsStore((is) => is.fetchSingleItem);
  const clearItemDetail = useItemsStore((is) => is.clearCurrentItemDetail);
  const singleItem = useItemsStore((is) => is.singleItem);

  useFetchFromQuery(fetchItemDetail,'id',clearItemDetail)

  return (
    <div className={styles["item-detail-container"]}>
      {singleItem ? <ItemDetail itemDetailData={singleItem} /> : null}
    </div>
  );
};
export default ItemById;
