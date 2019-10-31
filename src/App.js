import React from 'react';
import './App.css';


const  App = () => {
  return (
    <div className="app-wrapper">
			<header className="header">
				<img src="https://www.clipartmax.com/png/full/270-2703019_pictures-gallery-of-company-logos-design-free-logo-design-3d-png.png" />
			</header>
			<nav className="nav">
				<div>
					<a>Profile</a>
				</div>
				<div>
					<a>Messages</a>
				</div>
				<div>
					<a>News</a>
				</div>
				<div>
					<a>Music</a>
				</div>				
			</nav>
			<div className="main">
				<div>
					<img src="http://u-f.ru/sites/default/files/styles/main_700/public/uploads/170851.jpg"/>
				</div>
				<div>
					<div>
						<img src="https://cdn4.iconfinder.com/data/icons/free-social-media-icons/512/User.png" />
					</div>
					<div>
						<h2>Dmitry K.</h2>
						<p>Date</p>
						<p>City</p>
						<p>Education</p>			
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
