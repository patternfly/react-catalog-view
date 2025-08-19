---
id: Catalog view demo
section: extensions
subsection: Catalog view
source: react
---

import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import {
  CatalogTile,
  FilterSidePanel,
  FilterSidePanelCategory,
  FilterSidePanelCategoryItem
} from '@patternfly/react-catalog-view-extension';
import pfLogo6 from './pfLogo6.svg';
import '../../../dist/css/react-catalog-view-extension.css';


```ts isFullscreen
import React from 'react';
import {
  Page,
  PageSection,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  SearchInput,
  Button,
  ButtonVariant,
  Pagination,
  Divider,
  Checkbox,
  Badge,
  Grid,
  GridItem,
  Split,
  SplitItem,
  Stack,
  StackItem,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Title,
  Text,
  TextContent,
  Masthead,
  TextVariants
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import {
  CatalogTile,
  FilterSidePanel,
  FilterSidePanelCategory,
  FilterSidePanelCategoryItem
} from '@patternfly/react-catalog-view-extension';
import pfLogo6 from './pfLogo6.svg';
import '../../../dist/css/react-catalog-view-extension.css';


const CatalogViewDemo: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(12);
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<any>(null);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleFilterChange = (filterId: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filterId]);
    } else {
      setSelectedFilters(selectedFilters.filter(id => id !== filterId));
    }
  };

  const handleTileClick = (item: any) => {
    setSelectedItem(item);
    setIsDrawerExpanded(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerExpanded(false);
    setSelectedItem(null);
  };

  const catalogItems = [
    {
      id: '1',
      title: 'Red Hat OpenShift',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Beta',
      badgeColor: 'blue',
      featured: true,
      href: '#'
    },
    {
      id: '2',
      title: 'Kubernetes Operator',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '3',
      title: 'Ansible Automation',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '4',
      title: 'Red Hat Enterprise Linux',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '5',
      title: 'Red Hat JBoss',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '6',
      title: 'Red Hat Quay',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '7',
      title: 'Red Hat AMQ',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '8',
      title: 'Red Hat Fuse',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '9',
      title: 'Red Hat Data Grid',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '10',
      title: 'Red Hat Single Sign-On',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: 'http://localhost:3845/assets/b07021ef211d4a5b7c1e291a39e47c2089a52f4a.svg',
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '11',
      title: 'Red Hat 3scale',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    },
    {
      id: '12',
      title: 'Red Hat CodeReady',
      vendor: 'Provided by Red Hat',
      description: 'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#'
    }
  ];

  const filterCategories = [
    {
      id: 'category1',
      title: 'Category',
      items: [
        { id: 'containers', label: 'Containers' },
        { id: 'automation', label: 'Automation' },
        { id: 'operating-systems', label: 'Operating Systems' },
        { id: 'middleware', label: 'Middleware' },
        { id: 'databases', label: 'Databases' },
        { id: 'security', label: 'Security' }
      ]
    },
    {
      id: 'category2',
      title: 'Status',
      items: [
        { id: 'enabled', label: 'Enabled' },
        { id: 'disabled', label: 'Disabled' },
        { id: 'deprecated', label: 'Deprecated' },
        { id: 'preview', label: 'Preview' }
      ]
    },
    {
      id: 'category3',
      title: 'Type',
      items: [
        { id: 'operators', label: 'Operators' },
        { id: 'helm-charts', label: 'Helm Charts' },
        { id: 'templates', label: 'Templates' },
        { id: 'services', label: 'Services' },
        { id: 'applications', label: 'Applications' }
      ]
    },
    {
      id: 'category4',
      title: 'Provider',
      items: [
        { id: 'red-hat', label: 'Red Hat' },
        { id: 'community', label: 'Community' },
        { id: 'partners', label: 'Partners' },
        { id: 'verified', label: 'Verified' }
      ]
    },
    {
      id: 'category5',
      title: 'Tags',
      items: [
        { id: 'kubernetes', label: 'Kubernetes' },
        { id: 'openshift', label: 'OpenShift' },
        { id: 'ansible', label: 'Ansible' },
        { id: 'automation', label: 'Automation' },
        { id: 'monitoring', label: 'Monitoring' },
        { id: 'logging', label: 'Logging' }
      ]
    }
  ];

  const renderBadge = (badge: string, color: string) => {
    const badgeColors = {
      blue: 'blue',
      grey: 'grey'
    };
    return <Badge isRead>{badge}</Badge>;
  };

  const renderCatalogTile = (item: any) => (
    <CatalogTile
      key={item.id}
      id={item.id}
      featured={item.featured}
      title={item.title}
      vendor={item.vendor}
      description={item.description}
      iconImg={item.iconImg}
      iconAlt={`${item.title} icon`}
      badges={[renderBadge(item.badge, item.badgeColor)]}
      onClick={() => handleTileClick(item)}
      footer={
        <div style={{ color: '#3d7317', fontSize: '12px' }}>
          <span style={{ marginRight: '4px' }}>✓</span>
          Enabled
        </div>
      }
    />
  );

  return (
    <Page masthead={<Masthead></Masthead>}>
      <PageSection>
        <Toolbar>
          <ToolbarContent>
            <ToolbarGroup>
              <ToolbarItem>
                <MenuToggle
                  isExpanded={false}
                  onToggle={() => {}}
                  splitButtonOptions={{
                    items: [
                      <MenuToggleCheckbox
                        id="split-button-checkbox"
                        key="split-checkbox"
                        aria-label="Select all"
                        isChecked={false}
                        onChange={() => {}}
                      />
                    ]
                  }}
                  aria-label="Select all"
                >
                  Select all
                </MenuToggle>
              </ToolbarItem>
              <ToolbarItem>
                <SearchInput
                  placeholder="Search catalog items..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  onClear={() => setSearchValue('')}
                />
              </ToolbarItem>
              <ToolbarItem>
                <Button variant={ButtonVariant.link}>
                  Button
                </Button>
              </ToolbarItem>
              <ToolbarItem>
                <Button variant={ButtonVariant.link}>
                  Button
                </Button>
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarItem alignment={{ default: 'alignRight' }}>
              <Pagination
                itemCount={catalogItems.length}
                page={currentPage}
                perPage={perPage}
                onSetPage={(_, page) => setCurrentPage(page)}
                onPerPageSelect={(_, perPage) => setPerPage(perPage)}
                isCompact
              />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <Divider />
        <Drawer isExpanded={isDrawerExpanded} isInline>
          <DrawerContent panelContent={
            <DrawerPanelContent widths={{ default: 'width_33' }}>
              <DrawerHead>
                <div>
                  <Title headingLevel="h2" size="lg">
                    {selectedItem?.title || 'Catalog Item Details'}
                  </Title>
                  <p style={{ marginTop: '8px', color: '#6a6e73' }}>
                    {selectedItem?.description || 'Select a catalog item to view details'}
                  </p>
                </div>
                <DrawerActions>
                  <DrawerCloseButton onClick={handleDrawerClose} />
                </DrawerActions>
              </DrawerHead>
              <DrawerContentBody>
                {selectedItem && (
                  <DescriptionList>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Provider</DescriptionListTerm>
                      <DescriptionListDescription>{selectedItem.vendor}</DescriptionListDescription>
                    </DescriptionListGroup>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Status</DescriptionListTerm>
                      <DescriptionListDescription>
                        <span style={{ color: '#3d7317' }}>✓ Enabled</span>
                      </DescriptionListDescription>
                    </DescriptionListGroup>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Type</DescriptionListTerm>
                      <DescriptionListDescription>{selectedItem.badge}</DescriptionListDescription>
                    </DescriptionListGroup>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Category</DescriptionListTerm>
                      <DescriptionListDescription>Red Hat Products</DescriptionListDescription>
                    </DescriptionListGroup>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Version</DescriptionListTerm>
                      <DescriptionListDescription>Latest</DescriptionListDescription>
                    </DescriptionListGroup>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Last Updated</DescriptionListTerm>
                      <DescriptionListDescription>2024-01-15</DescriptionListDescription>
                    </DescriptionListGroup>
                  </DescriptionList>
                )}
              </DrawerContentBody>
            </DrawerPanelContent>
          }>
            <DrawerContentBody>
              <Split hasGutter>
                <SplitItem isFilled={false} style={{ width: '300px' }}>
                  <FilterSidePanel>
                    <Stack hasGutter>
                      {filterCategories.map(category => (
                        <StackItem key={category.id}>
                          <FilterSidePanelCategory title={category.title}>
                            {category.items.map(item => (
                              <FilterSidePanelCategoryItem 
                                key={item.id}
                                checked={selectedFilters.includes(item.id)}
                                onClick={() => handleFilterChange(item.id, !selectedFilters.includes(item.id))}
                                title={item.label}
                              >
                                {item.label}
                              </FilterSidePanelCategoryItem>
                            ))}
                          </FilterSidePanelCategory>
                        </StackItem>
                      ))}
                    </Stack>
                  </FilterSidePanel>
                </SplitItem>
                <SplitItem isFilled>
                  <Grid hasGutter>
                    {catalogItems.map(item => (
                      <GridItem key={item.id} span={4}>
                        {renderCatalogTile(item)}
                      </GridItem>
                    ))}
                  </Grid>
                </SplitItem>
              </Split>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </PageSection>
    </Page>
  );
};

export default CatalogViewDemo;