import React from 'react';
import { Award, Calendar, MapPin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" 
              alt="Working on laptop" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with 1 year of experience creating web applications 
              that deliver exceptional user experiences. I specialize in both frontend and backend 
              development, with a strong focus on modern JavaScript frameworks.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              My journey in web development started when I built my first website at 19. Since then, 
              I'm constantly learning new technologies and methodologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <MapPin size={20} className="text-indigo-600 mr-2" />
                <span>Cagayan de Oro City, PH</span>
              </div>
              <div className="flex items-center">
                <Award size={20} className="text-indigo-600 mr-2" />
                <span>Information Technology,
                  <br /> Southern Philippines College</span>
              </div>
              <div className="flex items-center">
                <Calendar size={20} className="text-indigo-600 mr-2" />
                <span>1 Year Experience</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-indigo-600 mr-2" />
                <span>nickbrianbalanay@gmail.com</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors inline-block"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;