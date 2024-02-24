import { BrowserRouter as Router } from "react-router-dom"
import { TopBar } from "./components/TopBar"
import { Header } from "./components/Header"
import { Navigation } from "./Navigation"

function App() {
  return (
    <div className="w-full min-h-screen font-mono">
      <Router>
        <TopBar/>
        <div className="sticky z-50 top-0">
          <Header/>
        </div>
      <Navigation/>
      </Router>
    </div>
  )
}

export default App
