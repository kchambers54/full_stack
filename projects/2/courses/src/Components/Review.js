import React from 'react'

class Review extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>{this.props.review.Comment}</div>
        );
    }
}

export default Review