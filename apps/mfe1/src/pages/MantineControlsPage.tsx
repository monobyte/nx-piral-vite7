import { useState } from 'react';
import {
  Card,
  Title,
  Text,
  TextInput,
  Button,
  Select,
  Stack,
  Group,
  Checkbox,
  Switch,
  Slider,
  Badge,
  Notification,
  Paper,
  Divider,
} from '@mantine/core';
import { formatMessage, capitalize } from '@proj/utils';
import styles from './MantineControlsPage.module.css';

interface FormData {
  name: string;
  email: string;
  role: string | null;
  notifications: boolean;
  darkMode: boolean;
  volume: number;
}

export const MantineControlsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: null,
    notifications: true,
    darkMode: false,
    volume: 50,
  });
  const [submitted, setSubmitted] = useState(false);

  const roleOptions = [
    { value: 'admin', label: 'Administrator' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Viewer' },
    { value: 'guest', label: 'Guest' },
  ];

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      role: null,
      notifications: true,
      darkMode: false,
      volume: 50,
    });
    setSubmitted(false);
  };

  return (
    <div className={styles.page}>
      <Title order={1} className={styles.title}>
        {formatMessage('Mantine Controls Demo')}
      </Title>
      <Text c="dimmed" size="lg" className={styles.subtitle}>
        {capitalize('interactive form components from mantine ui v7')}
      </Text>

      {submitted && (
        <Notification
          title="Form Submitted!"
          color="green"
          className={styles.notification}
          onClose={() => setSubmitted(false)}
        >
          Your form has been successfully submitted.
        </Notification>
      )}

      <Card shadow="sm" padding="xl" radius="md" withBorder className={styles.card}>
        <Stack gap="lg">
          <Title order={3}>User Information</Title>
          <Divider />

          <TextInput
            label="Full Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className={styles.input}
          />

          <TextInput
            label="Email Address"
            placeholder="your@email.com"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className={styles.input}
          />

          <Select
            label="Role"
            placeholder="Select your role"
            data={roleOptions}
            value={formData.role}
            onChange={(value) => setFormData({ ...formData, role: value })}
            clearable
            searchable
            className={styles.select}
          />

          <Divider label="Preferences" labelPosition="center" />

          <Group justify="space-between" className={styles.switchGroup}>
            <div>
              <Text fw={500}>Email Notifications</Text>
              <Text size="sm" c="dimmed">
                Receive updates via email
              </Text>
            </div>
            <Switch
              checked={formData.notifications}
              onChange={(e) =>
                setFormData({ ...formData, notifications: e.currentTarget.checked })
              }
            />
          </Group>

          <Group justify="space-between" className={styles.switchGroup}>
            <div>
              <Text fw={500}>Dark Mode</Text>
              <Text size="sm" c="dimmed">
                Enable dark theme
              </Text>
            </div>
            <Switch
              checked={formData.darkMode}
              onChange={(e) =>
                setFormData({ ...formData, darkMode: e.currentTarget.checked })
              }
            />
          </Group>

          <div className={styles.sliderContainer}>
            <Text fw={500}>Volume Level</Text>
            <Slider
              value={formData.volume}
              onChange={(value) => setFormData({ ...formData, volume: value })}
              marks={[
                { value: 0, label: '0%' },
                { value: 50, label: '50%' },
                { value: 100, label: '100%' },
              ]}
              className={styles.slider}
            />
          </div>

          <Checkbox
            label="I agree to the terms and conditions"
            className={styles.checkbox}
          />

          <Divider />

          <Group justify="space-between">
            <Button variant="outline" color="gray" onClick={handleReset}>
              Reset Form
            </Button>
            <Button onClick={handleSubmit}>Submit Form</Button>
          </Group>
        </Stack>
      </Card>

      <Paper shadow="xs" padding="md" radius="md" className={styles.preview}>
        <Title order={4} mb="md">
          Current Form State
        </Title>
        <Group gap="xs">
          <Badge color="blue">Name: {formData.name || 'Not set'}</Badge>
          <Badge color="cyan">Email: {formData.email || 'Not set'}</Badge>
          <Badge color="violet">Role: {formData.role || 'Not selected'}</Badge>
          <Badge color={formData.notifications ? 'green' : 'gray'}>
            Notifications: {formData.notifications ? 'On' : 'Off'}
          </Badge>
          <Badge color={formData.darkMode ? 'dark' : 'gray'}>
            Dark Mode: {formData.darkMode ? 'On' : 'Off'}
          </Badge>
          <Badge color="orange">Volume: {formData.volume}%</Badge>
        </Group>
      </Paper>
    </div>
  );
};
