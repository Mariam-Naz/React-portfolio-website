import React from 'react';
import Centerhead from './Centerhead';
import Textfeild from './Textfield';

const Contact = () => {
    return (
        <>
        <Centerhead title = 'Contact US'/>
        <div className="container-fluid mb-5">
        <div className="row">
        <div className='col-4 mx-auto'>
             <Textfeild infor='name' inlabel='Full Name' intype='text' inpholder='Enter your name' />
             <Textfeild infor='mobileno' inlabel='Mobile No.' intype='text' inpholder='xxxx-xxxxxxx' />
             <Textfeild infor='email' inlabel='Email' intype='email' inpholder='name@example.com' />
                <div class="mb-3">
                <label for="Message" class="form-label">Your Message</label>
                <textarea class="form-control" id="Message" rows="3"></textarea>
            </div>
            <a href="#" className="btn btn-outline-primary">Submit</a>
        </div>
        </div>
        </div>
        </>
    )
} 

export default Contact;