---
id: Catalog view demo
section: extensions
subsection: Catalog view
source: react
---

import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-check-circle-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import {
CatalogTile,
FilterSidePanel,
FilterSidePanelCategory,
FilterSidePanelCategoryItem,
PropertiesSidePanel,
PropertyItem,
VerticalTabs,
VerticalTabsTab
} from '@patternfly/react-catalog-view-extension';
import pfLogo6 from './pfLogo6.svg';

## Catalog view

To use the catalog view extension components, you need to import the CSS file into your project to get the proper styles: `import '@patternfly/react-catalog-view-extension/dist/css/react-catalog-view-extension.css';`

### Catalog view demo

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
  DrawerPanelBody,
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
  TextVariants,
  Icon,
  EmptyState,
  EmptyStateBody,
  EmptyStateActions,
  EmptyStateFooter
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-check-circle-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import {
  CatalogTile,
  FilterSidePanel,
  FilterSidePanelCategory,
  FilterSidePanelCategoryItem,
  PropertiesSidePanel,
  PropertyItem,
  VerticalTabs,
  VerticalTabsTab
} from '@patternfly/react-catalog-view-extension';
import pfLogo6 from './pfLogo6.svg';

export const CatalogViewDemo: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<any>(null);
  const [activeTab, setActiveTab] = React.useState('all');

  const handleSearchChange = (event: React.FormEvent<HTMLInputElement>, value: string) => {
    setSearchValue(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleFilterChange = (filterId: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filterId]);
    } else {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId));
    }
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleTileClick = (item: any) => {
    setSelectedItem(item);
    setIsDrawerExpanded(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerExpanded(false);
    setSelectedItem(null);
  };

  const handleTabActivate = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  const catalogItems = [
    {
      id: '1',
      title: 'Red Hat OpenShift',
      vendor: 'Red Hat, Inc.',
      description:
        'Enterprise Kubernetes platform that provides a consistent foundation for cloud-native applications across hybrid and multi-cloud environments.',
      iconImg: pfLogo6,
      badge: 'Beta',
      badgeColor: 'blue',
      featured: true,
      href: '#',
      version: '4.15.2',
      lastUpdated: '2024-01-15',
      category: 'platform'
    },
    {
      id: '2',
      title: 'Kubernetes Operator',
      vendor: 'Community',
      description:
        'A Kubernetes operator that automates the deployment, configuration, and management of complex applications on Kubernetes clusters.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#',
      version: '1.8.3',
      lastUpdated: '2024-01-10',
      category: 'operators'
    },
    {
      id: '3',
      title: 'Ansible Automation',
      vendor: 'Red Hat, Inc.',
      description:
        'IT automation platform that automates cloud provisioning, configuration management, application deployment, and service orchestration.',
      iconImg: pfLogo6,
      badge: 'Stable',
      badgeColor: 'green',
      featured: false,
      href: '#',
      version: '2.16.1',
      lastUpdated: '2024-01-08',
      category: 'automation'
    },
    {
      id: '4',
      title: 'Red Hat Enterprise Linux',
      vendor: 'Red Hat, Inc.',
      description:
        'Enterprise Linux operating system designed for mission-critical workloads with enhanced security, performance, and reliability features.',
      iconImg: pfLogo6,
      badge: 'Certified',
      badgeColor: 'green',
      featured: false,
      href: '#',
      version: '9.3',
      lastUpdated: '2024-01-12',
      category: 'platform'
    },
    {
      id: '5',
      title: 'Red Hat JBoss',
      vendor: 'Red Hat, Inc.',
      description:
        'Enterprise application platform that provides a complete solution for developing, deploying, and managing Java applications.',
      iconImg: pfLogo6,
      badge: 'Stable',
      badgeColor: 'green',
      featured: false,
      href: '#',
      version: '7.4.10',
      lastUpdated: '2024-01-05',
      category: 'applications'
    },
    {
      id: '6',
      title: 'Red Hat Quay',
      vendor: 'Red Hat, Inc.',
      description:
        'Enterprise container registry that provides secure storage, distribution, and deployment of container images with advanced security features.',
      iconImg: pfLogo6,
      badge: 'Beta',
      badgeColor: 'blue',
      featured: false,
      href: '#',
      version: '3.9.2',
      lastUpdated: '2024-01-18',
      category: 'platform'
    },
    {
      id: '7',
      title: 'Red Hat AMQ',
      vendor: 'Provided by Red Hat',
      description:
        'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#',
      category: 'messaging'
    },
    {
      id: '8',
      title: 'Red Hat Fuse',
      vendor: 'Provided by Red Hat',
      description:
        'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#',
      category: 'integration'
    },
    {
      id: '9',
      title: 'Red Hat Data Grid',
      vendor: 'Provided by Red Hat',
      description:
        'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#',
      category: 'data'
    },
    {
      id: '10',
      title: 'Red Hat Single Sign-On',
      vendor: 'Provided by Red Hat',
      description:
        'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#',
      category: 'security'
    },
    {
      id: '11',
      title: 'Red Hat 3scale',
      vendor: 'Provided by Red Hat',
      description:
        'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#',
      category: 'api'
    },
    {
      id: '12',
      title: 'Red Hat CodeReady',
      vendor: 'Provided by Red Hat',
      description:
        'This is a very, very long stretch of child text that should not be truncated and illustrates how the component handles long descriptions.',
      iconImg: pfLogo6,
      badge: 'Community',
      badgeColor: 'grey',
      featured: false,
      href: '#',
      category: 'development'
    }
  ];

  // Get items for the current tab
  const getItemsForTab = (tabId: string) => {
    if (tabId === 'all') {
      return catalogItems;
    }
    return catalogItems.filter(item => item.category === tabId);
  };

  // Calculate counts for each filter option based on current tab
  const getFilterCounts = () => {
    const currentItems = getItemsForTab(activeTab);
    const counts = {
      vendor: {},
      badge: {},
      featured: {}
    };

    // Count vendor options
    currentItems.forEach((item) => {
      if (item.vendor.includes('Red Hat')) {
        counts.vendor['red-hat'] = (counts.vendor['red-hat'] || 0) + 1;
      }
      if (item.vendor.includes('Community')) {
        counts.vendor['community'] = (counts.vendor['community'] || 0) + 1;
      }
    });

    // Count badge options
    currentItems.forEach((item) => {
      const badgeLower = item.badge.toLowerCase();
      counts.badge[badgeLower] = (counts.badge[badgeLower] || 0) + 1;
    });

    // Count featured options
    currentItems.forEach((item) => {
      if (item.featured) {
        counts.featured['featured'] = (counts.featured['featured'] || 0) + 1;
      } else {
        counts.featured['not-featured'] = (counts.featured['not-featured'] || 0) + 1;
      }
    });

    return counts;
  };

  const filterCounts = getFilterCounts();

  const filterCategories = [
    {
      id: 'vendor',
      title: 'Provider',
      items: [
        { id: 'red-hat', label: `Red Hat, Inc.` },
        { id: 'community', label: `Community` }
      ]
    },
    {
      id: 'badge',
      title: 'Type',
      items: [
        { id: 'beta', label: `Beta (${filterCounts.badge['beta'] || 0})` },
        { id: 'community', label: `Community (${filterCounts.badge['community'] || 0})` },
        { id: 'stable', label: `Stable (${filterCounts.badge['stable'] || 0})` },
        { id: 'certified', label: `Certified (${filterCounts.badge['certified'] || 0})` }
      ]
    },
    {
      id: 'featured',
      title: 'Featured',
      items: [
        { id: 'featured', label: `Featured` },
        { id: 'not-featured', label: `Not Featured` }
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
      isSelected={selectedItem?.id === item.id}
      footer={
        <>
          <Icon status="success">
            <OutlinedCheckCircleIcon />
          </Icon>{' '}
          Enabled
        </>
      }
    />
  );

  // Filter items based on search and selected filters
  const getFilteredItems = () => {
    const currentItems = getItemsForTab(activeTab);
    
    return currentItems.filter((item) => {
      // Search filter
      if (searchValue && typeof searchValue === 'string') {
        const searchLower = searchValue.toLowerCase();
        const matchesSearch =
          item.title.toLowerCase().includes(searchLower) ||
          item.vendor.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Filter by selected filters
      if (selectedFilters.length > 0) {
        // Group filters by category
        const filtersByCategory = selectedFilters.reduce((acc, filterId) => {
          const [category, value] = filterId.split(':');
          if (!acc[category]) acc[category] = [];
          acc[category].push(value);
          return acc;
        }, {} as Record<string, string[]>);

        // Check if item matches any filter in each category (OR logic within categories)
        const matchesFilters = Object.entries(filtersByCategory).every(([category, values]) => {
          switch (category) {
            case 'vendor':
              return values.some((value) => {
                if (value === 'red-hat') return item.vendor.includes('Red Hat');
                if (value === 'community') return item.vendor.includes('Community');
                return item.vendor === value;
              });
            case 'badge':
              return values.some((value) => item.badge.toLowerCase() === value);
            case 'featured':
              return values.some((value) => {
                if (value === 'featured') return item.featured === true;
                if (value === 'not-featured') return item.featured === false;
                return false;
              });
            default:
              return false;
          }
        });

        if (!matchesFilters) return false;
      }
      return true;
    });
  };

  const filteredItems = getFilteredItems();
  const paginatedItems = filteredItems.slice((currentPage - 1) * perPage, currentPage * perPage);

  // Check if we should show empty state
  const showEmptyState = filteredItems.length === 0;

  return (
    <Page masthead={<Masthead></Masthead>}>
      <PageSection>
        <Toolbar>
          <ToolbarContent>
            <ToolbarGroup variant="filter-group">
              <ToolbarItem>
                <SearchInput
                  placeholder="Search catalog items..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  onClear={() => setSearchValue('')}
                />
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarGroup variant="action-group">
              <ToolbarItem>
                <Button variant={ButtonVariant.primary}>Primary action</Button>
              </ToolbarItem>
              <ToolbarItem>
                <Button variant={ButtonVariant.secondary}>Secondary action</Button>
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarGroup variant="pagination" align={{ default: 'alignEnd' }}>
              <ToolbarItem>
                <Pagination
                  itemCount={filteredItems.length}
                  page={currentPage}
                  perPage={perPage}
                  onSetPage={(_, page) => setCurrentPage(page)}
                  onPerPageSelect={(_, perPage) => setPerPage(perPage)}
                  isCompact
                />
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
        <Divider />
        <Drawer isExpanded={isDrawerExpanded} isInline>
          <DrawerContent
            panelContent={
              <DrawerPanelContent widths={{ default: 'width_33' }}>
                <DrawerHead>
                  <Stack hasGutter>
                    <Title headingLevel="h2" size="lg">
                      {selectedItem?.title || 'Catalog Item Details'}
                    </Title>
                    <p>{selectedItem?.description || 'Select a catalog item to view details'}</p>
                  </Stack>
                  <DrawerActions>
                    <DrawerCloseButton onClick={handleDrawerClose} />
                  </DrawerActions>
                </DrawerHead>
                <DrawerPanelBody>
                  {selectedItem && (
                    <PropertiesSidePanel>
                      <PropertyItem label="Provider" value={selectedItem.vendor} />
                      <PropertyItem
                        label="Status"
                        value={
                          <>
                            <Icon status="success">
                              <OutlinedCheckCircleIcon />
                            </Icon>
                            Enabled
                          </>
                        }
                      />
                      <PropertyItem label="Type" value={selectedItem.badge} />
                      <PropertyItem label="Category" value="Red Hat Products" />
                      <PropertyItem label="Version" value={selectedItem.version || 'Latest'} />
                      <PropertyItem label="Last Updated" value={selectedItem.lastUpdated || '2024-01-15'} />
                    </PropertiesSidePanel>
                  )}
                </DrawerPanelBody>
              </DrawerPanelContent>
            }
          >
            <DrawerContentBody>
              <PageSection>
                <Split hasGutter>
                  <SplitItem isFilled={false} style={{ minWidth: '200px' }}>
                    <VerticalTabs id="catalog-tabs" activeTab={true}>
                      <VerticalTabsTab
                        id="all"
                        title="All Items"
                        active={activeTab === 'all'}
                        onActivate={() => handleTabActivate('all')}
                      />
                      <VerticalTabsTab
                        id="platform"
                        title="Platform"
                        active={activeTab === 'platform'}
                        onActivate={() => handleTabActivate('platform')}
                      />
                      <VerticalTabsTab
                        id="applications"
                        title="Applications"
                        active={activeTab === 'applications'}
                        onActivate={() => handleTabActivate('applications')}
                      />
                      <VerticalTabsTab
                        id="operators"
                        title="Operators"
                        active={activeTab === 'operators'}
                        onActivate={() => handleTabActivate('operators')}
                      />
                      <VerticalTabsTab
                        id="automation"
                        title="Automation"
                        active={activeTab === 'automation'}
                        onActivate={() => handleTabActivate('automation')}
                      />
                      <VerticalTabsTab
                        id="security"
                        title="Security"
                        active={activeTab === 'security'}
                        onActivate={() => handleTabActivate('security')}
                      />
                    </VerticalTabs>
                    <FilterSidePanel>
                      <Stack hasGutter>
                        {filterCategories.map((category) => (
                          <StackItem key={category.id}>
                            <FilterSidePanelCategory title={category.title}>
                              {category.items.map((item) => (
                                <FilterSidePanelCategoryItem
                                  key={item.id}
                                  checked={selectedFilters.includes(`${category.id}:${item.id}`)}
                                  onClick={() =>
                                    handleFilterChange(
                                      `${category.id}:${item.id}`,
                                      !selectedFilters.includes(`${category.id}:${item.id}`)
                                    )
                                  }
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
                    {showEmptyState ? (
                      <EmptyState 
                        titleText="No results found" 
                        headingLevel="h4" 
                        icon={SearchIcon}
                      >
                        <EmptyStateBody>
                          No catalog items match your current search criteria or selected filters.
                          <br />
                          Try adjusting your search terms or clearing some filters.
                        </EmptyStateBody>
                        <EmptyStateFooter>
                          <EmptyStateActions>
                            <Button
                              variant={ButtonVariant.primary}
                              onClick={() => {
                                setSearchValue('');
                                setSelectedFilters([]);
                                setCurrentPage(1);
                              }}
                            >
                              Clear all filters
                            </Button>
                          </EmptyStateActions>
                        </EmptyStateFooter>
                      </EmptyState>
                    ) : (
                      <Grid hasGutter>
                        {paginatedItems.map((item) => (
                          <GridItem key={item.id} span={4}>
                            {renderCatalogTile(item)}
                          </GridItem>
                        ))}
                      </Grid>
                    )}
                  </SplitItem>
                </Split>
              </PageSection>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </PageSection>
    </Page>
  );
};

export default CatalogViewDemo;
```
