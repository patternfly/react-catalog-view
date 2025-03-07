import * as React from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, CardProps } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { getUniqueId } from '@patternfly/react-core';

export interface CatalogTileProps extends Omit<CardProps, 'title'> {
  /** Id */
  id?: any;
  /** Additional css classes */
  className?: string;
  /** Flag if the tile is 'featured' */
  featured: boolean;
  /** Callback for a click on the tile */
  onClick?: (event: React.FormEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>) => void;
  /** href for the tile if used as a link */
  href: string;
  /** URL of an image for the item's icon */
  iconImg?: string;
  /** Alternate text for the item's icon */
  iconAlt?: string;
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass?: string;
  /** Alternatively provided JSX for the icon */
  icon?: React.ReactNode;
  /** Array of badges */
  badges?: React.ReactNode[];
  /** Tile for the catalog item */
  title: string | React.ReactNode;
  /** Vendor for the catalog item */
  vendor?: string | React.ReactNode;
  /** Description of the catalog item */
  description?: string | React.ReactNode;
  /** Footer for the tile */
  footer?: string | React.ReactNode;
  /** Body content that isn't truncated */
  children?: React.ReactNode;
}

export class CatalogTile extends React.Component<CatalogTileProps> {
  generatedId: string;
  constructor(props: CatalogTileProps) {
    super(props);
    this.generatedId = getUniqueId('pf-catalog-tile');
  }
  static displayName = 'CatalogTile';
  static defaultProps = {
    id: null as string,
    className: '',
    featured: false,
    onClick: null as (event: React.SyntheticEvent<HTMLElement>) => void,
    href: null as string,
    iconImg: null as string,
    iconAlt: '',
    iconClass: '',
    icon: null as React.ReactNode,
    badges: [] as React.ReactNode[],
    vendor: null as string | React.ReactNode,
    description: null as string | React.ReactNode,
    footer: null as string | React.ReactNode,
    children: null as React.ReactNode
  };

  private handleClick = (e: React.FormEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>) => {
    const { onClick, href } = this.props;

    if ("type" in e && e.type === "click" && onClick) {
      // It's a MouseEvent
      const mouseEvent = e as React.MouseEvent<Element, MouseEvent>;
      if (
        mouseEvent.metaKey || // Cmd key (Mac)
        mouseEvent.ctrlKey || // Ctrl key
        mouseEvent.shiftKey // Shift key
      ) {
        window.open(href, '_blank');
        return; 
      }
    } else if (href){
      window.open(href, '_blank');
    }

    if (onClick) {
      onClick(e);
    } 
  };

  private renderBadges = (badges: React.ReactNode[]) => {
    if (!badges || !badges.length) {
      return null;
    }

    return (
      <div className="catalog-tile-pf-badge-container">
        {badges.map((badge, index) => (
          <span key={`badge-${index}`}>{badge}</span>
        ))}
      </div>
    );
  };

  render() {
    const {
      id,
      className,
      featured,
      onClick,
      href,
      icon,
      iconImg,
      iconAlt,
      iconClass,
      badges,
      title,
      vendor,
      description,
      footer,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ref,
      children,
      ...props
    } = this.props;

    return (
      <Card
        id={id || this.generatedId}
        className={css('catalog-tile-pf', { featured }, className)}
        variant={featured ? 'secondary' : 'default'}
        isClickable={(onClick || href) ? true : false}
        {...props}
      >
        {(badges.length > 0 || iconImg || iconClass || icon || onClick || href) && (
          <CardHeader
            selectableActions={ (onClick || href) && {
                selectableActionId: id + '-input',
                onClickAction: (e) => this.handleClick(e),
                selectableActionAriaLabelledby: id
              }
            }
          >
            {iconImg && <img className="catalog-tile-pf-icon" src={iconImg} alt={iconAlt} />}
            {!iconImg && (iconClass || icon) && <span className={`catalog-tile-pf-icon ${iconClass}`}>{icon}</span>}
            {badges.length > 0 && this.renderBadges(badges)}
          </CardHeader>
        )}
        <CardTitle className="catalog-tile-pf-header">
          <div className="catalog-tile-pf-title">{title}</div>
          {vendor && <div className="catalog-tile-pf-subtitle">{vendor}</div>}
        </CardTitle>
        {(description || children) && (
          <CardBody className="catalog-tile-pf-body">
            {description && (
              <div className="catalog-tile-pf-description">
                <span className={css({ 'has-footer': footer })}>{description}</span>
              </div>
            )}
            {children}
          </CardBody>
        )}
        {footer && <CardFooter className="catalog-tile-pf-footer">{footer}</CardFooter>}
      </Card>
    );
  }
}
