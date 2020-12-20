import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (

    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <h3>Pythagoras-Dev</h3>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}{text}</a>
            </li>
          )
        })}

      </ul>
      <ul className='social-icons'>
        {social.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}

      </ul>
    </aside>

  )
}

export default Sidebar
