import React from 'react'

import Review from './Review'

class ReviewsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: null,
            prevState: null
        }
    }

    fetchReviewsCall(query) {
        fetch('https://www.eg.bucknell.edu/~amm042/service/r/' + query)
        .then((response) => response.json())
        .then((data) => {
            if (data.message.length > 0) {
                this.setState({ reviews: data.message });
                // console.log(this.state.reviews);
            } else {
                // console.log('courseInfo = None');
                this.setState({ reviews: "none" });
            }
        });        
    }

    fetchReviews(query) {
        if (this.props.course !== null) {
            if (this.props.course !== this.state.prevState) {
                this.setState({prevState: this.props.course});
                this.fetchReviewsCall(this.props.course._id);
            }
        }
        else {
            console.log('No reviews for this course');
        }
    }


    getReviewsContent() {
        if (this.state.reviews !== null) {
            if (this.state.reviews === 'invalid') {
                return (
                //    <Row key={'invalid'}>
                        <div key='invalid'>Enter something to search.</div>
                //    </Row>
                );
            }
            else if (this.state.reviews === 'none') {
                return (
                    // <Row key={'none'}>
                    <div key='none'>No reviews found!</div>
                    // </Row>
                );
            }
            else {
                let fullReviewsList = [];
                // loop through fetch results.
                for (let i=0; i < this.state.reviews.length; i++) {
                    const review = this.state.reviews[i];
                    
                    fullReviewsList.push(
                        <Review review={review} key={i} num={i}/>
                    );
                }

                return fullReviewsList;
            }
        }
        return null;
    }

    componentWillMount() {
        this.fetchReviews();
        
    }

    render(){

        // let reviewsContent = this.getReviewsContent();

        // if (this.state.reviews) {
        //     reviewsContent = this.state.reviews;
        // }


        return(
            <div>{this.getReviewsContent()}</div>
        );
    }
}

export default ReviewsList