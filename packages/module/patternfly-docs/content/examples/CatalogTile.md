---
id: Catalog tile
section: extensions
subsection: Catalog view
source: react
propComponents: ['CatalogTile']
sourceLink: https://github.com/patternfly/react-catalog-view/tree/main/packages/module/src/components/CatalogTile/CatalogTile.tsx
---

import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-check-circle-icon';
import pfLogo2 from './pfLogo2.svg';
import './catalogTile.css';

## Introduction

Note: Catalog tile lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!

## Examples
### Basic featured tile
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import pfLogo2 from './pfLogo2.svg';
import '../../../../dist/css/react-catalog-view-extension.css';

<CatalogTile
  id="simple-tile"
  featured
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>
  ]}
  title="Patternfly-React"
  vendor="provided by Red Hat"
  description={
    'This is a very, very long description that should be truncated after three lines. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
/>
```

### Basic with footer
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-check-circle-icon';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="simple-footer"
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>
  ]}
  title="Patternfly-React"
  vendor="provided by Red Hat"
  description={
    'This is a very, very long description that should be truncated after one line. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
  footer={
    <span>
      <OutlinedCheckCircleIcon style={{color: 'var(--pf-v5-global--success-color--100)'}} /> Enabled
    </span>
  }
/>
```

### Link variant
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="simple-link-variant"
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>
  ]}
  href="http://patternfly.org/v4"
  title="Patternfly-React"
  vendor="provided by Red Hat"
  description={
    'This is a very, very long description that should be truncated after three lines. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
/>
```

### With multiple icon badges
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-check-circle-icon';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="multiIcon"
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>,
    <CatalogTileBadge title="USDA Approved">
      <OutlinedCheckCircleIcon style={{color: 'var(--pf-v5-global--success-color--100)'}} />
    </CatalogTileBadge>
  ]}
  title="Patternfly-React"
  vendor="provided by Red Hat"
  description={
    'This is a very, very long description that should be truncated after three lines. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
/>
```

### With text badge
```js
import React from 'react';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="text-badge"
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    'Community'
  ]}
  title="Patternfly-React"
  vendor="provided by Red Hat"
  description={
    'This is a very, very long description that should be truncated after three lines. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
/>
```

### With children instead of description
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="simple-with-children"
  featured
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>
  ]}
  title="Patternfly-React"
  vendor="provided by Red Hat"
>
  This is a very, very long stetch of child text that should be not be truncated
  and illustrates how Flyers can add longer content to PatternFly 4 catalog tiles
  using the children prop. Cards usually truncate descriptions at three lines.
  Cards with a footer are truncated after one line. This has changed from PatternFly 3.
  Children can be of any length.
</CatalogTile>
```
