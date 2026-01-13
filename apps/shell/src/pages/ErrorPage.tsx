import { Alert, Title, Text, Button, Stack } from '@mantine/core';
import styles from './ErrorPage.module.css';

interface ErrorPageProps {
  type: string;
  error: Error;
  children?: React.ReactNode;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ type, error }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.errorPage}>
      <Stack align="center" gap="md">
        <Title order={2} c="red">
          Something went wrong
        </Title>
        <Alert color="red" title={`Error Type: ${type}`} className={styles.alert}>
          <Text size="sm">{error.message}</Text>
        </Alert>
        <Button onClick={handleReload} variant="outline" color="blue">
          Reload Page
        </Button>
      </Stack>
    </div>
  );
};
