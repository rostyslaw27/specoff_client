import AppContent from './containers/app-content/AppContent'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from './styles/app-theme/custom-mui.styles'
import { ModalProvider } from './context/modal-context'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App
