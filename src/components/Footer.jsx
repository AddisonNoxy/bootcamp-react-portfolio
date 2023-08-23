import githubimg from '../../assets/icon-github-transparent.png';
import linkedinimg from '../../assets/icon-linkedin-transparent.png';
import overflowimg from '../../assets/icon-stackoverflow-transparent.png';

export default function Footer() {
    return (
        <div className="grid grid-cols-3 justify-items-center pt-4">
            <a href="https://github.com/AddisonNoxy"><img src={githubimg} className="w-16" /></a>
            <a href="https://linkedin.com"><img src={linkedinimg} className="w-16" /></a>
            <a href="https://stackoverflow.com"><img src={overflowimg} className="w-16" /></a>
        </div>
    )
}