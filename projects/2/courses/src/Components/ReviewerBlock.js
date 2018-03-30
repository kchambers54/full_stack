import React, {Component} from 'react';

import {Modal, Input, ModalHeader, ModalFooter, ModalBody, Button, Form, FormGroup, Label} from 'reactstrap'

class ReviewerBlock extends Component {
    // props are essentially the arguments passed in when 
    // CourseReturn is called.
    // State is more so a collection of local variables.
    constructor(props){
        super(props);
        this.onReviewToggle = this.onReviewToggle.bind(this);
        this.onReviewSubmit = this.onReviewSubmit.bind(this);
        this.onReviewChange = this.onReviewChange.bind(this);
        this.onStarsChange = this.onStarsChange.bind(this);
        this.state = {
            reviewText: '',
            reviewStars: 0
        }
    }

    postReview(data) {
        const url = 'https://www.eg.bucknell.edu/~amm042/service/r/' + this.props.course._id;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }).then(res => res.json())
        .catch(error => console.error('ERROR: ', error))
        .then(response => console.log('Success: ', response,));
    }

    sendReview() {
        if (this.state.reviewText !== null) {
            if (this.state.reviewText.length > 9) {
                let data = {
                    Stars: this.state.reviewStars,
                    Comment: this.state.reviewText
                };
                console.log('Review being sent:');
                this.postReview(data);
            }
            else {
                console.log('Review too short!');
            }
        }
        else {
            console.log('NULL Review!');
        }
    }

    onReviewToggle() {
        this.props.toggle();
        this.setState({
            reviewText: '',
            reviewStars: 0
        });
    }

    onReviewChange(event) {
        this.setState({ reviewText: event.target.value });
    }

    onStarsChange(event) {
        this.setState({ reviewStars: event.target.value });
    }

    onReviewSubmit(event) {
        event.preventDefault();
        this.props.toggle();
        this.sendReview();
    }

    render(){
        let buttonColor = '';
        if (this.state.reviewText.length > 10) {
            buttonColor = 'primary';
        }
        else {
            buttonColor = 'secondary';
        }

        let currCourse = null;
        if (this.props.course) {
            currCourse = this.props.course;
            
            return(
                <div>
                    <Modal isOpen={this.props.isOpen} toggle={this.onReviewToggle}>
                        <ModalHeader toggle={this.onReviewToggle}>
                            Write a review for: {currCourse.Title}
                        </ModalHeader>
                        <ModalBody>
                            
                        <Form onSubmit={this.onReviewSubmit}>
                            <FormGroup>
                            <Label for="exampleSelect">Stars:</Label>
                            <Input type="select" name="select" id="exampleSelect" 
                                onChange={this.onStarsChange} value={this.state.reviewStars}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                            </FormGroup>
                            <FormGroup>
                            <Label for="exampleText">Enter review here (Please include your professor!):</Label>
                            <Input type="text" name="text" id="exampleText" 
                                onChange={this.onReviewChange} value={this.state.reviewText} />
                            </FormGroup>
                            <Button color={buttonColor} onClick={this.onReviewSubmit}>Submit</Button>
                        </Form>

                        </ModalBody>
                        <ModalFooter>
                            Footer
                        </ModalFooter>
                    </Modal>
                </div>
            );
        }
        // else is a dummy return for when there is
        // no course available for the Modal.
        else {
            return(
                <div/>
            );
        } 
    }
}

export default ReviewerBlock