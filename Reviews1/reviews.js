var image1 = document.getElementById("imgs");
var name1 = document.getElementById("name");
var hobby1 = document.getElementById("hobby");
var myself1 = document.getElementById("myself");
var btns = document.getElementById("suprise");

reviews = [
    {
        id:0,
        image1:"C:/Users/farha/OneDrive/Desktop/Reviews1/farhan.jfif",
        name1:"Farhan Kolad",
        hobby1:"Web Developer",
        myself1:"Anyone can become a web developer. You don't need to be a tech wizard or possess a never-ending list of formal qualifications; as long as you're passionate about the field and willing to learn, a career in web development is well within your reach."
    },
    {
        id:1,
        image1:"C:/Users/farha/OneDrive/Desktop/Reviews1/photo1.jpg",
        name1:"Anuj Kumar",
        hobby1:"Photographer",
        myself1:"A photographer is someone who is skilled at taking pictures or photographs with a camera. An amateur photographer takes pictures for their own use. A professional photographer takes pictures as all or part of their job. Many people hire a photographer for their wedding, debutante party or other special events.",
    },
    {
        id:2,
        image1:"C:/Users/farha/OneDrive/Desktop/Reviews1/photo2.jpg",
        name1:"George Pattinson",
        hobby1:"Hacker",
        myself1:"A hacker is an individual who uses computer, networking or other skills to overcome a technical problem. The term also may refer to anyone who uses their abilities to gain unauthorized access to systems or networks in order to commit crimes.",
    },
    {
        id:3,
        image1:"C:/Users/farha/OneDrive/Desktop/Reviews1/photo3.jpg",
        name1:"Christian Bale",
        hobby1:"Wanderlust",
        myself1:"An explorer's wanderlust is for the future and based entirely on the unknown and the desire to know it. The explorer's wanderlust drives the Magellans and Armstrongs of our world. It is the desire for freedom, and for knowledge, and for the expansion of civilization.",
    },
]

let currentitem = 0;

function suprise (){
    item = reviews[currentitem];
    image1.src = item.image1;
    name1.textContent = item.name1;
    hobby1.textContent = item.hobby1;
    myself1.textContent = item.myself1;
}

//window.addEventListener("DOMContentLoaded",suprise())

btns.addEventListener("click", function(){
    currentitem = Math.floor(Math.random() * reviews.length);
    suprise();
    //console.log(currentitem);
})