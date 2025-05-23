import type { FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';

export interface VerticalTabsProps extends React.HTMLProps<HTMLUListElement> {
  /** Children nodes */
  children?: React.ReactNode;
  /** Additional css classes */
  className?: string;
  /** Flag to restrict shown tabs to active tabs, their parents, their siblings, and direct children */
  restrictTabs?: boolean;
  /** Flag if a direct child is active (only used in restrictTabs mode) */
  activeTab?: boolean;
}

export const VerticalTabs: FunctionComponent<VerticalTabsProps> = ({
  children = null,
  className = '',
  restrictTabs = false,
  activeTab = false,
  ...props
}: VerticalTabsProps) => {
  const classes = css('vertical-tabs-pf', { 'restrict-tabs': restrictTabs, 'active-tab': activeTab }, className);
  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  );
};
VerticalTabs.displayName = 'VerticalTabs';
