import { Fragment } from 'react';

import { isEmbeddedMode } from 'utils/isEmbeddedMode';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const AppBridgeDependentUI = ({ children }: Props) => {
  if (!isEmbeddedMode()) return null;

  return <Fragment>{children}</Fragment>;
};
