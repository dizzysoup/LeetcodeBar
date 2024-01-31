import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import { ChakraProvider  } from '@chakra-ui/react';
import Header from './Header';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

function App() {
  return (

    <ChakraProvider >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={ <LoginPage/>} />
          <Route path="/SignUp" element={ <SignUpPage/> }/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider >
   
  );
}

export default App;
