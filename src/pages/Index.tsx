import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import PatternCreator from '@/components/PatternCreator'

const Index: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <PatternCreator />
      </main>
      <footer>© 2025 Pattern Picture Perfect</footer>
    </div>
  )
}
export default Index
