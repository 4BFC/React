import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";
export default function SubApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}