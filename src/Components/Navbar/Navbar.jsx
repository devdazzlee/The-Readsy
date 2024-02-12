import React, { useState, useEffect } from 'react';
import './Navbar.css'
import logo from '../../Images/Asset 16 (1).png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuOpen2(!isMenuOpen2)
  };
  const [isOpen, setIsOpen] = useState(false);


  // Function to toggle the open/closed state
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  const toggleFAQ2 = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav   
    
    style={{
      position: 'fixed',
      zIndex: '100',
      backgroundColor: scrolling ? '#10AFD0' : 'white',
      transition: 'background-color 0.3s ease',
    }}

    className="bg-white text-black mb-24 px-12 py-2 navbar-fixed">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold">
        <img src={logo} className='h-24'  alt="" />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
        <Link 
        style={{

        }}
        className={`mx-2    font-bold ${scrolling ? 'text-white' : 'text-black'} hover:text-${scrolling ? 'black' : 'sky-500'}`}
 to={'/'}  >
          Home
        </Link>
        <Link 
          className={`mx-2    font-bold ${scrolling ? 'text-white' : 'text-black'} hover:text-${scrolling ? 'black' : 'sky-500'}`}
         
         to={'/Portfolio'} >
         Portfolio
        </Link>
        <Link          
        className={`mx-2    font-bold ${scrolling ? 'text-white' : 'text-black'} hover:text-${scrolling ? 'black' : 'sky-500'}`}        
        to={'/book-editing'}   >
         Editing
        </Link>
        <Link  
         className={`mx-2    font-bold ${scrolling ? 'text-white' : 'text-black'} hover:text-${scrolling ? 'black' : 'sky-500'}`}
        to={'/book-marketing'} >
          Book Marketing 
        </Link>
          <div  className={`relative group font-bold  ${scrolling ? 'text-white' : 'text-black'} hover:text-${scrolling ? 'black' : 'sky-500'}`}  onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
            <a href="/#">Book Writing <i class="fa fa-caret-down" aria-hidden="true"></i></a>
            <ul className={`absolute ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-black p-2 space-y-2 z-50	`}>
        

        <li  style={{"width" :"10rem" , "color" :"white"}} >

        <Link  className='text-white font-bold hover-prop'    to={'/fiction'}  >
                    Fiction
                  </Link> 
        </li>
        <li  style={{"width" :"10rem"}} >

<Link  className='text-white font-bold hover-prop'   to={'/audio-book'}   >   
          Children Books
</Link>
</li>
<li  style={{"width" :"10rem"}} >

<Link   className='text-white font-bold hover-prop'  to={'/publishing'}   >
        Biography
        </Link> 
        </li>


            
                  
            </ul>
          </div>

          <Link  className={`mx-2    font-bold ${scrolling ? 'text-white' : 'text-black'} hover:text-${scrolling ? 'black' : 'sky-500'}`}  to={'/audio-book'}   >   
         Audio Book
        </Link>
        <Link   className={`mx-2    font-bold ${scrolling ? 'text-white' : 'text-black'} hover:text-${scrolling ? 'black' : 'sky-500'}`}   to={'/publishing'}   >
        Book Publishing
        </Link>
        <Link  className={`mx-2    font-bold ${scrolling ? 'text-white' : 'text-black'} hover:text-${scrolling ? 'black' : 'sky-500'}`} to={'/contact'} >
      Contact
        </Link >

        <div className={`relative group font-bold  ${scrolling ? 'text-white' : 'text-black'} hover:text-${scrolling ? 'black' : 'sky-500'}`} onMouseEnter={() => setIsMenuOpen2(true)} onMouseLeave={() => setIsMenuOpen2(false)}>
            <a href="/#">More <i class="fa fa-caret-down" aria-hidden="true"></i></a>
            <ul      style={{"position" : "absolute" , "right" :"0px"}} className={` ${isMenuOpen2 ? 'block' : 'hidden'}   bg-gray-800 text-black p-4 space-y-6 z-50 `}>
            <li  style={{"width" :"10rem"}} >
            <Link    className='text-white hover-prop'   to={'/cover-design'} >
                  Customized Cover Design 
                  </Link>
            </li>

            <li  style={{"width" :"12rem"}} >
            <Link    className='text-white hover-prop' to={'/video-book-trailer'} >
                  Video Book Trailers
                  </Link>
            </li>
            <li  style={{"width" :"12rem"}} >
            <Link   className='text-white hover-prop' to={'/author-website'}   >
                  Author Website
                  </Link>
            </li>
            <li  style={{"width" :"12rem"}} >


            <Link  className='text-white font-bold hover-prop'   to={'/about'}  >
                   About 
                  </Link>  
            </li>                  
            </ul>
          </div>





        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-4">
          <Link   className='mx-2  text-black 	' to={'/'}  >
          Home
        </Link>
        <Link   className='mx-2 text-black'  to={'/pricing'} >
         Pricing
        </Link>
        <Link    className='mx-2 text-black'   to={'/book-editing'}   >
         Editing
        </Link>
        <Link    className='mx-2 text-black'   to={'/book-marketing'} >
          Book Marketing 
        </Link>
<li  onClick={toggleFAQ} style={{"listStyleType" :"none"}} className='mx-2 text-black'   >Book Writing  <i class="fa fa-caret-down" aria-hidden="true"></i></li>
    
{isOpen && (
  <>


 <Link   style={{"background" :"#10AFD0"}}  className='mx-2 text-black' to={'/fiction'}  >
                    Fiction
                  </Link>
                  <Link  style={{"background" :"#10AFD0"}}   className='mx-2 text-black' to={'/audio-book'}   >   
                  Children Books
        </Link>
        <Link   style={{"background" :"#10AFD0"}}   className='mx-2 text-black'   to={'/publishing'}   >
        Biography
        </Link>



  </>
)}


<Link   className='mx-2 text-black' to={'/audio-book'}   >   
         Audio Book
        </Link>
        <Link    className='mx-2 text-black'   to={'/publishing'}   >
        Book Publishing
        </Link>
        <Link   className='mx-2 text-black' to={'/contact'} >
      Contact
        </Link >
        <li onClick={handleToggleDropdown} style={{"listStyleType" :"none"}} className='mx-2 text-black '   >More<i class="fa fa-caret-down" aria-hidden="true"></i></li>
        {isDropdownOpen && (
       <>


            <Link   style={{"background" :"#10AFD0"}}   className='mx-2 text-black'    to={'/cover-design'} >
                  Customized Cover Design 
                  </Link>
          

      
            <Link  style={{"background" :"#10AFD0"}}  className='mx-2 text-black'    to={'/video-book-trailer'} >
                  Video Book Trailers
                  </Link>
            
          
            <Link  style={{"background" :"#10AFD0"}}  className='mx-2 text-black'   to={'/author-website'}   >
                  Author Website
                  </Link>
     
        


            <Link  style={{"background" :"#10AFD0"}}  className='mx-2 text-black'    to={'/about'}  >
                   About 
                  </Link>  
           
      </>
      )}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
