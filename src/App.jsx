import BigProjects from "./componets/BigProjects";
import Contact from "./componets/Contact";
import Hero from "./componets/Hero";
import MiniProjects from "./componets/MiniProjects";
import { Navbar } from "./componets/Navbar";
import Sidebar from "./componets/Sidebar";

function App() {
    return (
        <>
            <Sidebar />
            <main className="flex justify-center w-full">
                <container className="flex flex-col gap-24 w-full max-w-7xl px-6 sm:px-24 md:px-36 lg:px-56 xl:px-[17rem] ">
                    <Navbar />
                    <Hero />
                    <BigProjects />
                    <MiniProjects />
                    <Contact />
                </container>
            </main>
        </>
    );
}

export default App;
