import React from 'react'

import {Card, CardImg, CardBody, CardSubtitle, CardTitle, CardText, Button} from 'reactstrap'

class Course extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentWillReceiveProps(newProps) {

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
                        <CardText>{'Section: ' + course.Section}</CardText>
                    </CardBody>
                    <Button>Reviews</Button>
                </Card>

            </div>
        );
    }
}

export default Course