import "../styles/header.scss"

const Header = () => {

	return (
		<header className="header">
			<nav className="nav-container">
				<ul>
					<span className="vertical-line"></span>
					<li>
						<a href="">start</a>
					</li>
					<span className="vertical-line"></span>
					<li>
						<a href="">about</a>
					</li>
					<span className="vertical-line"></span>
					<li>
						<a href="">tools</a>
					</li>
					<span className="vertical-line"></span>
					<li>
						<a href="">projects</a>
					</li>
					<span className="vertical-line"></span>
					<li>
						<a href="">contact</a>
					</li>
					<span className="vertical-line"></span>
				</ul>
			</nav>
		</header>
	)
}

export default Header
