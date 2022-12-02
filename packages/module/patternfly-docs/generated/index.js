module.exports = {
  '/extensions/catalog-view-item-header/extensions': {
    id: "Catalog view item header",
    title: "Catalog view item header",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"},{"text":"With vendor description"}]],
    examples: ["Basic","With vendor description"],
    section: "extensions",
    source: "extensions",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-item-header/extensions/index" */ './extensions/catalog-view-item-header/extensions')
  },
  '/extensions/catalog-view-tile/extensions': {
    id: "Catalog view tile",
    title: "Catalog view tile",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic featured tile"},{"text":"Basic with footer"},{"text":"Link variant"},{"text":"With multiple icon badges"},{"text":"With text badge"},{"text":"With children instead of description"}]],
    examples: ["Basic featured tile","Basic with footer","Link variant","With multiple icon badges","With text badge","With children instead of description"],
    section: "extensions",
    source: "extensions",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-tile/extensions/index" */ './extensions/catalog-view-tile/extensions')
  },
  '/extensions/catalog-view-filter-side-panel/extensions': {
    id: "Catalog view filter side panel",
    title: "Catalog view filter side panel",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "extensions",
    source: "extensions",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-filter-side-panel/extensions/index" */ './extensions/catalog-view-filter-side-panel/extensions')
  },
  '/extensions/catalog-view-properties-side-panel/extensions': {
    id: "Catalog view properties side panel",
    title: "Catalog view properties side panel",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Properties side panel with property items"}]],
    examples: ["Properties side panel with property items"],
    section: "extensions",
    source: "extensions",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-properties-side-panel/extensions/index" */ './extensions/catalog-view-properties-side-panel/extensions')
  },
  '/extensions/catalog-view-vertical-tabs/extensions': {
    id: "Catalog view vertical tabs",
    title: "Catalog view vertical tabs",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "extensions",
    source: "extensions",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-vertical-tabs/extensions/index" */ './extensions/catalog-view-vertical-tabs/extensions')
  }
};