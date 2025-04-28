import { Card, Image, Text, Button, Group } from '@mantine/core'
import styles from './card.module.scss'

export const CardItem = () => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={styles.card}
    >
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Отпуск</Text>
      </Group>

      <Text size="sm" c="dimmed">
        Наконец-то перестать работать и полететь отдыхать
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Добавить в избранное
      </Button>
    </Card>
  )
}
