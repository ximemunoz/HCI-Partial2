import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/uscangapablo/" className="home__social-link" target="_blank">
            <InstagramIcon/>
        </a>

        <a href="pablouscanga@hotmail.com" className="home__social-link" target="_blank">
            <AlternateEmailIcon/>
        </a>
        
        <a href="https://www.linkedin.com/in/pablo-uscanga-245511239/" className="home__social-link" target="_blank">
            <LinkedInIcon/>
        </a>
    </div>
  )
}

export default HeaderSocials
