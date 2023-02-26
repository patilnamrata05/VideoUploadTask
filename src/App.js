import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoUpload from "./component/VideoUpload";
import ShowVideo from "./component/ShowVideo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoUpload />} />
          <Route path="/displayVideo" element={<ShowVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
