---
id: Catalog item header
section: extensions
subsection: Catalog view
source: react
propComponents: ['CatalogItemHeader']
sourceLink: https://github.com/patternfly/react-catalog-view/tree/main/packages/module/src/components/CatalogItemHeader/CatalogItemHeader.tsx
---

import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo2 from './pfLogo2.svg';
import './catalogItemHeader.css';

## Introduction
Note: Catalog item header lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!

## Examples
### Basic
```js
import React from 'react';
import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo2 from './examples/pfLogo2.svg';

<CatalogItemHeader
  iconImg={pfLogo2}
  title="PatternFly"
  />
```

### With vendor description
```js
import React from 'react';
import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo2 from './examples/pfLogo2.svg';

<CatalogItemHeader
  iconImg={pfLogo2}
  title="Patternfly-React"
  vendor={
    <span>
      provided by <a href="http://redhat.com">Red Hat</a>
    </span>
  }
/>
```
