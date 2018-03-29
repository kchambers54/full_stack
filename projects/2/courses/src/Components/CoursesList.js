import React from 'react'
//import {Row, Col} from 'reactstrap'

import Course from './Course'
import ReviewerBlock from './ReviewerBlock'


class CoursesList extends React.Component{
    constructor(props){
        super(props);
        this.onReviewToggle = this.onReviewToggle.bind(this);
        this.state = {
            reviewOpen: false,
            selectedReview: null
        }
    }

    getCoursesContent() {
        if (this.props.courseInfo !== null) {
            if (this.props.courseInfo === 'invalid') {
                return (
                //    <Row key={'invalid'}>
                        <div key='invalid'>Enter something to search.</div>
                //    </Row>
                );
            }
            else if (this.props.courseInfo === 'none') {
                return (
                    // <Row key={'none'}>
                        <div key='none'>No courses found!</div>
                    // </Row>
                );
            }
            else {
                let fullCoursesList = [];
                let coursesListNoRepeats = [];
                let q;
                let courseNames = [];
                // loop through fetch results.
                for (let i=0; i < this.props.courseInfo.length; i++) {
                    const course = this.props.courseInfo[i];
                    console.log('Course: ' + course.Course); 
                    
                    fullCoursesList.push(
                        <Course course={course} onButtonClick={this.onReviewToggle} key={course.Course + ' ' + i}/>
                    );
                    //Get list of course titles, eliminating multiple sections.
                    if (!courseNames.includes(course.Title)) {
                        coursesListNoRepeats.push(
                            <Course course={course} onButtonClick={this.onReviewToggle} key={course.Course + ' ' + i}/>
                        );
                        courseNames += course.Title;
                    }
                }

                return coursesListNoRepeats;
            }
        }
        return null;
    }

    onReviewToggle(course) {
        this.setState({
            reviewOpen: !this.state.reviewOpen,
            selectedReview: course
        });
    }

    render() {
        const coursesContent = this.getCoursesContent();
        return(
            <div>
                {coursesContent}

                <ReviewerBlock
                    course = {this.state.selectedReview}
                    isOpen = {this.state.reviewOpen}
                    toggle = {this.onReviewToggle}
                />
            </div>
        );
    }
}

export default CoursesList