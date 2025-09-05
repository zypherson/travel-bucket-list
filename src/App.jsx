import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
  return <h1>Welcome to Your Travel Bucket List 🌍</h1>;
}

function Destinations() {
  return <h1>Explore Destinations ✈️</h1>;
}

function About() {
  return <h1>About This App 📝</h1>;
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

