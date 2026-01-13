import type { PiletApi } from '@proj/shell';
import { AgGridPage } from './pages/AgGridPage';

export function setup(app: PiletApi) {
  app.registerMenu(() => (
    <a href="/mfe2" className="nav-link">
      Data Grid
    </a>
  ));

  app.registerPage('/mfe2', AgGridPage);
}
