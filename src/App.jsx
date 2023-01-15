import "./App.css";
import Hero from "./componets/hero/Hero";
import { Navbar } from "./componets/navbar/Navbar";
import Sidebar from "./componets/sidebar/Sidebar";

function App() {
    return (
        <main>
            <Sidebar />
            <Navbar/>
            <Hero/>
        </main>
    );
}

export default App;
