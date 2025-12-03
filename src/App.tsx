import type { FC } from 'react'
import Header from './components/common/Header'
import { Hero } from './components/Hero'

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
      </main>
    </>
  )
}

export default App
