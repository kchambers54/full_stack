import React, {Component} from 'react';


class CourseReturn extends Component {
    // props are essentially the arguments passed in when 
    // CourseReturn is called.
    // State is more so a collection of local variables.
    constructor(props){
        super(props)
        this.state = {courses: null}
    }

    render(){
        return(
            <p>Returning info for this department: {this.props.department}</p>
        );
    }
}

export default CourseReturn