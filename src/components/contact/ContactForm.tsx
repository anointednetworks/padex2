
import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Load the Mailchimp validation script
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.jQuery) {
        (function ($) {
          window.fnames = window.fnames || [];
          window.ftypes = window.ftypes || [];
          window.fnames[1] = 'FNAME';
          window.ftypes[1] = 'text';
          window.fnames[0] = 'EMAIL';
          window.ftypes[0] = 'email';
          window.fnames[7] = 'MMERGE7';
          window.ftypes[7] = 'text';
          window.fnames[2] = 'LNAME';
          window.ftypes[2] = 'text';
          window.fnames[3] = 'ADDRESS';
          window.ftypes[3] = 'address';
          window.fnames[4] = 'PHONE';
          window.ftypes[4] = 'phone';
          window.fnames[5] = 'BIRTHDAY';
          window.ftypes[5] = 'birthday';
          window.fnames[6] = 'COMPANY';
          window.ftypes[6] = 'text';
        })(window.jQuery);
        window.$mcj = window.jQuery.noConflict(true);
      }
    };
    
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-100 p-6 sm:p-8 rounded-2xl shadow-sm border border-blue-100 relative">
      <div id="mc_embed_signup">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <form 
          action="https://padexadvisors.us9.list-manage.com/subscribe/post?u=b54b1535913223bdcf93bf4f1&amp;id=fe2d486614&amp;f_id=002de1e3f0" 
          method="post" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form" 
          className="validate" 
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2 className="text-xl font-semibold mb-4">We would love to hear from you! Please reach out to schedule a session or if you have any questions.</h2>
            <div className="indicates-required mb-3"><span className="asterisk text-red-500">*</span> indicates required</div>
            
            <div className="mc-field-group mb-4">
              <label htmlFor="mce-FNAME" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input 
                type="text" 
                name="FNAME" 
                className="w-full p-3 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 hover:border-blue-200 transition-all" 
                id="mce-FNAME" 
              />
            </div>
            
            <div className="mc-field-group mb-4">
              <label htmlFor="mce-EMAIL" className="block text-sm font-medium mb-1">
                Email Address <span className="asterisk text-red-500">*</span>
              </label>
              <input 
                type="email" 
                name="EMAIL" 
                className="required email w-full p-3 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 hover:border-blue-200 transition-all" 
                id="mce-EMAIL" 
                required 
              />
            </div>
            
            <div className="mc-field-group mb-4">
              <label htmlFor="mce-MMERGE7" className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea 
                name="MMERGE7" 
                className="w-full p-3 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 hover:border-blue-200 transition-all" 
                id="mce-MMERGE7" 
                rows={3}
              />
            </div>
            
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input 
                type="text" 
                name="b_b54b1535913223bdcf93bf4f1_fe2d486614" 
                tabIndex={-1} 
                readOnly 
              />
            </div>
            
            <div className="optionalParent">
              <div className="clear foot">
                <button 
                  type="submit" 
                  name="subscribe" 
                  id="mc-embedded-subscribe" 
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white p-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
