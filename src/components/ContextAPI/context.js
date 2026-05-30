import React, { Component } from "react";
import gadgets from "../Assets/mockups/gadgets.png";
import laips from "../Assets/mockups/laips2.png";
import fiesta from "../Assets/mockups/fiesta.png";
import techtonics from "../Assets/mockups/techtonics.png";
import form from "../Assets/mockups/form.png";
import landingpage from "../Assets/mockups/landingpage.png";
import realestate from "../Assets/mockups/realestate.png";
import tributepage from "../Assets/mockups/tributepage.png";
import passwordgenerator from "../Assets/mockups/password.png";
import calculator from "../Assets/mockups/calculator.png";
import todo from "../Assets/mockups/todo.png";
import tictactoe from "../Assets/mockups/tictactoe.png";
import bubblegame from "../Assets/mockups/bubblegame.png";
import iitmsign from "../Assets/certificates/iitmsign.png";
import laipslogo from "../Assets/certificates/laips.png";
import htmllogo from "../Assets/Logos/htmllogo.png";
import csslogo from "../Assets/Logos/csslogo.png";
import jslogo from "../Assets/Logos/javascriptlogo.png";
import bootstraplogo from "../Assets/Logos/Bootstraplogo.png";
import reactlogo from "../Assets/Logos/reactlogo.png";
import nodejslogo from "../Assets/Logos/nodejslogo.png";
import expressjslogo from "../Assets/Logos/expressjslogo.png";
import pythonlogo from "../Assets/Logos/pythonlogo.png";
import gitlogo from "../Assets/Logos/gitlogo.png";
import sqllogo from "../Assets/Logos/sqllogo.png";
import Oraclelogo from "../Assets/Logos/Oraclelogo.png";
import vscodelogo from "../Assets/Logos/vscodelogo.png";
import dockerlogo from "../Assets/Logos/dockerlogo.png";
import jenkinslogo from "../Assets/Logos/jenkinslogo.png";
import databrickslogo from "../Assets/Logos/databrickslogo.png";
import seleniumlogo from "../Assets/Logos/seleniumlogo.png";
import cucumberlogo from "../Assets/Logos/cucumberlogo.svg";
import nightwatchlogo from "../Assets/Logos/nightwatchlogo.png";
import jiralogo from "../Assets/Logos/Jira_Logo.png";
import githublogo from "../Assets/Logos/githublogo.svg";
import gitlablogo from "../Assets/Logos/gitlablogo.webp";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    projects: [
      {
        title: "E-commerce Website ",
        link: "/ECOM-PROJECT",
        img: gadgets,
        lang: "MERN Stack (Launching Soon)",
      },
      {
        title: "College Website Project",
        link: "https://imyashgogia.netlify.app/*",
        img: laips,
        lang: "HTML, CSS, JS, REACT",
      },
      {
        title: "College's Annual Fest Page",
        link: "https://iitmjp.ac.in/fiesta2k23/",
        img: fiesta,
        lang: "HTML, CSS, JS",
      },
      {
        title: "Tic-Tac-Toe Game",
        link: "https://imyashgogia.github.io/Tic-Tac-Toe-Game/",
        img: tictactoe,
        lang: "HTML, CSS, JS",
      },
      {
        title: "Bubble Game",
        link: "https://imyashgogia.github.io/Bubble-Game/",
        img: bubblegame,
        lang: "HTML, CSS, JS",
      },
      {
        title: "Random Password Generator",
        link: "https://imyashgogia.github.io/Random-Password-Generator/",
        img: passwordgenerator,
        lang: "HTML, CSS, JS",
      },
      {
        title: "To Do List",
        link: "https://imyashgogia.github.io/TodoList/",
        img: todo,
        lang: "HTML, CSS, JS",
      },
      {
        title: "Basic Calculator",
        link: "https://imyashgogia.github.io/Calculator/",
        img: calculator,
        lang: "HTML, CSS, JS",
      },
      {
        title: "College's TECH Event Page ",
        link: "https://imyashgogia.github.io/Techtonics/",
        img: techtonics,
        lang: "HTML, CSS",
      },
      {
        title: "Product Landing Page ",
        link: "https://imyashgogia.github.io/Product-Landing-Page/",
        img: landingpage,
        lang: "HTML, CSS",
      },
      {
        title: "Tribute page",
        link: "https://imyashgogia.github.io/Tribute-Page/",
        img: tributepage,
        lang: "HTML, CSS",
      },
      {
        title: " Real Estate Webpage",
        link: "https://imyashgogia.github.io/real-estate-landing-page/",
        img: realestate,
        lang: "HTML, CSS",
      },
      {
        title: "Basic Survey Form ",
        link: "https://imyashgogia.github.io/Survey-Form/",
        img: form,
        lang: "HTML, CSS",
      },
    ],
    recommendationsData: [
      {
        message:
          "I am writing this to express our deepest gratitude and appreciation for the outstanding work you did in creating our website.",
        name: "LAIPS College",
        testimonial: `To Yash Gogia,
        I am writing this to express our deepest gratitude and appreciation for the outstanding work you did in creating our website. Your expertise and dedication have truly exceeded our expectations, and we couldn't be happier with the results.
        From the very beginning, you demonstrated a keen understanding of our vision for the website. Your ability to translate our ideas into a visually stunning and user-friendly design was remarkable. The modern and intuitive interface you crafted perfectly encapsulates our brand's identity, making it a pleasure for our visitors to explore our products and services.
        Throughout the development process, your professionalism and responsiveness were exceptional. You consistently kept us informed about the project's progress and eagerly incorporated our feedback, ensuring that the final product aligned perfectly with our vision.
        Your technical expertise and problem-solving skills are truly commendable. Any challenges that arose during the project were met with diligence and creativity, resulting in a website that not only meets but surpasses our expectations.
        Working with you has been an absolute pleasure. Your friendly and approachable demeanor made communication effortless, and your ability to explain complex technical concepts in a clear and understandable manner was invaluable.
        We wholeheartedly recommend your services to anyone seeking a skilled and reliable web developer. Your passion for your work and commitment to client satisfaction are evident in every aspect of the website you created for us.
        Once again, thank you for your exceptional work. The impact of the website on our business has been immeasurable, and we are confident that it will continue to drive our success in the future.
        
        Best regards,
        Pinki Singhania
        Little Angel Institute of Professional Studies`,
        test_img: laipslogo,
      },
      {
        message: `Yash Gogia student of IINTM college has worked under me on the "FIESTA 2K23" website project for the college, and I must say, I am thoroughly impressed.`,
        name: "IINTM College",
        testimonial: `Yash Gogia student of IINTM college has worked under me on the "FIESTA 2K23" website project for the college, and I must say, I am thoroughly impressed. As a college student myself, I understand the challenges that come with juggling academic responsibilities and extracurricular projects, but he managed to excel in both areas.
        He possesses a remarkable passion for web development, his enthusiasm was infectious which is reflected in his quality of work. He was receptive to my ideas and suggestions, and even brought his own creative input, which significantly enhanced the overall design and functionality of the website.

        What sets him apart is his dedication and determination to deliver a top-notch product. Despite the tight timeline, he was able to consistently meet deadlines and ensured that the "FIESTA 2K23" website was not only visually appealing but also user-friendly and responsive across various devices.
        Communication with him was seamless throughout the project. He was always approachable and responded promptly to any queries I had. His professionalism and positive attitude made the collaboration a delightful experience.
        I have no hesitation in recommending Yash for any web development projects. His talent and commitment are evident in his work, and I have no doubt he will continue to achieve great things in his future endeavours.

        Regards
        Akshay Kumar (Assistant Professor)  
        Institute of Innovation in Technology and Management (IINTM)`,
        test_img: iitmsign,
      },
    ],
    skills: [
      {
        name: "HTML5",
        category: "frontend",
        imgurl: htmllogo,
      },
      {
        name: "CSS",
        category: "frontend",
        imgurl: csslogo,
      },
      {
        name: "JavaScript",
        category: "frontend",
        imgurl: jslogo,
      },
      {
        name: "BootStrap",
        category: "frontend",
        imgurl: bootstraplogo,
      },
      {
        name: "React",
        category: "frontend",
        imgurl: reactlogo,
      },
      {
        name: "NodeJS",
        category: "backend",
        imgurl: nodejslogo,
      },
      {
        name: "ExpressJS",
        category: "backend",
        imgurl: expressjslogo,
      },
      {
        name: "MYSQL",
        category: "backend",
        imgurl: sqllogo,
      },
      {
        name: "MongoDB",
        category: "backend",
        imgurl:
          "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png",
      },
      {
        name: "Oracle",
        category: "backend",
        imgurl: Oraclelogo,
      },
      {
        name: "Python",
        category: "data_eng",
        imgurl: pythonlogo,
      },
      {
        name: "Databricks",
        category: "data_eng",
        imgurl: databrickslogo,
      },
      {
        name: "Selenium",
        category: "automation",
        imgurl: seleniumlogo,
      },
      {
        name: "Cucumber",
        category: "automation",
        imgurl: cucumberlogo,
      },
      {
        name: "Nightwatch.js",
        category: "automation",
        imgurl: nightwatchlogo,
      },
      {
        name: "Git",
        category: "devops",
        imgurl: gitlogo,
      },
      {
        name: "Docker",
        category: "devops",
        imgurl: dockerlogo,
      },
      {
        name: "Jenkins",
        category: "devops",
        imgurl: jenkinslogo,
      },
      {
        name: "VS Code",
        category: "tools",
        imgurl: vscodelogo,
      },
      {
        name: "Github",
        category: "tools",
        imgurl: githublogo,
      },
      {
        name: "Gitlab",
        category: "tools",
        imgurl: gitlablogo,
      },
      {
        name: "Jira",
        category: "tools",
        imgurl: jiralogo,
      },
    ],
  };
  render() {
    return (
      // Provider is used for that file which provides all data to components
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
// Consumer is used by the components seperately
export const Consumer = Context.Consumer;
