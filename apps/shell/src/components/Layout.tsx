import { ComponentsState, ExtensionSlot, SwitchErrorInfo } from 'piral-core';
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Text,
  Container,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

export const Layout: ComponentsState['Layout'] = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={styles.header}>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text size="xl" fw={700} className={styles.logo}>
              Proj Monorepo
            </Text>
          </Group>
          <ExtensionSlot name="header-items" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" className={styles.navbar}>
        <NavLink
          component={Link}
          to="/"
          label="Dashboard"
          active={location.pathname === '/'}
          className={styles.navLink}
        />
        <ExtensionSlot name="menu-items" />
      </AppShell.Navbar>

      <AppShell.Main className={styles.main}>
        <Container size="xl" className={styles.container}>
          <SwitchErrorInfo>
            {children}
          </SwitchErrorInfo>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
