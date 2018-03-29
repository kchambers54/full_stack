import React from 'react'

import ReviewsList from './ReviewsList'
import {Card, CardBody, CardSubtitle, CardTitle, CardText, Button} from 'reactstrap'

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.state = {
            
        }
    }

    onButtonClick(){
        this.props.onButtonClick(this.props.course);
    }

    render() {
        const course = this.props.course;
        
        return (
            <div>
                
                <Card>
                    <CardBody>
                        <CardTitle>{course.Title}</CardTitle>
                        <CardSubtitle>
                            {course.Department + ' ' + course.CrseNum}
                        </CardSubtitle>
                        <CardText>Reviews:</CardText>
                        <ReviewsList course={course}/>
                    </CardBody>
                    <Button onClick={this.onButtonClick}>Reviews</Button>
                </Card>

            </div>
        );
    }
}

export default Course