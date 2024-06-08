import React from 'react'
import Header from "./header/Header"
import ExploreMenu from './ExploreMenu'
import { useState } from 'react'
import FoodDisplay from "./FoodDisplay"
import AppDownload from './AppDownload'


function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />

    </div>
  )
}

export default Home