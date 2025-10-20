import React, { useState } from 'react'

const PatternForm: React.FC = () => {
  const [measurements, setMeasurements] = useState({ bust: '', waist: '', hips: '', height: '' })
  const [material, setMaterial] = useState('Cotton')
  const [photo, setPhoto] = useState<File | null>(null)
  const [reference, setReference] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [generating, setGenerating] = useState(false)

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMeasurements((m) => ({ ...m, [name]: value }))
  }

  const onPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files[0]
    setPhoto(file)
    const url = URL.createObjectURL(file)
    setPreview(url)
  }

  const onReference = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    setReference(e.target.files[0])
  }

  const generate = async (e: React.FormEvent) => {
    e.preventDefault()
    setGenerating(true)
    try {
      const resp = await fetch('/api/generate-pattern', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ measurements, material })
      })
      const data = await resp.json()
      alert('Pattern generated (stub): ' + data.patternId)
    } catch (err) {
      alert('Failed to generate pattern')
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <h1>Create your pattern</h1>
      <p className="text-muted-foreground">Enter measurements, upload a full‑body photo, choose a material.</p>

      <form onSubmit={generate} className="card" style={{ marginTop: '1rem' }}>
        <div className="row">
          <div>
            <label>Bust (cm)</label>
            <input name="bust" type="number" value={measurements.bust} onChange={update} required />
          </div>
          <div>
            <label>Waist (cm)</label>
            <input name="waist" type="number" value={measurements.waist} onChange={update} required />
          </div>
          <div>
            <label>Hips (cm)</label>
            <input name="hips" type="number" value={measurements.hips} onChange={update} required />
          </div>
          <div>
            <label>Height (cm)</label>
            <input name="height" type="number" value={measurements.height} onChange={update} required />
          </div>
        </div>

        <div className="row" style={{ marginTop: '1rem' }}>
          <div>
            <label>Material</label>
            <input name="material" value={material} onChange={(e) => setMaterial(e.target.value)} />
          </div>
          <div>
            <label>Reference image</label>
            <input type="file" accept="image/*" onChange={onReference} />
          </div>
          <div>
            <label>Full‑body photo</label>
            <input type="file" accept="image/*" onChange={onPhoto} />
          </div>
        </div>

        {preview && (
          <div style={{ marginTop: '1rem' }}>
            <label>Photo preview</label>
            <div className="card">
              <img src={preview} alt="preview" style={{ maxWidth: '100%', borderRadius: 12 }} />
            </div>
          </div>
        )}

        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <button className="bg-gradient-primary" disabled={generating}>{generating ? 'Generating…' : 'Generate Pattern'}</button>
        </div>
      </form>
    </div>
  )
}
export default PatternForm
