import React from "react"
import { SectionWrapper } from "../hoc"

const Footer = () => {
    return (
        <footer className="w-full text-center text-white bg-gray-900 max-w-7xl mx-0 py-5 ">
            <p>&copy; 2025 Saladin. All rights reserved.</p>
            <p>
                <i className="fas fa-map-marker-alt"></i>
                <a href="https://maps.app.goo.gl/UkiNp6Ko5a2dr9XBA" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                    Ajibarang, Banyumas, Indonesia
                </a>
            </p>
        </footer>
    )
}

export default SectionWrapper(Footer, "")