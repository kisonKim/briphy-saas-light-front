import {Routes, Route} from 'react-router-dom';
import Login from 'containers/auth/login';

const routes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default routes;