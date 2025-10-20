import React from 'react'
import { Link } from 'react-router-dom'
const NotFound: React.FC = () => {
  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <h1>404</h1>
      <p className="text-muted-foreground">Page not found.</p>
      <Link to="/" className="link">Go home</Link>
    </div>
  )
}
export default NotFound
