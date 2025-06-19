import React from 'react';
import About_temp from "@/components/about/about_temp";
import CompanyPhilosophy from "@/components/about/companyPhilosophy";

const About = () => {
    return (
        <div id="about">
         <div className='hidden lg:block'>
            <About_temp />
            <CompanyPhilosophy />
          </div>
          <div className='lg:hidden block'>
                <CompanyPhilosophy />
                <About_temp />
          </div>
        </div>

    );
};

export default About;