import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'transparent',
      position: 'absolute',
      top: '0',
      width: '100%',
      zIndex: 5,
      color: 'white'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1120,
        padding: '30px 0 20px 0',
        textAlign: 'right',
        fontSize: '24px'
      }}
    >
      <span>КОНТАКТЫ</span>
    </div>
  </div>
)

export default Header
