import React from 'react';
import "./Style.css";
import dp from '../images/dp.png';
import TypeWriterEffect from 'react-typewriter-effect';
import { FaGithub} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const About = () => {
  return (
    <div className='about'>
    <div className='index'>
    <div className="greetings">
    <p className="TARUN-CHOUDHARY">
      <span className="span">T</span>
      <span className="text-wrapper-5">ARUN </span>
      <span className="span">C</span>
      <span className="text-wrapper-5">HOUDHARY</span>
    </p>
    <div className="div-wrapper">
      <div className="text-wrapper-6">I AM A</div>
    </div>
    <div className="text-wrapper-7">
    <TypeWriterEffect
    
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: 'yellow',
          fontWeight: 700,
          fontSize: '85px',
        }}
        startDelay={0
        }
        loop={true}
        cursorColor="yellow"
        multiText={[
          'DEVELOPER...',
          'DESIGNER...',
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
        deleteSpeed={100}
        />

      </div>
      
  </div>
  <div className="description">
    <p className="hello-i-m-tarun-a">
      Hello, I&#39;m Tarun, a dedicated professional with a love for creating visually stunning designs and
      seamless web experiences. With a unique blend of creativity and technical prowess, I bring ideas to life
      and turn visions into captivating digital realities.
    </p>
  </div>
  <div className="group">
            <div className="overlap-5">
             <div className="text-wrapper-8">HIRE ME</div>
            </div>
            <div className="text-wrapper-9">About Me</div>
          </div>
  <div className='dp'>
    <img className='dp-img' alt='dp' src={dp} />
  </div>
  </div>
  <div className='about social-links'>
    <div className='linkedIn'>
    <FaLinkedinIn />
    </div>
    <div className='github'>
    <FaGithub />
    </div>
    <div className='twitter'>
    <FaXTwitter />
    </div>  
  </div>
  </div>
 
  )
};

export default About;
