import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo6 from '../../../../content/examples/./pfLogo6.svg';
import '../../../../content/examples/./catalogItemHeader.css';
const pageData = {
  "id": "Catalog item header",
  "section": "extensions",
  "subsection": "Catalog view",
  "deprecated": false,
  "template": false,
  "beta": false,
  "demo": false,
  "newImplementationLink": false,
  "source": "react",
  "tabName": null,
  "slug": "/extensions/catalog-view/catalog-item-header/react",
  "sourceLink": "https://github.com/patternfly/react-catalog-view/tree/main/packages/module/src/components/CatalogItemHeader/CatalogItemHeader.tsx",
  "relPath": "packages/module/patternfly-docs/content/examples/CatalogItemHeader.md",
  "propComponents": [
    {
      "name": "CatalogItemHeader",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes",
          "defaultValue": "''"
        },
        {
          "name": "iconClass",
          "type": "string",
          "description": "Class for the image when an icon is to be used (exclusive from iconImg)",
          "defaultValue": "null"
        },
        {
          "name": "iconImg",
          "type": "string",
          "description": "URL of an image for the item's icon",
          "defaultValue": "null"
        },
        {
          "name": "title",
          "type": "string | React.ReactNode",
          "description": "Tile for the catalog item",
          "required": true
        },
        {
          "name": "vendor",
          "type": "string | React.ReactNode",
          "description": "Vendor for the catalog item",
          "defaultValue": "null"
        }
      ]
    }
  ],
  "examples": [
    "Basic",
    "With vendor description"
  ]
};
pageData.liveContext = {
  CatalogItemHeader,
  pfLogo6
};
pageData.relativeImports = "import 'content/examples/./catalogItemHeader.css';"
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';\nimport pfLogo6 from './examples/pfLogo6.svg';\n\nconst Basic = () => (\n  <CatalogItemHeader\n    iconImg={pfLogo6}\n    title=\"PatternFly\"\n    />\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With vendor description': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';\nimport pfLogo6 from './examples/pfLogo6.svg';\n\nconst WithVendorDescription = () => (\n  <CatalogItemHeader\n    iconImg={pfLogo6}\n    title=\"Patternfly-React\"\n    vendor={\n      <span>\n        provided by <a style={{ textDecoration: 'underline' }}href=\"http://redhat.com\">Red Hat</a>\n      </span>\n    }\n  />\n)","title":"With vendor description","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: Catalog item header lives in its own package at `}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension"}}>
        <code {...{"className":"ws-code"}}>
          {`@patternfly/react-catalog-view-extension`}
        </code>
      </PatternflyThemeLink>
      {`!`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With vendor description"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsCatalogViewCatalogItemHeaderReactDocs';
Component.pageData = pageData;

export default Component;
