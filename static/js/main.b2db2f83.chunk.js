(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(32)},19:function(e,a,t){},20:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),o=(t(19),t(20),t(1));var s=function(){return l.a.createElement("header",{className:"Header ",id:"home"},l.a.createElement("div",{className:"Header__background container"},l.a.createElement("div",{className:"Header__box"},l.a.createElement(o.Bounce,{top:!0,cascade:!0},l.a.createElement("h1",{className:"Header__title"},"Hello, I'm Oleg Obiukh")),l.a.createElement(o.Flip,null,l.a.createElement("p",{className:"Header__text"},"Front end developer")))))};var i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"checkbox",id:"burger",className:"burger"}),l.a.createElement("label",{htmlFor:"burger",className:"burger-icon"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"nav__wrapper"},l.a.createElement("ul",{className:"nav__menu"},l.a.createElement("li",{className:"nav__item"},l.a.createElement("a",{href:"#home",className:"nav__link"},"home")),l.a.createElement("li",{className:"nav__item"},l.a.createElement("a",{href:"#about",className:"nav__link"},"about")),l.a.createElement("li",{className:"nav__item"},l.a.createElement("a",{href:"#projects",className:"nav__link"},"projects")),l.a.createElement("li",{className:"nav__item"},l.a.createElement("a",{href:"#contacts",className:"nav__link"},"contacts"))))))},m=t(5),u=t(6),d=t(8),h=t(7),E=t(9),p=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={skills:null},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/olegobiukh/other/master/portfolio/obiukh-portfolio-api.json").then(function(e){return e.json()}).then(function(a){return e.setState({skills:a.skills})})}},{key:"render",value:function(){var e=this.state.skills;return l.a.createElement("section",{className:"About",id:"about"},l.a.createElement("div",{className:"About__background"},l.a.createElement("div",{className:"wrapper container"},l.a.createElement(o.Slide,{left:!0},l.a.createElement("div",{className:"About__container"},l.a.createElement("h2",{className:"About__title"},"About me"),l.a.createElement("p",{className:"About__text"},"I am a result and process oriented person with strong theoretical background and good practical experience in Web development. I have extensive knowledge of HTML/CSS, Javascript and React. I am thorough and precise in everything I do, and have a keen interest in technology, mobile applications and user experience."),l.a.createElement("a",{className:"About__link",href:"https://raw.githubusercontent.com/olegobiukh/other/master/portfolio/resume/olegobiukh_resume.pdf",download:!0},l.a.createElement("i",{className:"fas fa-download"}," Download resume")))),l.a.createElement("div",{className:"Skill"},e&&e.map(function(e){var a={backgroundImage:"url(https://raw.githubusercontent.com/olegobiukh/other/master/portfolio/background/skills/".concat(e,".png)")};return l.a.createElement(o.Zoom,{top:!0,key:e},l.a.createElement("span",{style:a,className:"Skill__item",title:e.toUpperCase()}))})))))}}]),a}(n.Component);var _=function(){return l.a.createElement("footer",{className:"Footer",id:"contacts"},l.a.createElement("div",{className:"wrapper container"},l.a.createElement(o.Slide,{bottom:!0},l.a.createElement("div",{className:"Footer__social container "},l.a.createElement("a",{href:"https://github.com/olegobiukh",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github-square"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/oleg-obiukh-237362139/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin"})))),l.a.createElement("div",{className:"Footer__text"},l.a.createElement(o.Slide,{bottom:!0},l.a.createElement("p",null,"+38 (099) 531 39 54"),l.a.createElement("p",null,"oleg.obiukh@gmail.com"),l.a.createElement("p",null,"Oleg Obiukh \xa92019")))))},b=function(e){var a=e.handleClick,t=e.title,n=e.classes;return l.a.createElement("button",{className:n,onClick:function(){return a(t)}},t)};var f=function(e){var a=e.handleClick;return l.a.createElement("div",{className:"Toolbar container"},l.a.createElement(b,{classes:"Btn Btn__all",handleClick:a,title:"all"}),l.a.createElement(b,{classes:"Btn Btn__fe",handleClick:a,title:"fe"}),l.a.createElement(b,{classes:"Btn Btn__js",handleClick:a,title:"js"}),l.a.createElement(b,{classes:"Btn Btn__react",handleClick:a,title:"react"}),l.a.createElement(b,{classes:"Btn Btn__redux",handleClick:a,title:"redux"}))},k=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={data:[],title:"all"},t.handleClick=function(e){t.setState({title:e})},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/olegobiukh/other/master/portfolio/obiukh-portfolio-api.json").then(function(e){return e.json()}).then(function(a){return e.setState({data:a})})}},{key:"render",value:function(){var e=this.state,a=e.title,t=e.data,n=[];return t&&(n="all"===a?t.projects:t.projects.filter(function(e){return e.tech===a})),l.a.createElement("section",{className:"Projects",id:"projects"},l.a.createElement("div",{className:"Projects__background"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(o.Bounce,{top:!0,cascade:!0},l.a.createElement("h2",{className:"Projects__title"},"Projects")),l.a.createElement(o.Zoom,null,l.a.createElement(f,{handleClick:this.handleClick})),l.a.createElement("div",{className:"Projects__box grids"},l.a.createElement(l.a.Fragment,null,n&&n.map(function(e){return l.a.createElement(o.Zoom,{key:e.view},l.a.createElement("div",{className:"card-container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{style:{backgroundImage:"url(".concat(e.img,")")},className:"side bgColor__".concat(e.tech)}),l.a.createElement("div",{className:"side back"},l.a.createElement("h2",{className:"card__title"},l.a.createElement("a",{href:e.view,target:"_blank",rel:"noopener noreferrer",className:"card__link"},e.name),l.a.createElement("br",null),l.a.createElement("span",{className:"card__additional-info"},e["additional info"]))))))}))))))}}]),a}(n.Component);var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement(s,null),l.a.createElement(p,null),l.a.createElement(k,null),l.a.createElement(_,null))},g=document.getElementById("root");c.a.render(l.a.createElement(v,null),g)}},[[13,1,2]]]);
//# sourceMappingURL=main.b2db2f83.chunk.js.map