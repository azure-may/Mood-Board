import React, {Component} from 'react'

class AddPhoto extends Component {

  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const post = {
      description: event.target.elements.description.value,
      imageLink: event.target.elements.link.value
    }
    if(post.imageLink && post.description){
      this.props.addPost(post)
      this.props.history.push('/')
    }
  }

  render(){
    return (
    <div>
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Link' name='link'/>
          <input type='text' placeholder='Description' name='description'/>
          <button>Post</button>
        </form>
      </div>
    </div>
    )
  }
}

export default AddPhoto