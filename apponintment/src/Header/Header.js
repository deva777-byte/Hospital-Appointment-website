import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'

const Header = ()=>{

    const handleScrollToSection = (sectionId) => {
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    return (
        <div className='Header-container'>
            <div className='inner-container'>

            <h1 className='title'>A M R U T A M</h1>
            <div className='Links'>
                <Link to = "/" className = "no-underline">
                <h1 className='text1'>Home</h1>
                </Link >
                <Link to = "/" className = "no-underline" onClick={() => handleScrollToSection('find-doctors')}>
                <h1 className='special'>Find Doctors</h1>
                </Link>
                <Link to="/" className="no-underline" onClick={() => handleScrollToSection('about')}>
                        <h1 className='text1'>About Us</h1>
                    </Link>
                
                
            </div>
            <div className='buttons'>
            <Link to = "/login">
                <button className='login'>Login</button>
            </Link>
            <Link to = "/sign-up">
                <button  className='sign'>Sign-up</button>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default Header;