import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/Items/ItemDetail";
import useItemsStore from "../../stores/itemsStore";
import ItemDetailData from "../../types/Items/ItemDetailData";
import styles from "./items.module.scss";

const ItemById = () => {
  const { query } = useRouter();
  const fetchItemDetail = useItemsStore((is) => is.fetchSingleItem);
  const singleItem = useItemsStore((is) => is.singleItem);
  useEffect(() => {
    const { id } = query;
    //TODO: check why id could be string array?
    fetchItemDetail(id as string);
  }, [fetchItemDetail, query]);

  return (
    <div className={styles["item-detail-container"]}>
      <ItemDetail itemDetailData={singleItem} />
    </div>
  );
};
export default ItemById;
