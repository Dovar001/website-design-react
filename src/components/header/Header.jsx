import './header.css'
import mainPhoto from '../../images/main.jpg'

export default function Header() {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-title-sm"> by Dovar001 <strong>:)</strong> </span>
                <span className="header-title-lg title-big">Dovar </span>
            </div>
            <img className="header-img" src={mainPhoto} alt="" />
        </div>
    )
}


