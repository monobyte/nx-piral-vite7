import type { PiletApi } from '@proj/shell';
import { MantineControlsPage } from './pages/MantineControlsPage';

export function setup(app: PiletApi) {
  app.registerMenu(() => (
    <a href="/mfe1" className="nav-link">
      Mantine Controls
    </a>
  ));

  app.registerPage('/mfe1', MantineControlsPage);
}
