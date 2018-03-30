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
                        <div key='invalid'>Enter something to search.</div>
                );
            }
            else if (this.props.courseInfo === 'none') {
                return (
                        <div key='none'>No courses found!</div>
                );
            }
            else {
                //Array of Course components.
                let coursesList = [];
                let currCourseTitle = '';
                //Object containing all returned course info
                //  organized by title.
                let courses = {
                    courseNames: [],
                    courseObjects: {}
                };
                /*
                OBJECT FORMAT:
                courses = {
                    courseNames: ['Calculus I', 'Calculus 2', 'Calculus 3'],
                    courseObjects: {
                        'Calculus 1': [
                            {Section 1},
                            {Section 2}
                        ],
                        'Calculus 2': [
                            {Section 1},
                            {Section 2}
                        ],
                        'Calculus 3': [
                            {Section 1},
                            {Section 2}
                        ] 
                    }
                }
                */
                // loop through fetched (courses) and get list of course names.
                for (let i in this.props.courseInfo) {
                    // console.log('i: ' + i);
                    // console.log(this.props.courseInfo[i]);
                    currCourseTitle = this.props.courseInfo[i].Title;
                    
                    //Add new course to object
                    if (!courses.courseNames.includes(currCourseTitle)){
                        courses.courseNames += currCourseTitle;
                        courses.courseObjects[currCourseTitle] = [];
                        courses.courseObjects[currCourseTitle].push(this.props.courseInfo[i]);
                    }
                    // else {
                    //     courses.courseObjects[currCourseTitle].push(this.props.courseInfo[i]);
                    // }
                    // console.log(courses.courseObjects[currCourseTitle][0]);
                    // console.log('X');
                    // console.log(courses.courseObjects);
                }

                //Build array of Course components from courses object
                for (let j in courses.courseObjects) {
                    if (courses.courseObjects.hasOwnProperty(j)) {
                        // console.log(j);
                        coursesList.push(
                            <Course courseTitle={j} sections={courses.courseObjects[j]} onButtonClick={this.onReviewToggle} key={j}/>
                        );
                    }
                }
                return coursesList;
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