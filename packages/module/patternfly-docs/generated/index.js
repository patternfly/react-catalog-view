module.exports = {
  '/extensions/catalog-view/vertical-tabs/react': {
    id: "Vertical tabs",
    title: "Vertical tabs",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "extensions",
    subsection: "Catalog view",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/catalog-view/vertical-tabs/react/index" */ './extensions/catalog-view/vertical-tabs/react')
  },
  '/extensions/catalog-view/properties-side-panel/react': {
    id: "Properties side panel",
    title: "Properties side panel",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Properties side panel with property items"}]],
    examples: ["Properties side panel with property items"],
    section: "extensions",
    subsection: "Catalog view",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/catalog-view/properties-side-panel/react/index" */ './extensions/catalog-view/properties-side-panel/react')
  },
  '/extensions/catalog-view/filter-side-panel/react': {
    id: "Filter side panel",
    title: "Filter side panel",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "extensions",
    subsection: "Catalog view",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/catalog-view/filter-side-panel/react/index" */ './extensions/catalog-view/filter-side-panel/react')
  },
  '/extensions/catalog-view/catalog-tile/react': {
    id: "Catalog tile",
    title: "Catalog tile",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic featured tile"},{"text":"Basic with footer"},{"text":"Link variant"},{"text":"With multiple icon badges"},{"text":"With text badge"},{"text":"With children instead of description"}]],
    examples: ["Basic featured tile","Basic with footer","Link variant","With multiple icon badges","With text badge","With children instead of description"],
    section: "extensions",
    subsection: "Catalog view",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/catalog-view/catalog-tile/react/index" */ './extensions/catalog-view/catalog-tile/react')
  },
  '/extensions/catalog-view/catalog-item-header/react': {
    id: "Catalog item header",
    title: "Catalog item header",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"},{"text":"With vendor description"}]],
    examples: ["Basic","With vendor description"],
    section: "extensions",
    subsection: "Catalog view",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/catalog-view/catalog-item-header/react/index" */ './extensions/catalog-view/catalog-item-header/react')
  }
};