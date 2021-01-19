import React, { useState } from 'react'

export const SearchInput = ({ setAnime }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)

    // console.log(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setAnime(animes => [inputValue, ...animes]);
    setInputValue('');
  }
  
  return (
    <form className="search__form" onSubmit={ handleSubmit }>
        <input 
          type="text"
          className="search--input"
          value={ inputValue }
          onChange={ handleInputChange }

        />
        <button type="submit">Go</button>
    </form>
  )
}
