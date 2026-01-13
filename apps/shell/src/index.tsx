import { createInstance, Piral } from 'piral-core';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { ErrorPage } from './pages/ErrorPage';
import { piletFeed } from './feed';

import '@mantine/core/styles.css';
import './styles/global.module.css';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
});

const instance = createInstance({
  state: {
    components: {
      Layout,
      ErrorInfo: ErrorPage,
    },
    routes: {
      '/': Dashboard,
    },
  },
  plugins: [],
  requestPilets() {
    return piletFeed();
  },
});

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(
    <MantineProvider theme={theme}>
      <Piral instance={instance} />
    </MantineProvider>
  );
}
