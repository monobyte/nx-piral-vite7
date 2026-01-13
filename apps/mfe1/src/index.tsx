import type { PiletApi } from '@proj/shell';
import { NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MantineControlsPage } from './pages/MantineControlsPage';

export function setup(app: PiletApi) {
  // Register menu item via extension slot
  app.registerExtension('menu-items', () => (
    <NavLink
      component={Link}
      to="/mfe1"
      label="Mantine Controls"
    />
  ));

  app.registerPage('/mfe1', MantineControlsPage);
}
