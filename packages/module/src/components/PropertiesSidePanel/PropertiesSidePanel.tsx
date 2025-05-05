import type { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';

export interface PropertySidePanelProps extends HTMLProps<HTMLDivElement> {
  /** Additional css classes for the Property Item */
  className?: string;
  /** Children, should be PropertyItem items plus any action buttons, etc. */
  children?: ReactNode;
}

export const PropertiesSidePanel: FunctionComponent<PropertySidePanelProps> = ({
  className = '',
  children = null,
  ...props
}: PropertySidePanelProps) => {
  const classes = css('properties-side-panel-pf', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
PropertiesSidePanel.displayName = 'PropertiesSidePanel';
