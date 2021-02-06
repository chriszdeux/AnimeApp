import React, { useState } from 'react'

export const SearchInput = ({ setAnime }) => {

  const [inputValue, setInputValue] = useState('')
  // const inputValueUpper = inputValue.toUpperCase()
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)

  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length > 0) {
      // debugger
      
      setAnime(animes => [inputValue, ...animes]);
      // debugger
      setInputValue('');
    }
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
