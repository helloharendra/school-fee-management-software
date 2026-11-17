import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Collect from './pages/Collect'
import Defaulters from './pages/Defaulters'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="collect" element={<Collect />} />
        <Route path="defaulters" element={<Defaulters />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
