import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                    <h4>Employee</h4>
                    <ul>
                        <li><Link>About us </Link></li>
                         <li><Link>Privacy</Link></li>
                        <li><Link>Privacy</Link></li>
                        <li><Link>Courses</Link></li>
                       
                    </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Details</h4>
                    <ul>
                        <li><Link>Paymenta </Link></li>
                        <li><Link>Admissiona </Link></li>
                        <li><Link>Faqa </Link></li>
                        <li><Link>Guidlinesa </Link> </li>
                    </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Destination</h4>
                    <ul>
                        <li><Link>Language teaching </Link></li>
                    </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Follow us</h4>
                    <div className="social-as">
                    
                        <Link><i class="bi bi-facebook fs-2 text-warning rounded bg-light me-4 mt-4"></i></Link>
                       <Link><i class="bi bi-instagram fs-2 text-warning rounded bg-light me-4 mt-4"></i></Link>
                        <Link><i class="bi bi-twitter fs-2 text-warning rounded bg-light me-4 mt-4"></i></Link>
                       <Link><i class="bi bi-linkedin fs-2 text-warning rounded bg-light me-4 mt-4"></i></Link>
                   
                    </div>
                    </div>
                    </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer;