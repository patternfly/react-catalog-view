import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-check-circle-icon';
import { CatalogTile } from './CatalogTile';
import { CatalogTileBadge } from './CatalogTileBadge';

test('CatalogTile renders properly', () => {
  const result = render(
    <div>
      <CatalogTile
        id="single-badge-test"
        featured
        badges={[
          <CatalogTileBadge title="Certified" id="certified" key="1">
            <CogIcon />
          </CatalogTileBadge>,
          <CatalogTileBadge id="no-title" key="2">
            <CogIcon />
          </CatalogTileBadge>
        ]}
        title="Patternfly"
        vendor={
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        }
        description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
      />
      <CatalogTile
        id="multi-badge-test"
        badges={[
          <CatalogTileBadge title="Certified" id="certified" key="1">
            <CogIcon />
          </CatalogTileBadge>,
          <CatalogTileBadge title="USDA Approved" id="approved" key="2">
            <OutlinedCheckCircleIcon />
          </CatalogTileBadge>
        ]}
        title="GitHub Desktop"
        vendor="provided by GitHub"
        description="Simple collaboration from your desktop."
      />
      <CatalogTile
        id="test-iconClass"
        iconClass="fa fa-codepen"
        badges={[
          <CatalogTileBadge title="USDA Approved" id="approved" key="1">
            <OutlinedCheckCircleIcon />
          </CatalogTileBadge>
        ]}
        title="CodePen"
        vendor="provided by CodePen"
        description="An online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets."
      />
      <CatalogTile
        id="tile-footer-test"
        featured
        href="https://github.com/patternfly/patternfly-react"
        badges={[
          <CatalogTileBadge title="Certified" id="certified" key="1">
            <CogIcon />
          </CatalogTileBadge>
        ]}
        title="Patternfly-React"
        vendor="provided by Red Hat"
        description="1234567890123"
        footer={
          <span>
            <OutlinedCheckCircleIcon /> Enabled
          </span>
        }
      />
      <CatalogTile
        id="custom-icon-svg-test"
        featured
        title="Custom SVG"
        href="https://github.com/patternfly/patternfly-react"
        icon={
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
          </svg>
        }
      />
    </div>
  );
  expect(result.container).toMatchSnapshot();
});

test('CatalogTile href renders properly', () => {
  const { asFragment } = render(
    <CatalogTile
      id="test-href"
      href="http://patternfly.org"
      featured
      title="Patternfly"
      vendor="Provided by Red Hat"
      description="1234567890123"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('CatalogTile onClick behaves properly', async () => {
  const onClickMock = jest.fn();
  const user = userEvent.setup();

  render(
    <CatalogTile
      id="test-on-click"
      className="test-click-class"
      onClick={onClickMock}
      featured
      title="Patternfly"
      vendor="Provided by Red Hat"
      description="1234567890123"
    />
  );

  // await user.click(screen.getByText('Patternfly'));
  await user.click(screen.getByRole('button'));
  expect(onClickMock).toHaveBeenCalled();
});
