import { Facebook, Instagram, Pinterest, Twitter, MailOutline ,LocalPhoneOutlined, StorefrontOutlined} from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-evenly h-72 px-24 py-6 text-base '>
      
      <div className="customer_care flex gap-2 flex-col">
          <h1 className='font-medium'>CUSTOMER CARE</h1>
          <ul className=''>
            <li>Orders & Shipments</li>
            <li>Returns & Exchange</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
      </div>
      <div className="Categories flex gap-2 flex-col">
        <h1 className='font-medium'>CATEGORIES</h1>
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Wedding</li>
        </ul>

      </div>
      <div className="Legal flex gap-2 flex-col">
          <h1 className='font-medium'>LEGAL</h1>
          <ul>
            <li>Terms & Conditions</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Payment Policy</li>
          </ul>
      </div>
      <div className="Need_help h-full flex flex-col justify-between ">
        <div>
        <h1 className='font-medium pb-2'>NEED HELP?</h1>
          <ul>
            <li><MailOutline/> Email Us</li>
            <li><LocalPhoneOutlined/> Contact Us</li>
            <li><StorefrontOutlined/> Store</li>
          </ul>
        </div>
        
          <div>
            
            <ul className='flex flex-row gap-2'>
              <li><Instagram/></li>
              <li><Pinterest/></li>
              <li><Facebook/></li>
              <li><Twitter/></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer