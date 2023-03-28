// Write your code here
import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

// console.log(formatDistanceToNow(new Date())); less than a minute

class CommentItem extends Component {
  state = {
    isClicked: true,
  }

  clicked = () => {
    const {isClicked} = this.state
    this.setState({isClicked: false})
  }

  unClicked = () => {
    const {isClicked} = this.state
    this.setState({isClicked: true})
  }

  deleteItem = props => {
    const {eachItem, deletingItem} = this.props
    const {inputValue, id, textAreaValue} = eachItem
    deletingItem(id)
  }

  render() {
    const {isClicked} = this.state
    const {eachItem, deletingItem} = this.props
    const {inputValue, id, textAreaValue} = eachItem
    const dateValue = formatDistanceToNow(new Date())

    return (
      <li>
        <p>{inputValue[0].toUpperCase()}</p>
        <h1>{inputValue}</h1>
        <p>{dateValue}</p>
        <p>{textAreaValue}</p>
        {isClicked ? (
          <button type="button" onClick={this.clicked}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
          </button>
        ) : (
          <button type="button" onClick={this.unClicked}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="like"
            />
          </button>
        )}

        <button type="button" data-testid="delete" onClick={this.deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </li>
    )
  }
}
export default CommentItem
