import React, { Component } from 'react'
import api from '../services/api'
import io from 'socket.io-client'

import './feed.css'

import comment from '../assets/comment.svg'
import like from '../assets/like.svg'
import liked from '../assets/liked.png'
import more from '../assets/more.svg'
import send from '../assets/send.svg'

import options from '../script/options'
import likes from '../script/liked'

class Feed extends Component {
  state = {
    feed: []
  }

  async componentDidMount() {
    this.registerToSocket()

    const response = await api.get('posts')

    this.setState({ feed: response.data })
  }

  registerToSocket = () => {
    const socket = io('http://localhost:8080')

    socket.on('posted', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] })
    })

    socket.on('liked', likedPost => {
      this.setState({ feed: this.state.feed.map(post => post._id === likedPost._id? likedPost: post )})
    })

    socket.on('deleted', newPosts => {
      this.setState({ feed: newPosts })
    })

    socket.on('desliked', postDesliked => {
      this.setState({feed: this.state.feed.map(post => post._id === postDesliked._id? postDesliked: post)})
    })
  }

  async handleLike(id) {

    if (likes(id)) {
      await api.post(`/posts/${id}/like`)
      document.querySelector(`#p${id} img`).src = liked
    } else {
      await api.post(`/posts/${id}/deslike`)
      document.querySelector(`#p${id} img`).src = like
    }
  }

  async handleDelete(id) {
    await api.delete(`posts/${id}/delete`)
    const posts = await api.get('/posts')
    console.log(posts)
    this.setState({ feed: posts.data})
  }

  render() {
    return (
      <section id='post-list'>
        { this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className='user-info'>
                <span>{ post.author }</span>
                <span className='place'>{ post.place }</span>
              </div>
              <div onClick={() => options(post._id)} id={`o${post._id}`} className='div-options'>
                <img src={more} alt='opções' />
                <div className='options'>
                  <button onClick={() => this.handleDelete(post._id)}>Excluir</button>
                </div>
              </div>
            </header>

            <div className='picture'>
              <img src={`http://localhost:8080/files/${post.image}`} />
            </div>

            <footer>
              <div className='actions'>
                <button like='false' className={`l${post._id}`} id={`p${post._id}`} type='button' onClick={() => this.handleLike(post._id)}><img src={like} alt='' /></button>
                <button type='button'><img src={comment} alt='' /></button>
                <button type='button'><img src={send} alt='' /></button>
              </div>

              <strong>{ post.likes }</strong>

              <p>
                { post.description }
                <span>{ post.hashtags }</span>
              </p>
            </footer>
          </article>
        )) }
      </section>
    )
  }
}

export default Feed
