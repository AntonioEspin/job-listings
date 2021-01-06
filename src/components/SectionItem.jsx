import React from 'react'
import '../assets/styles/components/SectionItem.scss';

const SectionItem = ({ company, logo, new:{}, featured:{}, position,role, level, postedAt, contract, location, languages, tools }) => {
  return (
    <div className="sectionItem">
      <div className="sectionItem__info">
        <img src={logo} alt=""/>
        <div>
          <div className="sectionItem__info--job">
            <p>{company}</p>
            <p></p>
            <p></p>
          </div>
          <p className="profession">{position}</p>
          <ul>
            <p>{postedAt}</p>
            <li>{contract}</li>
            <li>{location}</li> 
          </ul>
        </div>

        </div>
      <div className="sectionItem__keys">
        <ul>
          <li>{role}</li>
          <li>{level}</li>
          {
            languages.map(item => 
              <li key={item}>{item}</li>
              )
          }
          {
            tools.length != 0 &&
            tools.map(item => 
              <li key={item}>{item}</li>
              )
          }
        </ul>
      </div>
    </div>
  )
}

export default SectionItem;