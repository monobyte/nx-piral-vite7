import { Card, Title, Text, SimpleGrid, ThemeIcon, Group } from '@mantine/core';
import { formatMessage } from '@proj/utils';
import styles from './Dashboard.module.css';

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Title order={1} className={styles.title}>
        {formatMessage('Welcome to Proj Monorepo')}
      </Title>
      <Text c="dimmed" size="lg" className={styles.subtitle}>
        A production-ready Nx Package-Based Monorepo with Piral and Vite
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" className={styles.grid}>
        <Card shadow="sm" padding="lg" radius="md" withBorder className={styles.card}>
          <Group>
            <ThemeIcon size="lg" variant="light" color="blue">
              📦
            </ThemeIcon>
            <Title order={3}>Micro-Frontends</Title>
          </Group>
          <Text size="sm" c="dimmed" mt="md">
            Build independent, deployable frontend modules with Piral pilets.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder className={styles.card}>
          <Group>
            <ThemeIcon size="lg" variant="light" color="green">
              ⚡
            </ThemeIcon>
            <Title order={3}>Vite Powered</Title>
          </Group>
          <Text size="sm" c="dimmed" mt="md">
            Lightning-fast development with Vite 7 and piral-cli-vite7.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder className={styles.card}>
          <Group>
            <ThemeIcon size="lg" variant="light" color="violet">
              🎨
            </ThemeIcon>
            <Title order={3}>Mantine UI</Title>
          </Group>
          <Text size="sm" c="dimmed" mt="md">
            Beautiful, accessible components with Mantine v7.
          </Text>
        </Card>
      </SimpleGrid>
    </div>
  );
};
