import { ReactNode } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

type Props = {
  children?: ReactNode;
  download?: string | boolean;
  url: string;
};

export const RouterLink = ({ children, url = '', ...rest }: Props) => {
  if (isOutboundLink(url) || rest.download) {
    return (
      <a href={url} {...rest} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
};

function isOutboundLink(url: string) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/.test(url);
}
