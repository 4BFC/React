// import { ReactDOM } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM Home</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>

        <Routes>
          {/* path="/" 가 존제 하므로 각 URL에 전달되는 역할  */}
          <Route exact path="/" element={<Home />}></Route>
          {/* url : localhost:3000/ */}
          <Route path="/topics" element={<Topics />}></Route>
          {/* url : localhost:3000/topics */}
          <Route path="/contact" element={<Contact />}></Route>
          {/* url : localhost:3000/contact */}
        </Routes>
      </div >
    </BrowserRouter >
  )
}