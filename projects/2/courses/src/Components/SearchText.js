import React from 'react';
import {Form, Label, Input, Button} from 'reactstrap';
import SearchMethod from './SearchMethod'
import CoursesList from './CoursesList'

class SearchText extends SearchMethod {
    // props are essentially the arguments passed in when 
    // CourseReturn is called.
    // State is more so a collection of local variables.
    constructor(props){
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
        this.onTextSubmit = this.onTextSubmit.bind(this);
        this.state = {
            searchText: '',
            courseInfo: null,
            prevSearch: ''
        }
    };

    onTextChange(event) {
        this.setState({ searchText: event.target.value });
    }
    
    onTextSubmit(event) {
        event.preventDefault();
        if (this.state.searchText !== '') {
            if (this.state.searchText !== this.state.prevSearch) {
                console.log('Entered: ' + this.state.searchText);
                this.setState({ prevSearch: this.state.searchText });
                this.loadCoursesBySearch(this.state.searchText);
            }
        } else {
            if (this.state.courseInfo === null) {
                console.log('textSearch is Empty!');
                this.setState({ courseInfo: "invalid" });
            }
        }
    }
    
    loadCoursesBySearch(searchText) {
        let text = "";
        //Convert all spaces and quotes to http format.
        text += encodeURI(searchText);
        console.log('Encoded URL: ' + text);

        const query = `text=${searchText}`;
        this.searchCourses(query)
            .then((data) => {
                if (data.message.length > 0) {
                    this.setState({ courseInfo: data.message });
                } else {
                    console.log('courseInfo = None');
                    this.setState({ courseInfo: "none" });
                }
            });
    }
    
    render() {
        return (
          <div className="p-4">
            <Form className="base_lookup-form" onSubmit={this.onTextSubmit}>
              <Label for="text_entry" className="text-center">
                Search Course Titles and Instructors: 
              </Label>
              <Input id="text_entry" type='text' onChange={this.onTextChange}
                value={this.state.searchText}>
                {/*Leave Text Box Empty*/}
              </Input>
              <Button
                onClick={this.onTextSubmit}>
                Search
              </Button>
            </Form>
            <CoursesList courseInfo={this.state.courseInfo}/>
          </div>
        );
    }
}

export default SearchText