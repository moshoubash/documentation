import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Introduction from './pages/Introduction'
import Installation from './pages/Installation'
import AuthenticationFlow from './pages/AuthenticationFlow'
import BookingFlow from './pages/BookingFlow'
import Authentication from './pages/Authentication'
import PublicPages from './pages/PublicPages'
import AdminPages from './pages/AdminPages'
import Database from './pages/Database'
import AuthenticationProcess from './pages/AuthenticationProcess'
import Authorization from './pages/Authorization'
import Models from './pages/Models'
import Routing from './pages/Routing'
import Middlewares from './pages/Middlewares'
import Controllers from './pages/Controllers'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4 py-4">
          <Routes>
            <Route path="/" element={<Navigate to="/introduction" />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/authentication" element={<AuthenticationFlow />} />
            <Route path="/booking" element={<BookingFlow />} />
            <Route path="/authentication-pages" element={<Authentication />} />
            <Route path="/public-pages" element={<PublicPages />} />
            <Route path="/admin-pages" element={<AdminPages />} />
            <Route path="/database" element={<Database />} />
            <Route path="/authentication-process" element={<AuthenticationProcess />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/models" element={<Models />} />
            <Route path="/routing" element={<Routing />} />
            <Route path="/middlewares" element={<Middlewares />} />
            <Route path="/controllers" element={<Controllers />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
