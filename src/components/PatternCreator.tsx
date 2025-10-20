import React from 'react'
import { Link } from 'react-router-dom'

const PatternCreator: React.FC = () => {
  return (
    <section>
      <div className="container card">
        <h3 style={{ marginBottom: '.25rem' }}>Ready to create?</h3>
        <p className="text-muted-foreground">Jump into the form and try a sample.</p>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/create" className="btn bg-gradient-primary">Open the creator</Link>
        </div>
      </div>
    </section>
  )
}
export default PatternCreator
