import React from 'react'
import PackageBanner from '../Components/Packages/PackageBanner'
import PackageCard from '../Components/Packages/PackageCard'
import Book from '../Components/Packages/Book'
import PackageHero from '../Components/Packages/PackageHero'
import NavBar from '../Components/NavBar/NavBar'

const Packages = () => {
  return (
    <div>
      <NavBar />
        <PackageHero />
        <PackageBanner />
        <PackageCard />
        <Book/>
    </div>
  )
}

export default Packages