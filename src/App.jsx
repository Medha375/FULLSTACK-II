import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.css";
export default function App () {
return (
< BrowserRouter >
< Header />
<nav >
< Link to ="/" > Home </ Link >
< Link to ="/ about "> About </ Link >
< Link to ="/ contact " > Contact </ Link >
</ nav >
< Routes >
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

</ Routes >
< Footer />
</ BrowserRouter >
);
}