import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Card from './../reuseble-components/card/card';
import projectImg from '../../asset/project.svg';
import './project.styles.css';
import weather from '../../asset/weather.svg';
import streetFood from '../../asset/street-food.svg';
import covid from '../../asset/covid.svg';
import todoList from '../../asset/to-do-list.svg';
import medical from '../../asset/medical-report.png';
import healthCare from '../../asset/healthcare.png';
import gallery from '../../asset/gallery.png';
import { useEffect } from 'react';
const PROJECT_DETAILS = [
  
  {
    id: "A",
    imgUrl: medical,
    liveLink: 'https://covidmedicalresources.xyz/',
    githubLink: 'https://github.com/arnab15/covid-medical-resources-backend',
    title: 'Covid Medical Resources',
    description:
      'This application is build to find covid health resources during pandamic'
  },
  {
    id: "B",
    imgUrl: healthCare,
    liveLink: 'https://uhms-eb710.web.app/',
    githubLink: 'https://github.com/arnab15/UHMS-frontend',
    title: 'UHMS',
    description:
      'A health monitoring system for students who are coming back to their institutions'
  },
  {
    id: "A",
    imgUrl: gallery,
    liveLink: 'https://gallery-web.herokuapp.com/',
    githubLink: 'https://github.com/arnab15/covid-medical-resources-backend',
    title: 'GALLERY WEB',
    description:
      'It is a web gallery where user can upload their images and they can perform CRUD operatin on their images'
  },
  
  {
    id: 1,
    imgUrl: weather,
    liveLink: 'https://arnab-weather-application.herokuapp.com/',
    githubLink: 'https://github.com/arnab15/weather-webapp',
    title: 'Weather Web App',
    description:
      'NodeJs based  weather web app that can show weather forcast of certain location'
  },
  {
    id: 2,
    imgUrl: streetFood,
    liveLink: 'https://streetfoodreview.herokuapp.com/',
    githubLink: 'https://github.com/arnab15/street-food-review',
    title: 'Street food Review Web App',
    description:
      'NodeJs and mongoDb based  web app where user can give review in existing street food and also they can create a food for review'
  },
  {
    id: 3,
    imgUrl: covid,
    liveLink: 'https://shrimpy-hydrometers.000webhostapp.com/',
    githubLink: 'https://github.com/arnab15/covid-19-tracker',
    title: 'Covid 19 tracker',
    description:
      'HTML, CSS ,JavaScript based covid 19 tracker that can show the total no of cases , active cases ,etc'
  },
  {
    id: 4,
    imgUrl: todoList,
    liveLink: '',
    githubLink:
      'https://github.com/arnab15/task-mangement-webapplication',
    title: 'Todo list Backend api ',
    description:
      "created a todo list or task management system's backend API service using nodejs and mongodb"
  }
];
const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='container my-5' id='project'>
      <div className='row my-5'>
        <div data-aos='fade-left' className='col-md-6'>
          <img
            className='project-header-img'
            src={projectImg}
            alt=''
          />
        </div>
        <div data-aos='fade-right' className='col-md-6 text-center'>
          <h2 className='font-weight-bold'>Projects</h2>
          <h4>
            My projects makes use of vast variety of latest technology
            tools. My best experience is to create ReactJs and NodeJs
            projects and deploy them to web using cloud
            infrastructure.
          </h4>
        </div>
      </div>
      <br />
      <div className='row'>
        {PROJECT_DETAILS.map((project) => (
          <div
            data-aos='fade-up-right'
            key={project.id}
            className='col-md-6'>
            <Card
              key={project.title}
              imgUrl={project.imgUrl}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              title={project.title}
              description={project.description}
            />
          </div>
        ))}
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Project;
