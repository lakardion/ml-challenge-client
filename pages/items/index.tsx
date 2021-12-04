import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CategoryBreadcrum from "../../components/CategoryBreadcrumb/CategoryBreadcrum";
import useFetchFromQuery from "../../components/hooks/useFetchFromQuery";
import Item from "../../components/Items/Item";
import styles from "../../components/Items/Items.module.scss";
import useItemMetadataStore from "../../stores/itemMetadataStore";
import ItemResponseData from "../../types/Items/ItemResponseData";
import { getItemsByQueryUri } from "../../Utils/ApiUris";
import axiosInstance from "../../Utils/axiosInstance";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { search } = context.query;
  if (!search) return { props: { itemResponseData: null } };
  const { data } = await axiosInstance.get<ItemResponseData>(
    getItemsByQueryUri(search.toString())
  );
  return {
    props: {
      itemResponseData: data,
    },
  };
}
interface ItemListProps {
  itemResponseData?: ItemResponseData;
}

const ItemsList = ({ itemResponseData }: ItemListProps) => {
  const { query } = useRouter();
  const setCategories = useItemMetadataStore((is) => is.setCategories);
  const setAuthor = useItemMetadataStore((is) => is.setAuthor);

  useEffect(() => {
    setCategories(itemResponseData?.categories);
  }, [itemResponseData?.categories, setCategories]);
  useEffect(() => {
    setAuthor(itemResponseData?.author);
  }, [itemResponseData?.author, setAuthor]);
  
  return itemResponseData?.items.length ? (
    <>
      <Head>
        <title>Challenge | Search: {query.search}</title>
      </Head>
      <CategoryBreadcrum />
      <div className={styles["item-list-container"]}>
        {itemResponseData.items.map((i) => (
          <Item key={i.id} itemData={i} />
        ))}
      </div>
    </>
  ) : null;
};
export default ItemsList;
