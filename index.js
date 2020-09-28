const witch = document.querySelector("#witch");
const witch2 = document.querySelector("#witch2");
    

const keyframes = [
    {transform: "translate(-100px, 200px)"},
    {transform: "translate(0px, 260px)"},
    {transform: "translate(100px, 310px)"},
    {transform: "translate(200px, 340px)"},
    {transform: "translate(300px, 340px)"},
    {transform: "translate(400px, 340px)"},
];
const keyframes2 = [
    {transform: "translate(1500px, 100px)"},
    {transform: "translate(1000px, 100px)"},
    {transform: "translate(500px, 100px)"},
];

const settings = {
    duration: 10000,
    fill: "forwards",
};
const fly = witch.animate(keyframes, settings);
const fly2 = witch2.animate(keyframes2, settings);