import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import '../styles/Pizza.css'

const Pizza = () => {
  const [onePizza, setOnePizza] = useState([])
  const { id } = useParams()
  const url = `http://localhost:5000/api/pizzas/${id}`
  const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(onePizza.price)

  const getOnePizza = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setOnePizza(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getOnePizza()
  }, [id])
  return (
    <Container className='my-3'>
      <Row className='justify-content-center'>
        <Col md={8}>
          <Card className='shadow-sm'>
            <Row noGutters>
              <Col md={4}>
                <Card.Img className='img-pizza' variant='top' src={onePizza.img} alt={onePizza.name} />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{onePizza.name}</Card.Title>
                  <Card.Text>{onePizza.desc}</Card.Text>
                  <Card.Text>
                    <strong>Ingredientes:</strong> {onePizza.ingredients}
                  </Card.Text>
                  <Card.Text className='fs-3'>{formattedPrice}</Card.Text>
                  <Button variant='success'>Comprar</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Pizza
