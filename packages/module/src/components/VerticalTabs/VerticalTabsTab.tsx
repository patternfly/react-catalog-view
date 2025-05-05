import type {
  HTMLProps,
  ReactNode,
  ElementType,
  ComponentType,
  FunctionComponent,
  SyntheticEvent,
} from 'react';
import { css } from '@patternfly/react-styles';

export interface VerticalTabsTabProps extends Omit<HTMLProps<HTMLLIElement>, 'title'> {
  /** Child tab nodes (VerticalTabsTab's) */
  children?: ReactNode;
  /** Additional css classes */
  className?: string;
  /** Title for the tab */
  title?: string | ReactNode;
  /** Title wrap style */
  wrapStyle?: 'wrap' | 'truncate' | 'nowrap';
  /** Flag if this is the active tab */
  active?: boolean;
  /** Flag if a descendant tab is active (used only in restrictTabs mode) */
  hasActiveDescendant?: boolean;
  /** Flag to force show the tab (if parent tab is shown, used only in restrictTabs mode) */
  shown?: boolean;
  /** Callback function when the tab is activated */
  onActivate?: () => void;
  /** HREF location */
  href?: string;
  /** Sets the base component to render. defaults to a */
  component?: ElementType<any> | ComponentType<any>;
}

export const VerticalTabsTab: FunctionComponent<VerticalTabsTabProps> = ({
  children = null,
  className = '',
  title = null,
  wrapStyle = 'wrap',
  active = false,
  hasActiveDescendant = false,
  shown = false,
  onActivate = null,
  href,
  component: Component,
  ...props
}: VerticalTabsTabProps) => {
  const classes = css('vertical-tabs-pf-tab', { active, 'active-descendant': hasActiveDescendant, shown }, className);

  const linkClasses = css({
    'no-wrap': wrapStyle === 'nowrap',
    truncate: wrapStyle === 'truncate'
  });

  const handleActivate = (e: SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    if (onActivate) {
      onActivate();
    }
  };

  return (
    <li className={classes} {...props}>
      {Component ? (
        <Component className={linkClasses} />
      ) : (
        <a className={linkClasses} onClick={e => handleActivate(e)} href={href}>
          {title}
        </a>
      )}

      {children}
    </li>
  );
};
VerticalTabsTab.displayName = 'VerticalTabsTab';
