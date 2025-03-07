import React from 'react';
import { Code, Database, Layout, Server, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-10 h-10 text-indigo-600 mb-4" />,
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-10 h-10 text-indigo-600 mb-4" />,
      skills: ["Node.js", "Express", "Laravel", "Django", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <Database className="w-10 h-10 text-indigo-600 mb-4" />,
      skills: ["MySQL", "MongoDB", "Firebase","Redis","Supabase"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-10 h-5 text-indigo-600 mb-4" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Responsive Design"]
    },
    {
      title: "DevOps & Tools",
      icon: <Code className="w-10 h-10 text-indigo-600 mb-4" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Webpack"]
    },
    {
      title: "Other Skills",
      icon: <Globe className="w-10 h-10 text-indigo-600 mb-4" />,
      skills: ["UI/UX Design", "SEO", "Accessibility", " Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's an overview of my technical skills and areas of expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-indigo-600 h-2.5 rounded-full" 
                        style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 min-w-[80px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;