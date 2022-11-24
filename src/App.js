import React, { useState } from 'react'
import Radio from "./components/Radio"
import Table from "./components/Table"
import "h8k-components"

const title = "Birthday Records"

function App() {

  const [selected, setSelected] = useState()

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <Radio onSortSelect={(selected)=>setSelected(selected)}/>
      <Table sortBy={selected}/>
    </div>
  )
}

export default App
