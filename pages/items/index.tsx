import CategoryBreadcrum from "../../components/CategoryBreadcrumb/CategoryBreadcrum";
import useFetchFromQuery from "../../components/hooks/useFetchFromQuery";
import Item from "../../components/Items/Item";
import useItemsStore from "../../stores/itemsStore";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../components/Items/Items.module.scss";

const ItemsList = () => {
  const fetchItems = useItemsStore((is) => is.fetchItems);
  const items = useItemsStore((is) => is.items);
  useFetchFromQuery(fetchItems, "search");
  const { query } = useRouter();

  return items.length ? (
    <>
      <Head>
        <title>Challenge | Search: {query.search}</title>
      </Head>
      <CategoryBreadcrum />
      <div className={styles["item-list-container"]}>
        {items.map((i) => (
          <Item key={i.id} itemData={i} />
        ))}
      </div>
    </>
  ) : null;
};
export default ItemsList;
