import React, { useState, useEffect } from 'react'

function Table({sortBy}) {
  const [people, setPeople] = useState([
    {
      name: "Rhianna Johnson",
      birth: "11/30/2011",
    },
    {
      name: "Aiden Shaw",
      birth: "09/16/1992",
    },
    {
      name: "Trevon Floyd",
      birth: "01/16/1992",
    },
    {
      name: "Melanie Yates",
      birth: "12/12/2001",
    },
    {
      name: "Chris Andrews",
      birth: "02/09/1891",
    },
    {
      name: "Jacinda Miller",
      birth: "12/01/1982",
    },
    {
      name: "Will Davis",
      birth: "11/30/2011",
    },
    {
      name: "Eliza Baxter",
      birth: "10/31/1999",
    },
  ]) 
  useEffect(() => {
    if (sortBy) {
      const newArr = [...people].sort((a, p) => {
          if (sortBy === 'name') {
            return a.name > p.name ? 1: -1
          } else if(sortBy === 'age') {
            return a.birth > p.birth ? 1: -1
          } 
        })
      setPeople(newArr)
    }
  }, [sortBy])
  

  return (
    <div className="table-div">
      <div className="card w-50 mx-auto mt-20 pb-30">
        <table data-testid="table">
          <thead>
            <tr>
              <th className="course-name">Person Name</th>
              <th className="duration">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {people && people.map(person => <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.birth}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table


