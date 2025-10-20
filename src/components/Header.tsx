import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="card" style={{ borderRadius: 0 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>
          Pattern Picture Perfect
        </Link>
        <nav style={{ display: 'flex', gap: '0.8rem' }}>
          <Link to="/create" className="btn bg-gradient-primary">Start Creating</Link>
          <Link to="/auth" className="btn" style={{ background: 'transparent', border: '1px solid #2a2b3f' }}>Sign in</Link>
        </nav>
      </div>
    </header>
  )
}
export default Header
