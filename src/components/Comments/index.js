import {Component} from 'react'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    inputValue: '',
    textAreaValue: '',
    id: 0,
  }

  deletingItem = id => {
    console.log(id)
    const {commentsList} = this.state
    const filteredList = commentsList.filter(item => item.id !== id)
    this.setState(prevState => ({
      commentsList: filteredList,
      id: prevState.id - 1,
    }))
  }

  inputField = event => {
    const {inputValue} = this.state
    this.setState({inputValue: event.target.value})
  }

  textAreaField = event => {
    const {textAreaValue} = this.state
    this.setState({textAreaValue: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {inputValue, textAreaValue, commentsList, id} = this.state
    this.setState(prevState => ({
      commentsList: [
        ...prevState.commentsList,
        {
          inputValue,
          textAreaValue,
          id: prevState.id + 1,
        },
      ],
      inputValue: '',
      textAreaValue: '',
      id: prevState.id + 1,
    }))
  }

  render() {
    const {commentsList, id, inputValue, textAreaValue} = this.state
    return (
      <>
        <h1>Comments</h1>
        <form>
          <p>Say something about 4.0 Technologies</p>
          <input
            type="text"
            placeholder="Your Name"
            onChange={this.inputField}
            value={inputValue}
          />
          <textarea
            type="textarea"
            placeholder="Your Comment"
            onChange={this.textAreaField}
            value={textAreaValue}
          />
          <button type="submit" onClick={this.addComment}>
            Add Comment
          </button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
          alt=" comments"
        />
        <hr />
        <span>{id}</span>
        <p>Comments</p>
        <ul>
          {commentsList.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              eachItem={eachItem}
              deletingItem={this.deletingItem}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Comments
