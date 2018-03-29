import React from 'react'

import Review from './Review'

class ReviewsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: null
        }
    }

    fetchReviews(query) {
        console.log('SEARCHING COURSES: ' + query);
        return fetch('https://www.eg.bucknell.edu/~amm042/service/r/' + query)
        .then((response) => response.json())
        .then((data) => {
            if (data.message.length > 0) {
                this.setState({ reviews: data.message });
            } else {
                console.log('courseInfo = None');
                this.setState({ reviews: "none" });
            }
        });

        
        
    }

    getReviewsContent(fetchedReviews) {
        if (fetchedReviews !== null) {
            if (fetchedReviews === 'invalid') {
                return (
                //    <Row key={'invalid'}>
                        <div key='invalid'>Enter something to search.</div>
                //    </Row>
                );
            }
            else if (fetchedReviews === 'none') {
                return (
                    // <Row key={'none'}>
                        <div key='none'>No courses found!</div>
                    // </Row>
                );
            }
            else {
                let fullReviewsList = [];
                // loop through fetch results.
                for (let i=0; i < fetchedReviews.length; i++) {
                    const review = fetchedReviews[i];
                    
                    fullReviewsList.push(
                        <Review review={review} key={i}/>
                    );
                }

                return fullReviewsList;
            }
        }
        return null;
    }

    render(){
        const fetchedReviews = this.fetchReviews();
        const reviewsContent = this.getReviewsContent(fetchedReviews);

        return(
            <div>{reviewsContent}</div>
        );
    }
}

export default ReviewsList