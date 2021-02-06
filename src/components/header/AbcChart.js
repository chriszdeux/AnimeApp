import React from 'react'

export const AbcChart = () => {

  let abc = []
  for(let i = 65; i <= 90; i++) {
    let pushAbc = abc.push(String.fromCharCode(i))
  }

  // debugger
  return (
      <ul className="abc__chart">
        {
          abc.map(letter => (
            <li key={letter} className="abc--letter">{letter}</li>
          ))
        }
      </ul>

  )
}
