import { GitHub, LinkedIn, Language } from "@mui/icons-material"
import { Link } from "@mui/material"

export default function SiteFooter(){
    return (
        <div className="siteFooter py-[2rem] text-center">
            <p>Designed and Developed by Andrew Ohakam</p>
            <div className="developer-links mt-1">
                <Link className="!color-unset" href="https://andrewohakam.netlify.app/" target="_blank"><Language /></Link>
                <Link href="https://github.com/andlas98" target="_blank"><GitHub /></Link>
                <Link href="https://www.linkedin.com/in/andrew-ohakam/" target="_blank"><LinkedIn /></Link>
            </div>
        </div>
    )
}