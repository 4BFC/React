import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";
export default function SubApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        {/* Detail에서 어떤 id를 받는지 확인 되어야 한다. */}
      </Routes>
    </BrowserRouter>
  )
}