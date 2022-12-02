import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { ExtendedButton } from "@patternfly/react-catalog-view-extension";
const pageData = {
  "id": "react-catalog-view-extension",
  "section": "extensions",
  "source": "react",
  "slug": "/extensions/react-catalog-view-extension/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/module/patternfly-docs/content/extensions/react-catalog-view-extension/examples/basic.md",
  "examples": [
    "Example"
  ],
  "fullscreenExamples": [
    "Fullscreen example"
  ]
};
pageData.liveContext = {
  ExtendedButton
};
pageData.relativeImports = {
  
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExtendedButton } from '@patternfly/react-catalog-view-extension';\n\nexport const BasicExample: React.FunctionComponent = () => <ExtendedButton>My custom extension button</ExtendedButton>;\n","title":"Example","lang":"js"}}>
      
    </Example>,
  'Fullscreen example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExtendedButton } from '@patternfly/react-catalog-view-extension';\n\nexport const BasicExample: React.FunctionComponent = () => <ExtendedButton>My custom extension button</ExtendedButton>;\n","title":"Fullscreen example","lang":"js","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"basic-usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Basic usage`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Example"])}
    {React.createElement(pageData.examples["Fullscreen example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsReactCatalogViewExtensionReactDocs';
Component.pageData = pageData;

export default Component;
