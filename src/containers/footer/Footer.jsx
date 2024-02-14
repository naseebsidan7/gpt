import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
       
       <div className='gpt3__footer-heading '>
         <h1 className='gradient__text'>
          Do you want to step in to the future before others
         </h1>
       </div>
       <div className='gpt3__footer-btn'>
         <p> <a href="https://www.linkedin.com/in/naseeb-sidan-16b371267/" target='_blank' > Request Early Acess </a></p>
       </div>

       <div className='gpt3__footer-links'>
         
         <div className='gpt3__footer-links_logo'>
            <img src={gpt3Logo} alt="gpt3Logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
         </div>

         <div className='gpt3__footer-links_div'>
             <h4>Links</h4>
              <p> <a href="https://www.linkedin.com/in/naseeb-sidan-16b371267/" target='_blank' >Linkedin </a></p>
              <p> <a href="https://www.instagram.com/sidan07_/" target='_blank' >Socila Media </a></p>
              <p><a href=" https://github.com/naseebsidan7 " target='_blank '> Git 𝕏 </a></p>
              <p><a href="https://www.linkedin.com/in/naseeb-sidan-16b371267/" target='_blank' >Contact</a></p>
         </div>

         <div className='gpt3__footer-links_div'>
             <h4>Company</h4>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p> <a href="https://github.com/naseebsidan7" target='_blank' > Contact </a></p>
         </div>

         <div className='gpt3__footer-links_div'>
             <h4>Get in touch</h4>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>9947442414</p>
              <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpgVjzcZjMZpmSkBfdbfpsBsJPqwmFPJzpCwVflKtwhVmcMhFgtrlwBZMjdflnVcRQbWXr" target='_blank' > naseebsidna6@gmail.com </a></p>

         </div>
        </div>

       
       <div className='gpt3__footer-copyright'>
            <p>© 2023 GPT-3. All rights reserved.</p>
       </div>

    </div>
  )
}

export default Footer