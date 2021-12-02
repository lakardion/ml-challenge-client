import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import useItemsStore from "../../stores/itemsStore";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

const Header = () => {
  const [search, setSearch] = useState("");
  const fetchItems = useItemsStore((is) => is.fetchItems);
  const router = useRouter();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    if (!search) return;
    e.preventDefault();
    fetchItems(search);
    router.push(
      {
        pathname: "/items",
        query: { search },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSearch} className={styles["form-search"]}>
        <div className={styles.logo}>
          <Image
            src="/Logo_ML.png"
            alt="mercado libre logo"
            width={40}
            height={25}
          />
        </div>
        <div className={styles["search-bar"]}>
          <div className={styles["input-container"]}>
            <input
              type="text"
              className={styles["search-input"]}
              value={search}
              onChange={handleSearchInput}
              placeholder="Nunca dejes de buscar"
            />
            <button className={styles["search-icon"]} type="submit">
              <Image
                src="/ic_Search.png"
                alt="search icon"
                width={15}
                height={15}
              />
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
export default Header;
