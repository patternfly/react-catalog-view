import type { ReactNode } from 'react';
import { Children } from 'react';

/**
 * @param {string} prefix - String to prefix unique ID with
 */
export function getUniqueId(prefix = 'pf') {
  const uid =
    new Date().getTime() +
    Math.random()
      .toString(36)
      .slice(2);
  return `${prefix}-${uid}`;
}

/**
 * Returns the given React children prop as a regular array of React nodes.
 *
 * @param {React.ReactNode} children - Child react node
 */
export const childrenToArray = (children: ReactNode) =>
  children && Children.count(children) > 0 && Children.toArray(children);
