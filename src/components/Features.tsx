import React from 'react'

const items = [
  { title: 'Measurement‑aware patterns', body: 'Enter bust, waist, hips, height. We generate a base block.' },
  { title: 'Photo overlay preview', body: 'See the garment overlay on your uploaded full‑body photo.' },
  { title: 'Export to PDF', body: 'Download tiled A4/Letter PDF with simple instructions.' },
]

const Features: React.FC = () => {
  return (
    <section>
      <div className="container">
        <h2 style={{ fontSize: '2rem' }}>What you get</h2>
        <div className="grid grid-3" style={{ marginTop: '1rem' }}>
          {items.map((it) => (
            <div className="card" key={it.title}>
              <h3 style={{ marginBottom: '.25rem' }}>{it.title}</h3>
              <p className="text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Features
