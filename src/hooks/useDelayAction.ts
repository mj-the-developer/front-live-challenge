import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const useDelayAction = (
  action: (...args: string[]) => void,
  params: [string],
  initialValue = '',
  time = 500
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(initialValue);
  const paramsRef = useRef(params);

  useEffect(() => {
    const timeOutId = setTimeout(() => action.apply(null, [...paramsRef.current, value]), time);
    return () => clearTimeout(timeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, time]);

  return [value, setValue];
};
