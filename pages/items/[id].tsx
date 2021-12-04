import { GetServerSidePropsContext } from "next";
import CategoryBreadcrum from "../../components/CategoryBreadcrumb/CategoryBreadcrum";
import ItemDetail from "../../components/Items/ItemDetail";
import ItemDetailData from "../../types/Items/ItemDetailData";
import ItemDetailResponseData from "../../types/Items/ItemDetailResponseData";
import { getItemUri } from "../../Utils/ApiUris";
import axiosInstance from "../../Utils/axiosInstance";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const { data } = await axiosInstance.get<ItemDetailResponseData>(
    getItemUri(id.toString())
  );
  return {
    props: {
      item: data.item,
    },
  };
}

interface ItemByIdProps {
  item: ItemDetailData;
}
const ItemById = ({ item }:ItemByIdProps) => {
  return (
    <>
      <CategoryBreadcrum />
      <ItemDetail item={item} />
    </>
  );
};
export default ItemById;
