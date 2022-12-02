module.exports = {
  '/extensions/{{ tmplr.extension_name | kebab-case }}/design-guidelines': {
    id: "{{ tmplr.extension_name }}",
    title: "{{ tmplr.extension_name }}",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    source: "design-guidelines",
    Component: () => import(/* webpackChunkName: "extensions/{{ tmplr.extension_name | kebab-case }}/design-guidelines/index" */ './extensions/{{ tmplr.extension_name | kebab-case }}/design-guidelines')
  },
  '/extensions/{{ tmplr.extension_name | kebab-case }}/react': {
    id: "{{ tmplr.extension_name }}",
    title: "{{ tmplr.extension_name }}",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/{{ tmplr.extension_name | kebab-case }}/react/index" */ './extensions/{{ tmplr.extension_name | kebab-case }}/react')
  }
};