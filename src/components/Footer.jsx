import React from 'react'
import logo from "./../assets/images/SpotknackLogo.png"

const Footer = () => {
  return (
    <div>
        <div className="container footer pb-3">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="container">
                        <img src={logo} width={"50%"}  alt="" /> <br />
                        <p className="text-bold pt-3">Collect your components under variant sections for developers to access them during development developers to access them during development.</p>

                    </div>

                </div>
                <div className="col-md-2 col-sm-12 text-gray px-3">
                        <h5>Useful links</h5>
                        <a href="#"> {"> "}About Us</a><br />
                        <a href="#"> {"> "}Features</a><br />
                        <a href="#"> {"> "}Terms and Conditions</a>                       

                </div>
                <div className=" col-sm-12 col-md-4 text-gray px-3  ">
                    <h5>Contact Us</h5>
                    <a href="#"> {"> "}dandelions@spotknack.com</a><br />
                    <a href="#"> {"> "}+91-9874561230</a><br />
                    <a href="#"> {"> "}Website</a><br />


                </div>
                <div className="col-md-2 col-sm-12 text-gray px-3">
                        <h5>Content</h5>
                        <a href="#"> {"> "}FAQ</a><br />
                        <a href="#"> {"> "}Sponsor Us</a>



                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
