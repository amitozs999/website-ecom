import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col} from 'react-bootstrap'
import Message from '../components/Message'


const CartScreen = () => {
  

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
       
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        
      </Col>
     
     
    </Row>
  )
}

export default CartScreen
