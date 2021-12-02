import { useRouter } from "next/router";
import { EffectCallback, useEffect } from "react";

const useFetchFromQuery = (
  fetchFunction: (params: any) => Promise<void>,
  queryName: string,
  cleanUpFunction?: () => void
) => {
  const { query } = useRouter();

  useEffect(() => {
    if (Object.keys(query).length) {
      const value = query[queryName]?.toString();
      value && fetchFunction(value);
    }
    return cleanUpFunction;
  }, [query, fetchFunction, queryName, cleanUpFunction]);
};

export default useFetchFromQuery