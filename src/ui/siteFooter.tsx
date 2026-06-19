import { GitHub, LinkedIn, Language } from "@mui/icons-material"
import { Link } from "@mui/material"

export default function SiteFooter(){
    return (
        <footer className="siteFooter border-t border-dark-mode-red/30 py-8 px-4 mt-12">
            <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-4">
                    <p className="text-light-gray/40 text-xs text-center mt-4">Designed and Developed by Andrew Ohakam</p>
                </div>
                <div className="developer-links flex justify-center gap-4">
                    <Link 
                        href="https://andrewohakam.netlify.app/" 
                        target="_blank"
                        className="text-light-gray/70 hover:text-dark-mode-red-text transition-colors duration-200"
                        sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
                    >
                        <Language className="w-5 h-5" />
                    </Link>
                    <Link 
                        href="https://github.com/andlas98" 
                        target="_blank"
                        className="text-light-gray/70 hover:text-dark-mode-red-text transition-colors duration-200"
                        sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
                    >
                        <GitHub className="w-5 h-5" />
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/andrew-ohakam/" 
                        target="_blank"
                        className="text-light-gray/70 hover:text-dark-mode-red-text transition-colors duration-200"
                        sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
                    >
                        <LinkedIn className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}