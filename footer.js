import React from 'react';
import {TiSocialFacebook,TiSocialGithub,TiSocialLinkedin,TiSocialTwitter,
TiSocialInstagram,TiSocialYoutube} from 'react-icons/ti';
import {FaCopyright} from 'react-icons/fa'


export default function FooterPage() {
	return(
        <div>
        <br/>
        <br/>
 <footer class="bg-dark text-center text-white">
    <div class="container p-4">
            
    <div class="mb-4">
  
      <a class="btn btn-outline-light btn-floating m-1 p-3" href="#!" role="button">
      <TiSocialFacebook/></a>

     
      <a class="btn btn-outline-light btn-floating m-1 p-3" href="#!" role="button">
      <TiSocialGithub/></a>

    
      <a class="btn btn-outline-light btn-floating m-1 p-3" href="#!" role="button">
      <TiSocialLinkedin/></a>

    
      <a class="btn btn-outline-light btn-floating m-1 p-3" href="#!" role="button">
      <TiSocialTwitter/></a>

      <a class="btn btn-outline-light btn-floating m-1 p-3" href="#!" role="button">
      <TiSocialInstagram/></a>

      <a class="btn btn-outline-light btn-floating m-1 p-3" href="#!" role="button">
      <TiSocialYoutube/></a>
    </div>
   

    <div class="mb-4">
      <p class="custp">
        Better Help is always ready to provide you with the best facilities at the wave of your hand.
        With doctor visits and regular checkups made simple, it would mean a lot to us if you subscribe 
        to our weekly newsletter!
      </p>
    </div>

    <div>
     
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-2 custp">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example21" class="form-control" />
            </div>
          </div>

          <div class="col-auto">
            <button class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
   
    </div>

    
  <div class="text-center p-3">
    <a class="text-white" href="https://copyright.gov.in/"><FaCopyright/> 2022 Copyright </a>
  </div>

  </div>
</footer>
</div>
	);
}