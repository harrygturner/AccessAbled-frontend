import React, { Component } from 'react';
import FullStar from '../components/FullStar';
import LikeBtn from '../components/LikeBtn';
import LikeComment from '../components/LikeComment';
import API from '../API';

export default class ReviewCard extends Component {
   state = {
      userLikes: this.props.review.likes.map(like => like.user_id),
      errorMessage: '', 
      userId: null
   }

   componentDidMount() {
      API.validate().then(resp => {
         if(!resp.error){
            this.setState({ userId: resp.id })
         } 
      })
   }
   
   renderRating = rating => {
      const ratings = []
      for( let i=0; i<rating; i++ ){
         ratings.push(<FullStar key={i} />);
      }
      return ratings
   }
   
   createdDate = () => {
      const date = this.props.review.created_at.split(/[0T-]/g);
      const day = date[4]
      const month = parseInt(date[3])
      const all_months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      return day + ' ' + all_months[month-1]
   }  

   submitLike = (event) => {
      event.preventDefault()
   
      API.validate()
         .then(data => {
            if(!data.error) {
               if(!this.state.userLikes.includes(data.id) && this.props.review.user.id !== data.id){
                  this.setState({ userLikes: [...this.state.userLikes, data.id] })
                  const like = {
                     user_id: data.id,
                     review_id: this.props.review.id
                  }
                  API.likeReview(like)
               } else {
                  console.log(`Can't like your own/like more than once`)
               }
            } else (
               this.setState({ errorMessage: data.error })
            )
         }) 
   }

   renderLikeEl = () => this.state.userLikes.includes(this.state.userId)
      ? <LikeComment />
      : <LikeBtn username={this.props.review.user.username} submitLike={this.submitLike} />
   
   render() {

      const ratingN = this.props.review.rating
      return (
         <div className='card'>
            <div className='right top title'>
               {this.props.review.title}
            </div>
            <div className='right comment'>
               {this.props.review.comment}
            </div>
            {this.state.userId 
               ? this.renderLikeEl()
               : null 
            }
            <div className='left top rating'>
               {this.renderRating(ratingN)}
            </div>
            <div className='likes left'>
               <i className="fas fa-thumbs-up"></i> {this.state.userLikes.length}
            </div>
            <div className='left username'>
               {this.props.review.user.username} created <br /> on {this.createdDate()}
            </div>
         </div>
      )
   }
}