import { Container, Tabs } from '@mantine/core'
import { useState } from 'react'
import styles from './main.module.scss'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router'

export const Main = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<string | null>('first')

  return (
    <Container className={styles.main}>
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        variant={'pills'}
        className={styles.tabs}
      >
        <Tabs.List>
          <Tabs.Tab value="first" onClick={() => navigate('/catalog')}>
            Товары
          </Tabs.Tab>
          <Tabs.Tab value="second" onClick={() => navigate('/favorite')}>
            Избранное
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Outlet />
    </Container>
  )
}
