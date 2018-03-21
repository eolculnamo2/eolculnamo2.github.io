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
                title: "Game of Life",
                image: "assets/gol.png",
                github: "https://codepen.io/eolculnamo2/pen/XeKXpY",
                view: "https://codepen.io/eolculnamo2/full/XeKXpY/",
                seeAt: "Codepen"
            },
            {
                title: "Git Profile Viewer",
                image: "assets/git-profile.png",
                github: "https://github.com/eolculnamo2/github-profile-viewer",
                view: "https://future-store.glitch.me/",
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
    methods: {
        scroll: function(x){
            document.getElementById(x).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }        
    }
})