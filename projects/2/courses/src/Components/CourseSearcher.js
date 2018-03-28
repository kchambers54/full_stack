import React, {Component} from 'react';

import ReviewerBlock from './ReviewerBlock'

class CourseSearcher extends Component {
    // props are essentially the arguments passed in when 
    // CourseReturn is called.
    // State is more so a collection of local variables.
    constructor(props){
        super(props)
        this.state = {
            searchText: null,
            courseData: null,
        }
    };

    onDepartmentChange(event) {
        this.setState({ department: event.target.value });
    }
    
    onDepartmentSubmit(event) {
        event.preventDefault();
        if (this.state.department) {
            if (this.state.department !== this.state.lastSearch) {
                this.setState({ lastSearch: this.state.department });
                this.loadCoursesBySearching(this.state.department);
            }
        } else {
            if (this.state.courseData === null) {
                this.setState({ courseData: "invalid" });
            }
        }
    }
    
    loadCoursesBySearching(department) {
        let dept = "";
        let i = 0;
        while (department.charAt(i).match("[a-zA-Z0-9]")) {
            dept += department.charAt(i);
            i++;
        }
        const query = `Department=${dept.toUpperCase()}`;
        this.getCoursesByQuery(query)
            .then((data) => {
                if (data.message.length > 0) {
                    this.setState({ courseData: data.message });
                } else {
                    this.setState({ courseData: "none" });
                }
            });
        }
    
    render() {
        const buttonColor = this.state.department ? "primary" : "secondary";
        const departments = Constants.DEPARTMENTS.map((dept, i) => <option key={i}>{dept}</option>);
        return (
          <div className="p-4">
            <Form className="base_lookup-form" onSubmit={this.onDepartmentSubmit} inline>
              <Label for="dept_entry" className="text-center">Enter a department:</Label>
              <Input id="dept_entry" className="ml-sm-3 mt-2 mt-sm-0" type="select"
                value={this.state.department} onChange={this.onDepartmentChange}>
                {departments}
              </Input>
              <Button
                className="ml-sm-3 mt-3 mt-sm-0" color={buttonColor}
                onClick={this.onDepartmentSubmit}>
                Find Courses
              </Button>
            </Form>
            <CourseList courseData={this.state.courseData}/>
          </div>
        );
    }
}

export default CourseSearcher