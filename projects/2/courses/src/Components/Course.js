import React from 'react'

import ReviewsList from './ReviewsList'
import {Card, CardBody, CardSubtitle, CardTitle, CardText, Button} from 'reactstrap'

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        this.props.onButtonClick(this.props.sections[0]);
    }

    render() {
        const sections = this.props.sections;
        const mainSection = sections[0];
        const courseTitle = this.props.courseTitle;
        // console.log('From card: ' + courseTitle);
        // console.log(JSON.stringify(sections[0], null, 4));

        return (
            <div>
                
                <Card className='mt-2 mb-2'>
                    <CardBody>
                        <CardTitle>{courseTitle}</CardTitle>
                        <CardSubtitle>
                            {mainSection.Department + ' ' + mainSection.CrseNum}
                        </CardSubtitle>
                        <CardText>Reviews:</CardText>
                        <ReviewsList course={mainSection}/>
                    </CardBody>
                    <Button color='primary' onClick={this.onButtonClick}>Write a Review</Button>
                </Card>

            </div>
        );
    }
}

export default Course