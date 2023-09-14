import { useCallback, useState } from 'react';

export const useToggle = (initialState: boolean): [boolean, () => void, () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  const setStateTrue = () => setState(true);

  return [state, toggle, setStateTrue];
};
