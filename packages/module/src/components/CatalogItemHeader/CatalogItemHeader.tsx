import type { HTMLProps, FunctionComponent } from 'react';
import { Content, Title } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';

export interface CatalogItemHeaderProps extends Omit<HTMLProps<HTMLElement>, 'title'> {
  /** Additional css classes */
  className?: string;
  /** URL of an image for the item's icon */
  iconImg?: string;
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass?: string;
  /** Tile for the catalog item */
  title: string | React.ReactNode;
  /** Vendor for the catalog item */
  vendor?: string | React.ReactNode;
}

export const CatalogItemHeader: FunctionComponent<CatalogItemHeaderProps> = ({
  className = '',
  iconImg = null,
  iconClass = null,
  title,
  vendor = null,
  ...props
}: CatalogItemHeaderProps) => (
  <header className={css('catalog-item-header-pf', className)} {...props}>
    {iconImg && <img className="catalog-item-header-pf-icon" src={iconImg} alt="" />}
    {!iconImg && iconClass && <span className={`catalog-item-header-pf-icon ${iconClass}`} />}
    <div className="catalog-item-header-pf-text">
      <Title headingLevel="h1" className="catalog-item-header-pf-title">
        {title}
      </Title>
      {vendor && (
        <Content component="p" className="catalog-item-header-pf-subtitle">
          {vendor}
        </Content>
      )}
    </div>
  </header>
);
CatalogItemHeader.displayName = 'CatalogItemHeader';
