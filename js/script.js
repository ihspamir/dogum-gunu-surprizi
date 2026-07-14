/* ===========================
   NESNELER
=========================== */

const album = document.getElementById("album");
const clock = document.getElementById("clock");
const letter = document.getElementById("letter");
const key = document.getElementById("key");

/* ===========================
   MODALLAR
=========================== */

const albumModal = document.getElementById("albumModal");
const clockModal = document.getElementById("clockModal");
const letterModal = document.getElementById("letterModal");

/* ===========================
   AÇMA
=========================== */

album.addEventListener("click",()=>{

    albumModal.classList.remove("hidden");

});

clock.addEventListener("click",()=>{

    clockModal.classList.remove("hidden");

});

letter.addEventListener("click",()=>{

    letterModal.classList.remove("hidden");

});

/* ===========================
   KAPATMA
=========================== */

document.querySelectorAll(".close").forEach(button=>{

    button.addEventListener("click",()=>{

        const id = button.dataset.close;

        document.getElementById(id).classList.add("hidden");

    });

});

/* ===========================
   DIŞARI TIKLAYINCA KAPAT
=========================== */

window.addEventListener("click",(e)=>{

    if(e.target===albumModal){

        albumModal.classList.add("hidden");

    }

    if(e.target===clockModal){

        clockModal.classList.add("hidden");

    }

    if(e.target===letterModal){

        letterModal.classList.add("hidden");

    }

});
/* ===========================
   ALBÜM
=========================== */

const memories = [

    {
        image:"https://files.catbox.moe/1.jpg",
        text:"Birinci anımız ❤️"
    },

    {
        image:"https://files.catbox.moe/2.jpg",
        text:"İkinci anımız ❤️"
    },

    {
        image:"https://files.catbox.moe/3.jpg",
        text:"Üçüncü anımız ❤️"
    },

    {
        image:"https://files.catbox.moe/4.jpg",
        text:"Dördüncü anımız ❤️"
    }

];

let currentMemory = 0;

const memoryImage = document.getElementById("memoryImage");
const memoryText = document.getElementById("memoryText");
const pageNumber = document.getElementById("pageNumber");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function loadMemory(){

    memoryImage.src = memories[currentMemory].image;

    memoryText.textContent = memories[currentMemory].text;

    pageNumber.textContent =
    `${currentMemory+1} / ${memories.length}`;

}

loadMemory();

nextBtn.addEventListener("click",()=>{

    currentMemory++;

    if(currentMemory>=memories.length){

        currentMemory=0;

    }

    loadMemory();

});

prevBtn.addEventListener("click",()=>{

    currentMemory--;

    if(currentMemory<0){

        currentMemory=memories.length-1;

    }

    loadMemory();

});

album.addEventListener("click",()=>{

    loadMemory();

});
/* ===========================
   ANAHTAR
=========================== */

const videoContainer = document.getElementById("videoContainer");
const birthdayVideo = document.getElementById("birthdayVideo");
const videoEnd = document.getElementById("videoEnd");

key.addEventListener("click",()=>{

    // Videoyu görünür yap
    videoContainer.classList.add("show");

    // 1.5 saniye sonra videoyu başlat
    setTimeout(()=>{

        birthdayVideo.play();

    },1500);

});

birthdayVideo.addEventListener("ended",()=>{

    videoEnd.classList.remove("hidden");

});