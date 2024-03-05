import { BrowserRouter as Router } from "react-router-dom"
import { TopBar } from "./components/TopBar"
import { Header } from "./components/Header"
import { Navigation } from "./Navigation"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="w-full min-h-screen font-mono overflow-hidden">
      <Router>
        <TopBar/>
        <div className="max-lg:mb-20">
          <Header/>
        </div>
        <div className="overflow-hidden">
          <Navigation/>
        </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
