import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className="hero">
      <div className="container">
        <h1 style={{ fontSize: '3rem', lineHeight: 1.1 }}>Draft custom sewing patterns from a photo + your measurements</h1>
        <p className="text-muted-foreground" style={{ fontSize: '1.15rem' }}>
          Upload a full‑body photo, enter measurements, choose materials. Get a downloadable pattern and instructions.
        </p>
        <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
          <button className="bg-gradient-primary" onClick={() => navigate('/create')}>
            Start Creating
          </button>
          <button onClick={() => navigate('/auth')}>
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  )
}
export default Hero
