import React from "react"
import {Container, CardGroup, Card, Row, Col } from "react-bootstrap"
function MovieCard({movie}){
    const styles = {
        card: {
          borderRadius: 55,
          padding: '3rem'
        },
        cardImage: {
          objectFit: 'cover',
          borderRadius: 55
        }
    }
    return (
        <Container fluid>
            <CardGroup className="m-5 d-block" >
                <Card className="m-5 border-0 shadow" style={styles.card}>
                    <Row>
                        <Col>
                            <Card.Img 
                                style={styles.cardImage}
                                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}/>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title  className="text-danger fs-1" as="h1">{movie.title}</Card.Title><br/>
                                <Card.Subtitle as="h5">RELEASEd DATE: {movie.release_date}</Card.Subtitle><br/>
                                <Card.Subtitle as="h5">RATING: {movie.vote_count}</Card.Subtitle><br/>
                                <Card.Text className="p-3">{movie.overview}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
        </CardGroup>
      </Container>
    )
}
export default MovieCard
