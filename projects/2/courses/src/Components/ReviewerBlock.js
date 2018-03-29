import React, {Component} from 'react';

import {Modal, ModalHeader, ModalFooter, ModalBody, Button} from 'reactstrap'


class ReviewerBlock extends Component {
    // props are essentially the arguments passed in when 
    // CourseReturn is called.
    // State is more so a collection of local variables.
    constructor(props){
        super(props);
        this.onReviewToggle = this.onReviewToggle.bind(this);
    }

    onReviewToggle() {
        this.props.toggle();
    }

    render(){
        let currCourse = null;
        if (this.props.course) {
            currCourse = this.props.course;
            
            return(
                <div>
                    <Modal isOpen={this.props.isOpen} toggle={this.onReviewToggle}>
                        <ModalHeader toggle={this.onReviewToggle}>
                            {currCourse.Title}
                        </ModalHeader>
                        <ModalBody>
                            Body

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