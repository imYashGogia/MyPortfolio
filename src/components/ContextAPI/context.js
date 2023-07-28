import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "E-commerce Website ",
        link: "/#",
        img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/gadgets.png",
        lang: "MERN Stack (Launching Soon)",
      },
      {
        id: 2,
        title: "College Website Project",
        link: "http://laipscollege.in/",
        img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/laips2.png",
        lang: "HTML, CSS, JS, REACT",
      },
      {
        id: 3,
        title: "College's Annual Fest Page",
        link: "https://iitmjp.ac.in/fiesta2k23/",
        img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/fiesta.png",
        lang: "HTML, CSS, JS",
      },
      {
        id: 4,
        title: "College's TECH Event Page",
        link: "https://imyashgogia.github.io/Techtonics/",
        img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/techtonics.png",
        lang: "HTML, CSS",
      },
      {
        id: 5,
        title: "Basic Survey Form ",
        link: "https://imyashgogia.github.io/Survey-Form/",
        img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/form.png",
        lang: "HTML, CSS",
      },
      {
        id: 6,
        title: "Product Landing Page ",
        link: "https://imyashgogia.github.io/Product-Landing-Page/",
        img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/landingpage.png",
        lang: "HTML, CSS",
      },
      {
        id: 7,
        title: "Tribute page",
        link: "https://imyashgogia.github.io/Tribute-Page/",
        img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/tributepage.png",
        lang: "HTML, CSS",
      },
      {
        id: 8,
        title: " Real Estate Webpage",
        link: "https://imyashgogia.github.io/real-estate-landing-page/",
        img: "https://imyashgogia.github.io/Portfolio/Assets/mockups/realestate.png",
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
        Little Angel Institute of Law`,
        test_img:
          "http://laipscollege.in/static/media/logo.92f475ad8377a5c0e480.png",
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
        test_img:
          "https://imyashgogia.github.io/Portfolio/Assets/certificates/iitmsign.png",
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
        name: "BootStrap 5",
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
        id: 7,
        name: "Python",
        // category: "backend",
        category: "software",
        imgurl: "https://img.freepik.com/free-icon/snakes_318-368381.jpg",
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
        id: 11,
        name: "Responsive Layout",
        category: "frontend",
        imgurl:
          "https://icon-library.com/images/icon-responsive/icon-responsive-9.jpg",
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
