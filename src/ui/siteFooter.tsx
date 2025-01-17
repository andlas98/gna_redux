import { GitHub, LinkedIn, Language } from "@mui/icons-material"
import { Link } from "@mui/material"

export default function SiteFooter(){
    return (
        <div className="siteFooter">
            <p>Designed and Developed by Andrew Ohakam</p>
            <div className="developer-links">
                <Link href="https://github.com/andlas98" target="_blank"><Language /></Link>
                <Link href="https://github.com/andlas98" target="_blank"><GitHub /></Link>
                <Link href="https://github.com/andlas98" target="_blank"><LinkedIn /></Link>
            </div>
        </div>
    )
}