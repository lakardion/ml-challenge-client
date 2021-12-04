import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import useItemsStore from "../../stores/itemsStore";

const Header = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const clearAllItems = useItemsStore((is) => is.clearAllItems);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    if (!search) return;
    clearAllItems();
    e.preventDefault();
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
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/Logo_ML@2x.png.png"
              alt="mercado libre logo"
              width={60}
              height={40}
            />
          </a>
        </Link>
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
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
export default Header;
