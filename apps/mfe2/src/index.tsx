import type { PiletApi } from '@proj/shell';
import { NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AgGridPage } from './pages/AgGridPage';

export function setup(app: PiletApi) {
  // Register menu item via extension slot
  app.registerExtension('menu-items', () => (
    <NavLink
      component={Link}
      to="/mfe2"
      label="Data Grid"
    />
  ));

  app.registerPage('/mfe2', AgGridPage);
}
