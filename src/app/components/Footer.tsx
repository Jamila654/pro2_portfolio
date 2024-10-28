'use client'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-title text-white font-bold">
                <p>© 2024 Jamila Yaqoob Dhedhi | All Rights Reserved.</p>
            </div>
            <div className="icons flex items-center gap-4">
                <a title="LinkedIn" href="https://www.linkedin.com/in/jamila-yaqoob-dhedhi" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a title="GitHub" href="https://github.com/Jamila654" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
            </div>
        </div>
    );
}

