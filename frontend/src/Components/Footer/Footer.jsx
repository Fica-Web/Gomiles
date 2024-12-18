import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-10 md:h-96 bg-black text-white'>
    <div className='space-y-6 md:space-y-0 md:flex '>
      <div className='w-11/12 mx-auto md:w-1/2 pt-4 md:pl-10 text-white'>
        <h2>Gomiles</h2>
        <p className='mt-2 font-Switzer-Medium text-sm lg:mt-10'>
          Subscribe to our newsletter<br />and stay in touch with us
        </p>

        <div className='flex items-center mt-4 bg-gray1 rounded-2xl w-full md:w-11/12 xl:w-1/2'>
          <input
            type='text'
            placeholder='gomilesintl@gmail.com'
            className='bg-transparent rounded-l-2xl py-2 px-4 flex-grow outline-none text-white placeholder-gray-400'
          />
          <button className='bg-gray1 mr-0.5 px-4 py-2 rounded-2xl font-Switzer-Medium text-sm '>
            Submit
          </button>
          
        </div>
      </div>

      <div className='md:w-1/2  space-y-8 pt-4 md:flex md:space-y-0'>
        <div className='w-11/12 mx-auto '>
          <h5 className='font-Switzer-Medium text-xs text-gray3 xl:text-sm'>Sitemap</h5>
          <h3 className='uppercase mt-6 font-Switzer-Medium text-sm xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'><Link to={'/'}>Home</Link></h3>
          <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'><Link to={'/about'}>About</Link></h3>
          <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'><Link to={'/packages'}>Packages</Link></h3>
          <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'><Link to={'/'}>News</Link></h3>
          <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'>Careers</h3>
          <h3 className='uppercase font-Switzer-Medium text-sm xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'><Link to={'/contact'}>Contact</Link></h3>
          
        </div>
        <div className='w-11/12 mx-auto'>
          <h5 className='font-Switzer-Medium text-xs  text-gray3 xl:text-sm'>Socials</h5>
          <h4 className='mt-6'><a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className=' uppercase font-Switzer-Medium text-sm mt-2 text-white  xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'
          >
            Facebook
          </a></h4>

          <h4 ><a
            href="https://www.instagram.com/gomilesturkey/profilecard/?igsh=MXI4dnF5NW1kMjdpcw=="
            target="_blank"
            rel="noopener noreferrer"
            className='uppercase font-Switzer-Medium text-sm text-white font-Marcellus xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'
          >
            Instagram
          </a></h4>
          <h4 ><a
            href="https://www.linkedin.com/company/gomilesinternational/"
            target="_blank"
            rel="noopener noreferrer"
            className='uppercase font-Switzer-Medium text-sm text-white font-Marcellus xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'
          >
            linkedin
          </a></h4>
          <h4 ><a
            href="https://www.linkedin.com/company/gomilesinternational/"
            target="_blank"
            rel="noopener noreferrer"
            className='uppercase font-Switzer-Medium text-sm text-white font-Marcellus xl:text-base hover:text-gray cursor-pointer transition-colors duration-300'
          >
            x.com
          </a></h4>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer