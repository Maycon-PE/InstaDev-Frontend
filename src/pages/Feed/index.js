import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import socket from '../../services/socket'
import baseUrl from '../../services/baseUrl'

import {
  Section as SectionStyle,
  UserInfo as UserInfoStyle,
  UserPicture as UserPictureStyle,
  Article as ArticleStyle
} from './styles'

import comment from '../../assets/comment.svg'
import like from '../../assets/like.svg'
import send from '../../assets/send.svg'

const Feed = () => {
  const [feed, setFeed] = useState([])
  const [likeds, setLikeds] = useState([])

  socket.on('posted', newPost => {
    setFeed([newPost, ...feed])
  })

  socket.on('liked', posts => {
    setFeed(posts)
  })

  socket.on('deleted', newPosts => {
    setFeed(newPosts)
  })

  socket.on('desliked', posts => {
    setFeed(posts)
  })

  socket.on('connect', () => {
    doRequest()
  })

  const doRequest = () => {
    api.get('posts')
      .then(({ data }) => {
        const newPosts = data.map(post => {
          return { ...post, options: false }
        })

        setFeed(newPosts)
      })
  }

  const handleLike = id => {
    if (likeds.indexOf(id) === -1) {
      const newLikeds = [ ...likeds ]
      newLikeds.push(id)
      setLikeds(newLikeds)

      api.post(`/posts/${id}/like`)
        .then(({ data }) => {
          setFeed(data)
        })

    } else {
      const newLikeds = [ ...likeds ]
      newLikeds.splice(likeds.indexOf(id), 1)
      setLikeds(newLikeds)

      api.post(`/posts/${id}/deslike`)
        .then(({ data }) => {
          setFeed(data)
        })
    }
  }

  const handleDelete = id => {
    api.delete(`posts/${id}/delete`)
      .then(({ data }) => {
        setFeed(data)
      })
  }

  useEffect(() => {
    doRequest()
  }, [])

  return (
    <SectionStyle>
      { feed.map(post => (
        <ArticleStyle key={post._id}>
          <header>
            <UserInfoStyle>
              <span className='name'>{ post.author }</span>
              <span className='place'>{ post.place }</span>
            </UserInfoStyle>
            <button onClick={() => handleDelete(post._id)}>Excluir</button>
          </header>

          <UserInfoStyle>
            <img src={`${baseUrl}/files/${post.image}`} />
          </UserInfoStyle>

          <footer>
            <div className='actions'>
              <button className={`icon-like-${post.id}`} type='button' onClick={() => handleLike(post._id)}><img src={like} alt='icon like' title='like' /></button>
              <button type='button'><img src={comment} alt='icon comment' /></button>
              <button type='button'><img src={send} alt='icon send' /></button>
            </div>

            <strong>{ post.likes }</strong>

            <p>
              { post.description }
              <span>{ post.hashtags }</span>
            </p>
          </footer>
        </ArticleStyle>
      )) }
    </SectionStyle>
  )
}

export default Feed
