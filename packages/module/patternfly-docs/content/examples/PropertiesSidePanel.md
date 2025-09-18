---
id: Properties side panel
section: extensions
subsection: Catalog view
source: react
propComponents: ['PropertiesSidePanel', 'PropertyItem']
sourceLink: https://github.com/patternfly/react-catalog-view/tree/main/packages/module/src/components/PropertiesSidePanel/PropertiesSidePanel.tsx
---

import { PropertiesSidePanel, PropertyItem } from '@patternfly/react-catalog-view-extension';
import OkIcon from '@patternfly/react-icons/dist/esm/icons/ok-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import GlobeIcon from '@patternfly/react-icons/dist/esm/icons/globe-icon';

## Introduction

Note: PropertiesSidePanel lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!

## Examples

### Properties side panel with property items

```js
import { PropertiesSidePanel, PropertyItem } from '@patternfly/react-catalog-view-extension';
import OkIcon from '@patternfly/react-icons/dist/esm/icons/ok-icon';
import { Icon } from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import GlobeIcon from '@patternfly/react-icons/dist/esm/icons/globe-icon';

<PropertiesSidePanel>
  <PropertyItem label="Operator Version" value="0.9.8 (latest)" />
  <PropertyItem
    label="Certified Level"
    value={
      <>
        <Icon status="success">
          <OkIcon />
        </Icon>
        Certified
      </>
    }
  />
  <PropertyItem label="Provider" value="Red Hat, Inc" />
  <PropertyItem label="Health Index" value="A" />
  <PropertyItem
    label="Repository"
    value={
      <a href="https://quay.io/repository/redhat/prometheus-operator">
        https://quay.io/repository/redhat/prometheus-operator
      </a>
    }
  />
  <PropertyItem
    label="Container Image"
    value={
      <a href="#">
        0.22.2 <ExternalLinkAltIcon />
      </a>
    }
  />
  <PropertyItem
    label="Created At"
    value={
      <span>
        <GlobeIcon /> Aug 23, 1:58pm
      </span>
    }
  />
  <PropertyItem label="Support" value={<a href="#">Red Hat</a>} />
</PropertiesSidePanel>;
```
