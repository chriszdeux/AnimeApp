import React, { useState } from 'react'

export const useShowContent = ( initialState = false ) => {
  
  const [showContent, setShowContent] = useState( initialState )

  const toggleShowContent = () => {
    showContent ? setShowContent(false) : setShowContent(true);
  }

  return [showContent, toggleShowContent]
}
