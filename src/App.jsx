import { Route, Routes } from 'react-router-dom';
import {
  Customers,
  Home,
  Dashboard,
  Product,
  Income,
  Promote,
  Help,
  NotFound,
} from './pages';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Customers />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="customers" element={<Customers />} />
          <Route path="income" element={<Income />} />
          <Route path="promote" element={<Promote />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
