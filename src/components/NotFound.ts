import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PATHS } from 'config/constants';

export const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    history.push(PATHS.ROOT);
  }, [history]);

  return null;
};
