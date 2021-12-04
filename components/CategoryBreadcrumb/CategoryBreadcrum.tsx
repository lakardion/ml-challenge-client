import useItemMetadataStore from "../../stores/itemMetadataStore";
import styles from "./CategoryBreadcrum.module.scss";

const CategoryBreadcrum = () => {
  const categories = useItemMetadataStore((is) => is.categories);
  return (
    <p className={styles["categories-breadcrumb"]}>
      {categories.map((c, idx) => {
        if (idx === categories.length - 1) return <b>{c}</b>;
        return `${c} > `;
      })}
    </p>
  );
};
export default CategoryBreadcrum;
