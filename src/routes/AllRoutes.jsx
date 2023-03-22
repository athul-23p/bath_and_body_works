import { Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import Billing from '../pages/Billing';
import Home from '../pages/Home';
import Shipping from '../pages/Shipping';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import PrivateRoute from './PrivateRoute';
import PaymentPage from '../pages/PaymentPage';
import { Center, Heading } from '@chakra-ui/react';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/checkout/shipping"
        element={
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout/billing"
        element={
          <PrivateRoute>
            <Billing />
          </PrivateRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        }
      />

      
      <Route path="/products/" element={<Products />} />
      <Route path="/products/:section" element={<Products />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route
        path="/shopping-cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <Center>
            <Heading>404 Resource Not Found</Heading>
          </Center>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
