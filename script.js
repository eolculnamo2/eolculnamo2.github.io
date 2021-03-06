new Vue ({
    el: "#app",
    data: {
        cards: [
            {
                title: "Recommended Books",
                image: "assets/bookapp.png",
                github: "https://github.com/eolculnamo2/bookapp/",
                view: "https://afternoon-mesa-31962.herokuapp.com/",
                seeAt: "GitHub"
            },
            {
                title: "Sword-Point",
                image: "assets/sword-point.png",
                github: "https://www.github.com/eolculnamo2/hema-site",
                view: "https://www.sword-point.com",
                seeAt: "GitHub"
            },
            {
                title: "Issue Tracker",
                image: "assets/issue-tracker.png",
                github: "https://github.com/eolculnamo2/fccIssueTracker",
                view: "https://road-verse.glitch.me/",
                seeAt: "GitHub"
            },
            {
                title: "Game of Life",
                image: "assets/gol.png",
                github: "https://codepen.io/eolculnamo2/pen/XeKXpY",
                view: "https://codepen.io/eolculnamo2/full/XeKXpY/",
                seeAt: "Codepen"
            },
            {
                title: "JTrac Clone",
                image: "assets/JTrac Clone.png",
                github: "https://github.com/eolculnamo2/ReactTrac",
                view: "https://learned-parallelogram.glitch.me/",
                seeAt: "GitHub"
            },
            {
                title: "Wikipedia Vue-er",
                image: "assets/wiki-vue.png",
                github: "https://github.com/eolculnamo2/WikipediaViewer/",
                view: "https://juniper-cormorant.glitch.me/",
                seeAt: "GitHub"
            },
            {
                title: "Heat Map",
                image: "assets/heat-map.png",
                github: "https://codepen.io/eolculnamo2/pen/XeqjBM",
                view: "https://codepen.io/eolculnamo2/full/XeqjBM/",
                seeAt: "Codepen"
            }
        ]
    },
    created: function(){
        window.addEventListener("click",(e)=>{
            if(e.target.className != "mobile-menu" && window.innerWidth <= 650){
                menu.style.position="static"
                menu.style.display="none"
            }
        })
        window.addEventListener("resize",()=>{
            if(window.innerWidth > 650){
                menu.style.position = "absolute";
                menu.style.display = "flex";
            }
            else{
                menu.style.position="static"
                menu.style.display="none"
            }
        })
    },
    methods: {
        scroll: function(x){
            document.getElementById(x).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        },
        showMenu: function(){
           var menu = document.getElementById("menu");
           menu.style.position = "absolute";
           menu.style.display = "block";

            menu.addEventListener("click",()=>{
                menu.style.position="static"
                menu.style.display="none"
            })
           window.addEventListener("scroll",()=>{
                menu.style.position="static"
                menu.style.display="none"
            })

        }
    }
})
