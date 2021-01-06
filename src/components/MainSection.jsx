import React from 'react'
import '../assets/styles/components/MainSection.scss';

const MainSection = ({children}) => {
  return (
    <section className="mainSection">
      {children}
    </section>
  )
}

export default MainSection;