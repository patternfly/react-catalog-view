---
id: Vertical tabs
section: extensions
subsection: Catalog view
source: react
propComponents: ['VerticalTabs', 'VerticalTabsTab']
sourceLink: https://github.com/patternfly/react-catalog-view/tree/main/packages/module/src/components/VerticalTabs/VerticalTabs.tsx
---

import { VerticalTabs, VerticalTabsTab } from '@patternfly/react-catalog-view-extension';
import './verticalTab.css';

## Introduction
Note: Vertical tabs lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!

## Examples
### Basic
```js
import React from 'react';
import { VerticalTabs, VerticalTabsTab } from '@patternfly/react-catalog-view-extension';

class MockVerticalTabsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTabId: 'all' };
    this.onActivateTab = id => {
      this.setState({ activeTabId: id });
    };
  }

  render() {
    const { restrictTabs, wrapStyle } = this.props;
    const { activeTabId } = this.state;

    const topLevelIds = ['all', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];

    const renderTab = (id, title, children, props) => {
      const childIds = React.Children.map(children, child => child.props.id);

      return (
        <VerticalTabsTab
          id={id}
          key={id}
          title={title}
          wrapStyle={wrapStyle}
          onActivate={() => this.onActivateTab(id)}
          active={activeTabId === id}
          hasActiveDescendant={activeTabId.startsWith(id)}
          {...props}
        >
          {children && (
            <VerticalTabs restrictTabs={restrictTabs} activeTab={childIds.includes(activeTabId)}>
              {children}
            </VerticalTabs>
          )}
        </VerticalTabsTab>
      );
    };

    return (
      <VerticalTabs id="vertical-tabs" restrictTabs={restrictTabs} activeTab={topLevelIds.includes(activeTabId)}>
        {renderTab('all', 'All', null, { shown: true })}
        {renderTab('one', 'Tab One', [
          renderTab('one-one', 'Tab One-One', [
            renderTab('one-one-one', 'About Modal', null, {href: "../components/about-modal"}),
            renderTab('one-one-two', 'Accordion', null, {href: "../components/accordion"}),
            renderTab('one-one-three', 'Redhat', null, {href: "http://www.redhat.com"})
          ]),
          renderTab('one-two', 'Tab One-Two', [
            renderTab('one-two-one', 'Tab One-Two-One'),
            renderTab('one-two-two', 'Tab One-Two-Two'),
            renderTab('one-two-three', 'Tab One-Two-Three')
          ]),
          renderTab('one-three', 'Tab One-Thee')
        ])}
        {renderTab('two', 'Tab Two', [
          renderTab('two-one', 'Tab Two-One'),
          renderTab('two-two', 'Tab Two-Two'),
          renderTab('two-three', 'Tab Two-Three')
        ])}
        {renderTab('three', 'Tab Three - Donec id elit non mi porta gravida at eget metus')}
        {renderTab('four', 'Tab Four')}
        {renderTab('five', 'Tab Five')}
        {renderTab('six', 'Tab Six')}
        {renderTab('seven', 'Tab Seven')}
      </VerticalTabs>
    );
  }
}
```
