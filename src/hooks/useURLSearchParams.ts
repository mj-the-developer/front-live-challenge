import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const useURLSearchParams = () => {
  const location = useLocation();
  const history = useHistory();

  const urlSearchParams = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);

    return Array.from(searchParams).reduce<Partial<Record<string, string[]>>>((prev, [key]) => {
      if (['embedded', 'hmac', 'host', 'locale', 'session', 'shop', 'timestamp'].includes(key)) return prev;
      return { ...prev, [key]: searchParams.getAll(key) };
    }, {});
  }, [location.search]);

  const appendBulkParams = useCallback(
    (key: string, values: string[]) => {
      const searchParams = new URLSearchParams(location.search);

      if (key !== 'page') searchParams.delete('page');

      searchParams.delete(key);
      values.forEach((value) => searchParams.append(key, value));

      history.push(`${location.pathname}?${searchParams.toString()}`);
    },
    [history, location.search, location.pathname]
  );

  const appendParam = useCallback(
    (key: string, value: string | number) => {
      const searchParams = new URLSearchParams(location.search);

      if (key !== 'page') searchParams.delete('page');

      searchParams.append(key, `${value}`);

      history.push(`${location.pathname}?${searchParams.toString()}`);
    },
    [history, location.search, location.pathname]
  );

  const deleteParam = useCallback(
    (key: string) => {
      const searchParams = new URLSearchParams(location.search);

      searchParams.delete(key);

      history.push(`${location.pathname}?${searchParams.toString()}`);
    },
    [history, location.pathname, location.search]
  );

  const clearParams = useCallback(() => {
    history.push(location.pathname);
  }, [history, location.pathname]);

  const setParam = useCallback(
    (key: string, value: string | number) => {
      const searchParams = new URLSearchParams(location.search);

      if (key !== 'page') searchParams.delete('page');

      if (!value) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, `${value}`);
      }

      history.push(`${location.pathname}?${searchParams.toString()}`);
    },
    [history, location.search, location.pathname]
  );

  const setBulkParams = useCallback(
    (params: { key: string; value: string }[]) => {
      const searchParams = new URLSearchParams(location.search);

      searchParams.delete('page');

      params.forEach((param) => {
        searchParams.set(`${param.key}`, param.value);
      });

      history.push(`${location.pathname}?${searchParams.toString()}`);
    },
    [history, location.search, location.pathname]
  );

  return {
    urlSearchParams,
    appendBulkParams,
    appendParam,
    clearParams,
    deleteParam,
    setParam,
    setBulkParams,
  };
};
