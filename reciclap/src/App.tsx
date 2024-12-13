

import './App.css'
import {Header} from "./components/header.tsx";
import {Hero} from "@/components/hero.tsx";

import {BrowserRouter} from "react-router-dom";
import {Footer} from "@/components/footer.tsx";
import {ContactForm} from "@/components/contact-form.tsx";
import {Mission} from "@/components/mission.tsx";
import {AppDownload} from "@/components/dowloadApp.tsx";
function App() {
  return (
    <>
        <BrowserRouter>
            <div className="min-h-screen bg-white">
                <Header/>
                <main>
                    <AppDownload/>
                    <Hero/>
                    <Mission/>
                    <ContactForm/>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    </>
  )
}

export default App
