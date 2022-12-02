---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
# Sidenav secondary level section
# should be the same for all markdown files
id: {{ tmplr.extension_name }}
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['ExtendedButton']
---

import { ExtendedButton } from "{{ tmplr.npm_scope }}/{{ tmplr.extension_name | kebab-case }}";

## Basic usage

### Example

```js file="./Basic.tsx"

```

### Fullscreen example

```js file="./Basic.tsx" isFullscreen

```
