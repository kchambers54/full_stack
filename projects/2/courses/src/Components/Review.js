import React from 'react'
import {Card, CardBody, CardSubtitle, CardTitle, CardText} from 'reactstrap'


class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: 'No date found',
            stars: 6,
            comment: 'No review found...',
            num: 0
        }
    }
    
    componentWillMount(){
        this.setState({
            stars: parseInt(this.props.review.Stars, 10),
            date: this.props.review.Date.substring(0,10),
            comment: this.props.review.Comment,
            num: (this.props.num + 1)
        });
    }

    render() {
        return(
            <div>

                <Card>
                    <CardBody>
                        <CardTitle>{(this.state.num) + ': ' + this.state.date}</CardTitle>
                        <CardSubtitle>
                            {this.state.stars + ' stars'}
                        </CardSubtitle>
                        <CardText>{this.state.comment}</CardText>
                    </CardBody>
                </Card>

            </div>
        );
    }
}

export default Review