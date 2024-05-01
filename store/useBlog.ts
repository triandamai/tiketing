export const useBlog = defineStore<string,{
    search:string,
    content:Array<{img:string,title:string,subtitle:string,advanced:boolean,duration:string}>
},{},{}>("blog",{
    state:()=>({
        search:"",
        content:[
            {
                img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png',
                title: 'The Sci-Fi Shooter Experience',
                subtitle: 'Dive into a futuristic world of intense battles and alien encounters.',
                advanced: false,
                duration: '8 minutes',
            },
            {
                img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png',
                title: 'Epic Adventures in Open Worlds',
                subtitle: 'Embark on a journey through vast, immersive landscapes and quests.',
                advanced: true,
                duration: '10 minutes',
            },
            {
                img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png',
                title: 'Surviving the Space Station Horror',
                subtitle: 'Navigate a haunted space station in this chilling survival horror game.',
                advanced: false,
                duration: '9 minutes',
            },
            {
                img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png',
                title: 'Neon-Lit High-Speed Racing Thrills',
                subtitle: 'Experience adrenaline-pumping races in a futuristic, neon-soaked city.',
                advanced: true,
                duration: '12 minutes',
            },
            {
                img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png',
                title: 'Retro-Style Platformer Adventures',
                subtitle: 'Jump and dash through pixelated worlds in this classic-style platformer.',
                advanced: false,
                duration: '11 minutes',
            },
            {
                img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png',
                title: 'Medieval Strategic War Campaigns',
                subtitle: 'Lead armies into epic battles and conquer kingdoms in this strategic game.',
                advanced: true,
                duration: '10 minutes',
            },
            {
                img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png',
                title: 'Underwater VR Exploration Adventure',
                subtitle: 'Dive deep into the ocean and discover the mysteries of the underwater world.',
                advanced: true,
                duration: '11 minutes',
            },
            {
                img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
                title: '1920s Mystery Detective Chronicles',
                subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
                advanced: false,
                duration: '9 minutes',
            },
        ]
    }),
    getters:{},
    actions:{}
})