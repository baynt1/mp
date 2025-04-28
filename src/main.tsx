import { createRoot } from 'react-dom/client'
import { store } from '@context/store.ts'
import RouterProvider from '@context/router.tsx'
import { Provider } from 'react-redux'
import { createTheme, MantineProvider } from '@mantine/core'
import '@styles/global.scss'
import '@mantine/core/styles.css'

const theme = createTheme({})

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  </MantineProvider>,
)
