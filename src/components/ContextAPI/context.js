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
const Context = React.createContext();

export class Provider extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "E-commerce Website ",
        link: "/ECOM-PROJECT",
        img: gadgets,
        lang: "MERN Stack (Launching Soon)",
      },
      {
        id: 2,
        title: "College Website Project",
        link: "http://laipscollege.in/",
        img: laips,
        lang: "HTML, CSS, JS, REACT",
      },
      {
        id: 3,
        title: "College's Annual Fest Page",
        link: "https://iitmjp.ac.in/fiesta2k23/",
        img: fiesta,
        lang: "HTML, CSS, JS",
      },
      {
        id: 4,
        title: "Tic-Tac-Toe Game",
        link: "https://imyashgogia.github.io/Tic-Tac-Toe-Game/",
        img: tictactoe,
        lang: "HTML, CSS, JS",
      },
      {
        id: 5,
        title: "Bubble Game",
        link: "https://imyashgogia.github.io/Bubble-Game/",
        img: bubblegame,
        lang: "HTML, CSS, JS",
      },
      {
        id: 6,
        title: "Random Password Generator",
        link: "https://imyashgogia.github.io/Random-Password-Generator/",
        img: passwordgenerator,
        lang: "HTML, CSS, JS",
      },
      {
        id: 7,
        title: "To Do List",
        link: "https://imyashgogia.github.io/TodoList/",
        img: todo,
        lang: "HTML, CSS, JS",
      },
      {
        id: 8,
        title: "Basic Calculator",
        link: "https://imyashgogia.github.io/Calculator/",
        img: calculator,
        lang: "HTML, CSS, JS",
      },
      {
        id: 9,
        title: "College's TECH Event Page ",
        link: "https://imyashgogia.github.io/Techtonics/",
        img: techtonics,
        lang: "HTML, CSS",
      },

      {
        id: 10,
        title: "Product Landing Page ",
        link: "https://imyashgogia.github.io/Product-Landing-Page/",
        img: landingpage,
        lang: "HTML, CSS",
      },
      {
        id: 11,
        title: "Tribute page",
        link: "https://imyashgogia.github.io/Tribute-Page/",
        img: tributepage,
        lang: "HTML, CSS",
      },
      {
        id: 12,
        title: " Real Estate Webpage",
        link: "https://imyashgogia.github.io/real-estate-landing-page/",
        img: realestate,
        lang: "HTML, CSS",
      },
      {
        id: 13,
        title: "Basic Survey Form ",
        link: "https://imyashgogia.github.io/Survey-Form/",
        img: form,
        lang: "HTML, CSS",
      },
    ],
    recommendationsData: [
      {
        id: 1,
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
        id: 2,
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
        id: 1,
        name: "HTML5",
        category: "frontend",
        imgurl:
          "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png",
      },
      {
        id: 2,
        name: "CSS",
        category: "frontend",
        imgurl:
          "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
      },
      {
        id: 3,
        name: "JS",
        category: "frontend",
        imgurl:
          "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
      },
      {
        id: 4,
        name: "BootStrap",
        category: "frontend",
        imgurl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
      },
      {
        id: 5,
        name: "React",
        category: "frontend",
        imgurl:
          "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
      },
      {
        id: 6,
        name: "NodeJS",
        category: "backend",
        imgurl:
          "https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png",
      },
      {
        id: 8,
        name: "C",
        category: "software",
        imgurl:
          "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
      },
      {
        id: 9,
        name: "C++",
        category: "software",
        imgurl: "https://www.freeiconspng.com/uploads/c--logo-icon-0.png",
      },
      {
        id: 10,
        name: "Git",
        category: "tools",
        imgurl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        id: 12,
        name: "MYSQL",
        category: "backend",
        imgurl:
          "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
      },
      {
        id: 13,
        name: "MongoDB",
        category: "backend",
        imgurl:
          "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png",
      },
      {
        id: 14,
        name: "Oracle",
        category: "backend",
        imgurl:
          "https://1000logos.net/wp-content/uploads/2021/04/Oracle-logo.png",
      },
      {
        id: 15,
        name: "VS Code",
        category: "tools",
        imgurl:
          "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
      },
      {
        id: 16,
        name: "Figma",
        category: "designing",
        imgurl:
          "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format",
      },
      {
        id: 17,
        name: "Canva",
        category: "designing",
        imgurl:
          "https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
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
