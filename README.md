# React catalog view

This package contains components based on Patternfly from https://github.com/patternfly/patternfly-react

Development for this extension was previously being done under the patternfly-react repo.

### Installing

```
yarn add react-catalog-view-extension
```

or

```
npm install react-catalog-view-extension --save
```

### Usage

```
import { Component } from 'react-catalog-view-extension';
```

#### Styling:

Example with SCSS:

```
@import "~patternfly-react/dist/sass/patternfly-react";
@import "~react-catalog-view-extension/dist/sass/react-catalog-view-extension";
```

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Testing

Testing is done at the root of this repo.

```
yarn test
```

### Publishing

```
yarn publish
```

### AI-assisted development guidelines

Please reference [PatternFly's AI-assisted development guidelines](https://github.com/patternfly/.github/blob/main/CONTRIBUTING.md) if you'd like to contribute code generated using AI.
