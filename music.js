const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const img=document.querySelector("img");
const music=document.querySelector("audio");

const songs=[
    {
        name:"Dil Ibaadat",
        title:"song1",
        artist:"KK",
    },
    {
        name:"Haan Tu Hain",
        title:"song2",
        artist:"Arijit",
    },
    {
        name:"Phir Mohabbat",
        title:"song3",
        artist:"Md Irfan",
    }
]
let isPlaying=false;

//for play function
const playMusic=()=>{
   isPlaying=true;
   music.play();
   play.classList.replace("fa-play","fa-pause");
   img.classList.add("anime");
};

// for pause function
const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.add("anime");
 };

 play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic()
    }else{
        playMusic();
    }
 });
 //changing the next music
const loadsong=(songs)=>{
   title.textContent=songs.title;
   artist.textContent=songs.artist;
   music.src=`${songs.name}.mp3`;
//    img.src=`${songs.name}.jpeg`;
}
// loadsong(songs[2]);
songIndex=0;

const nextsong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadsong(songs[songIndex]);
};

next.addEventListener('click',nextsong);
prev.addEventListener('click',prevsong)




