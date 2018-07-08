import React, { Component } from 'react';
import { Card, CardMedia, CardContent, Button } from '@material-ui/core';
import { Add } from "@material-ui/icons";
import './FeaturedGridCard.css';

export default class FeaturedGridCard extends Component {
    render() {
        return (
            <Card>
                <CardMedia image={this.props.image} style={{ height: this.props.height, position: 'relative' }}>
                    <CardContent className="feature-content">
                        <h1 style={{ fontSize: this.props.height / 12, backgroundColor: 'var(--white)', padding: 5 }}>Lorem ipsum dolor sit amet.</h1>
                        <Button color="primary" variant="fab" onClick={this.props.clicked} >
                            <Add />
                        </Button>
                    </CardContent>
                </CardMedia>
            </Card >
        );
    }
}