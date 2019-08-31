import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import {
  Form as FormStyle
} from './styles'

const New = ({ history }) => {
  const [data, setData] = useState({})

  const handleOnSubmit = e => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('image', data.image)
    formData.append('author', data.author)
    formData.append('place', data.place)
    formData.append('description', data.description)
    formData.append('hashtags', data.hashtags)

    api.post('posts', formData)
      .then(() => {
        history.push('/')
      })
  }

  return (
    <FormStyle id='new-post' onSubmit={handleOnSubmit} autoComplete='off'>
      <input type='file'
        id='file'
        onChange={ e => setData({ ...data, image: e.target.files[0] }) }
        required />

      <input type='button'
       value={ !data.image ? 'Adicionar uma foto' : 'Foto adicionada!' }
       onClick={() => document.getElementById('file').click()} />

      <input
        type='text'
        placeholder='Autor do post'
        onChange={ e => setData({ ...data, author: e.target.value }) }
        value={ data.author }
        required />

      <input
        type='text'
        placeholder='Local do post'
        onChange={ e => setData({ ...data, place: e.target.value }) }
        value={ data.place }
        required />

      <input
        type='text'
        placeholder='Descrição do post'
        onChange={ e => setData({ ...data, description: e.target.value }) }
        value={ data.description }
        required />

      <input
        type='text'
        placeholder='Hashtags do post'
        onChange={e => setData({ ...data, hashtags: e.target.value })}
        value={ data.hashtags }
        required />

        <button type='submit'>Enviar</button>
    </FormStyle>
  )
}

export default New
