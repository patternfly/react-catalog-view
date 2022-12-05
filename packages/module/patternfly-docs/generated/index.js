module.exports = {
  '/extensions/catalog-view-item-header/react': {
    id: "Catalog view item header",
    title: "Catalog view item header",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"},{"text":"With vendor description"}]],
    examples: ["Basic","With vendor description"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-item-header/react/index" */ './extensions/catalog-view-item-header/react')
  },
  '/extensions/catalog-view-tile/react': {
    id: "Catalog view tile",
    title: "Catalog view tile",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic featured tile"},{"text":"Basic with footer"},{"text":"Link variant"},{"text":"With multiple icon badges"},{"text":"With text badge"},{"text":"With children instead of description"}]],
    examples: ["Basic featured tile","Basic with footer","Link variant","With multiple icon badges","With text badge","With children instead of description"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-tile/react/index" */ './extensions/catalog-view-tile/react')
  },
  '/extensions/catalog-view-filter-side-panel/react': {
    id: "Catalog view filter side panel",
    title: "Catalog view filter side panel",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-filter-side-panel/react/index" */ './extensions/catalog-view-filter-side-panel/react')
  },
  '/extensions/catalog-view-properties-side-panel/react': {
    id: "Catalog view properties side panel",
    title: "Catalog view properties side panel",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Properties side panel with property items"}]],
    examples: ["Properties side panel with property items"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-properties-side-panel/react/index" */ './extensions/catalog-view-properties-side-panel/react')
  },
  '/extensions/catalog-view-vertical-tabs/react': {
    id: "Catalog view vertical tabs",
    title: "Catalog view vertical tabs",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-vertical-tabs/react/index" */ './extensions/catalog-view-vertical-tabs/react')
  }
};