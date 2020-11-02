//import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
function App() {
  return (
    <Router>
    
     <Header />

     <main className='py-3'>
       <Container>
       <Route path='/' component={HomeScreen} exact />
       <Route path='/product/:id' component={ProductScreen} exact />
       <Route path='/login' component={LoginScreen} />
       <Route path='/register' component={RegisterScreen} />
       <Route path='/cart' component={CartScreen} />

    </Container>
    </main>
    <Footer />

    </Router>
  );
}

export default App;
