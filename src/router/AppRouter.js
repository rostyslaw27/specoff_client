import { Navigate, Route, Routes } from 'react-router-dom'
import Client from '../pages/Client'
import Clients from '../pages/Clients'
import Main from '../pages/Main'
import Solutions from '../pages/Solutions'

const AppRouter = () => {
  const ClientsRoute = () => {
    return (
      <Routes>
        <Route element={<Clients />} index />
        <Route element={<Client />} path=':id'/>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route element={<Main />} path="/" />
      <Route element={<ClientsRoute />} path="/clients/*" />
      <Route element={<Solutions />} path="/solutions" />
      <Route element={<Navigate to="/clients" />} path="*" />
    </Routes>
  )
}

export default AppRouter
