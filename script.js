const skills = document.getElementById("right");
const about = document.getElementById("left");
const middle = document.getElementById("middle");
const first = document.getElementById("first");
const middleTxt = document.getElementById("txt-1");
skills.addEventListener("mouseenter", ()=>{
    document.body.style.backgroundColor = 'rgb(189, 135, 239)';
    skills.classList.add("border-class");
    // skills.style = `width:25%;`;
    // middle.style = `width:20%`;
    // about.style= `width:20%`;

});
skills.addEventListener("mouseleave", ()=>{
    document.body.style.backgroundColor = 'white';
    // skills.style = "";
    // about.style = "";
    // middle.style = "";
    // first.style = '';
    skills.classList.remove("border-class");
});

about.addEventListener("mouseenter", ()=>{
    document.body.style.backgroundColor = 'rgb(255, 146, 164)';
    about.classList.add("border-class");
    // about.style = `width:25%;`;
    // middle.style = `width:20%`;
    // skills.style= `width:20%`;
});
about.addEventListener("mouseleave", ()=>{
    document.body.style.backgroundColor = 'white';
    about.classList.remove("border-class");
    // skills.style = ``;
    // middle.style = ``;
    // about.style= ``;
});