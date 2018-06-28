import React from 'react'

class SearchMethod extends React.Component{
    searchCourses(query) {
        console.log('SEARCHING COURSES: ' + query);
        return fetch('https://www.eg.bucknell.edu/~amm042/service/q?' + query, {
            credentials: 'include'
        })
        .then((response) => response.json());
        
    }

    render() {
        return(
            <div/>
        );
    }
}

export default SearchMethod;