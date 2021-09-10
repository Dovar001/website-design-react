import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-title-sm">React & Node</span>
                <span className="header-title-lg">Blog</span>
            </div>
            <img className="header-img" src="https://vjoy.cc/wp-content/uploads/2019/07/1-5.jpg" alt="" />
        </div>
    )
}

export default Header
