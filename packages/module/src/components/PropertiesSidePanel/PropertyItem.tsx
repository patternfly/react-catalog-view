import type { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';

import { Content, ContentVariants } from '@patternfly/react-core';

export interface PropertyItemProps extends Omit<HTMLProps<HTMLDivElement>, 'label' | 'value'> {
  /** Additional css classes for the Property Item */
  className?: string;
  /** Label for the property */
  label: string | ReactNode;
  /** Value of the property */
  value: string | ReactNode;
}

export const PropertyItem: FunctionComponent<PropertyItemProps> = ({
  className = '',
  label,
  value = null,
  ...props
}: PropertyItemProps) => {
  const classes = css('properties-side-panel-pf-property', className);
  return (
    <div className={classes} {...props}>
      <Content component={ContentVariants.h5} className="properties-side-panel-pf-property-label">
        {label}
      </Content>
      <div className="properties-side-panel-pf-property-value">{value}</div>
    </div>
  );
};
PropertyItem.displayName = 'PropertyItem';
