import React from 'react'
//import {Row, Col} from 'reactstrap'

import Course from './Course'


class CoursesList extends React.Component{
    constructor(props){
        super(props);
    }

    getCoursesContent() {
        if (this.props.courseInfo !== null) {
            if (this.props.courseInfo === 'invalid') {
                return (
                //    <Row key={'invalid'}>
                        <div key='none'>Enter something to search.</div>
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
                let coursesList = [];
                // let coursesListKey = '';
                for (let i=0; i < this.props.courseInfo.length; i++) {
                    const course = this.props.courseInfo[i];
                    // coursesListKey += course.Course;
                    coursesList.push(
                        <Course course={course} key={course.Course + ' ' + i}/>
                        
                    );
                }
                return coursesList;
            }
        }
        return null;
    }


    render() {
        const coursesContent = this.getCoursesContent();
        return(
            <div>
                {coursesContent}
            </div>
        );
    }
}

export default CoursesList