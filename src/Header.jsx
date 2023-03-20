import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>

<header class="header">
        <div class="container">
            <div class="header-wrapper">
                <div class="header-logo">
                    
                    <Link to={"/"}><img src="assets/img/logo.png" alt=""/>  </Link>
                </div>
                <div class="header-menu">
                    <ul>
                        <li>
                            
                        <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                        <Link to={"/products"}>Products</Link>
                        </li>
                        <li>
                            
                        <Link to={"/applications"}>Applications</Link>
                        </li>
                        <li>
                        <Link to={"/brochures"}>Brochures</Link>
                        </li>
                        <li>
                        <Link to={"/careers"}>Careers</Link>
                        </li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                        <li><a href=""><i class="fa fa-search-plus" aria-hidden="true"></i></a></li>
                        
                        
    
                    </ul>
                </div>
            </div>
        </div>

    </header>
      
    </div>
  )
}
