/* =========================================
   GALERI 30 FOTO
========================================= */

const photos = [];

for (let i = 1; i <= 30; i++) {

    photos.push(
        "images/foto" + i + ".jpg"
    );

}


/* =========================================
   DATA 30 KENANGAN
========================================= */

const memories = [

    {
        title: "Kenangan #01",
        category: "💗 AWAL CERITA",
        quote: "Kamu adalah salah satu alasan kenangan terasa begitu indah.",
        encouragement: "Jangan pernah menyerah. Kamu jauh lebih kuat dari yang kamu kira. ✨",
        pantun: "Jalan-jalan membeli melati,<br>Pulang membawa bunga.<br>Semoga bahagia selalu di hati,<br>Dan senyummu tak pernah hilang juga."
    },

    {
        title: "Kenangan #02",
        category: "🌷 SENYUM",
        quote: "Senyummu sederhana, tapi selalu berhasil membuat suasana menjadi lebih indah.",
        encouragement: "Tetaplah tersenyum meskipun hari ini terasa berat. Besok bisa menjadi lebih baik. 🌈",
        pantun: "Pergi pagi membawa payung,<br>Hujan turun di tengah jalan.<br>Senyummu memang paling menenangkan,<br>Semoga bahagia sepanjang zaman."
    },

    {
        title: "Kenangan #03",
        category: "✨ SEMANGAT",
        quote: "Aku percaya kamu bisa melewati semua hal yang sedang kamu perjuangkan.",
        encouragement: "Pelan-pelan saja. Tidak harus sempurna, yang penting jangan berhenti melangkah. 💪",
        pantun: "Ke taman membawa bunga,<br>Bunga indah berwarna merah.<br>Teruslah berjuang mengejar cita,<br>Karena kamu pasti bisa melangkah."
    },

    {
        title: "Kenangan #04",
        category: "💫 KENANGAN",
        quote: "Ada foto yang hanya menjadi gambar, tapi ada foto yang menyimpan begitu banyak cerita.",
        encouragement: "Semoga setiap langkahmu membawa kamu semakin dekat dengan impianmu. 🌟",
        pantun: "Burung kecil terbang tinggi,<br>Hinggap sebentar di atas dahan.<br>Semoga indah hari-hari nanti,<br>Dan bahagia selalu dalam perjalanan."
    },

    {
        title: "Kenangan #05",
        category: "💖 TENTANG KAMU",
        quote: "Terima kasih sudah menjadi bagian dari cerita yang begitu berharga.",
        encouragement: "Kamu pantas mendapatkan banyak hal baik dalam hidupmu. Jangan meragukan dirimu sendiri. 🌸",
        pantun: "Membeli bunga di hari Selasa,<br>Bunganya indah warna jingga.<br>Semoga selalu penuh bahagia,<br>Dan semua harapan menjadi nyata."
    },

    {
        title: "Kenangan #06",
        category: "🌙 MALAM",
        quote: "Seperti bintang di malam hari, semoga kamu selalu menemukan cahaya ketika keadaan terasa gelap.",
        encouragement: "Tidak apa-apa beristirahat. Setelah itu, ayo lanjutkan perjuanganmu lagi. 🌙",
        pantun: "Malam hari melihat bintang,<br>Bintang bersinar begitu terang.<br>Jika perjalanan terasa panjang,<br>Semoga langkahmu tetap tenang."
    },

    {
        title: "Kenangan #07",
        category: "🌸 MANIS",
        quote: "Hal-hal kecil terkadang justru menjadi kenangan yang paling sulit dilupakan.",
        encouragement: "Nikmati prosesmu. Kamu sedang bertumbuh menjadi versi terbaik dirimu. 💗",
        pantun: "Pergi ke pasar membeli pita,<br>Pita merah dibawa pulang.<br>Kejar terus semua cita-cita,<br>Jangan takut menghadapi tantangan."
    },

    {
        title: "Kenangan #08",
        category: "🦋 PERJALANAN",
        quote: "Setiap perjalanan memiliki ceritanya sendiri, dan setiap cerita memiliki keindahannya.",
        encouragement: "Percaya pada proses. Tidak semua hal harus terjadi dengan cepat. 🦋",
        pantun: "Kupu-kupu terbang ke taman,<br>Hinggap sebentar di bunga melati.<br>Teruslah melangkah perlahan,<br>Semoga damai selalu di hati."
    },

    {
        title: "Kenangan #09",
        category: "💞 CERITA",
        quote: "Kalau suatu hari melihat foto ini lagi, semoga kita masih tersenyum melihatnya.",
        encouragement: "Semoga hari-harimu dipenuhi orang-orang baik dan alasan untuk tersenyum. 😊",
        pantun: "Naik sepeda ke kota lama,<br>Berhenti sebentar membeli roti.<br>Semoga cerita terus bersama,<br>Menjadi kenangan di dalam hati."
    },

    {
        title: "Kenangan #10",
        category: "🌈 BAHAGIA",
        quote: "Kebahagiaan tidak selalu besar. Kadang cukup dengan sebuah senyum dan kenangan sederhana.",
        encouragement: "Jangan lupa menikmati hal-hal kecil yang membuatmu bahagia hari ini. 🌈",
        pantun: "Pergi berjalan membawa bekal,<br>Bekalnya roti dan buah delima.<br>Semoga bahagia tidak pernah gagal,<br>Datang menghiasi setiap harinya."
    },

    {
        title: "Kenangan #11",
        category: "💎 BERHARGA",
        quote: "Tidak semua orang bisa menjadi kenangan yang berharga, tapi kamu berhasil menjadi salah satunya.",
        encouragement: "Tetap rendah hati dan terus menjadi dirimu sendiri. Itu sudah cukup istimewa. 💎",
        pantun: "Pergi ke toko membeli kaca,<br>Kacanya indah berkilauan.<br>Tetap semangat mengejar cita,<br>Jangan menyerah pada keadaan."
    },

    {
        title: "Kenangan #12",
        category: "🌻 SENYUM",
        quote: "Semoga senyum yang ada di foto ini selalu menjadi bagian dari hari-harimu.",
        encouragement: "Kalau hari ini berat, ingat bahwa kamu sudah berhasil melewati banyak hari sebelumnya. 🌻",
        pantun: "Bunga matahari tumbuh tinggi,<br>Mekar indah terkena cahaya.<br>Semoga selalu kuat menjalani,<br>Dan bahagia sepanjang masa."
    },

    {
        title: "Kenangan #13",
        category: "💗 TERIMA KASIH",
        quote: "Terima kasih untuk setiap tawa, cerita, dan momen sederhana yang pernah ada.",
        encouragement: "Semoga kebaikan yang kamu berikan kembali kepadamu berkali-kali lipat. ✨",
        pantun: "Membawa buku ke sekolah,<br>Buku disimpan dalam tas.<br>Semoga hidupmu penuh berkah,<br>Dan semua impian menjadi jelas."
    },

    {
        title: "Kenangan #14",
        category: "⭐ IMPIAN",
        quote: "Semoga suatu hari nanti foto ini menjadi bukti bahwa kita pernah melewati masa yang indah.",
        encouragement: "Kejar mimpimu setinggi mungkin. Tidak ada mimpi yang terlalu jauh untuk diperjuangkan. ⭐",
        pantun: "Terbang tinggi burung merpati,<br>Melihat awan dari kejauhan.<br>Kejar terus mimpi di dalam hati,<br>Jangan takut menghadapi rintangan."
    },

    {
        title: "Kenangan #15",
        category: "🌷 INDAH",
        quote: "Ada sesuatu yang indah dari sebuah kenangan yang tidak bisa diulang.",
        encouragement: "Simpan yang baik sebagai pelajaran, dan lanjutkan perjalanan dengan penuh semangat. 🌷",
        pantun: "Pergi ke taman membawa kamera,<br>Memotret bunga warna-warni.<br>Semoga hidup penuh cerita,<br>Yang indah untuk dikenang nanti."
    },

    {
        title: "Kenangan #16",
        category: "💫 HARAPAN",
        quote: "Semoga semua harapan baik yang kamu simpan perlahan menemukan jalannya.",
        encouragement: "Tetap percaya bahwa sesuatu yang baik sedang menunggumu di depan. 💫",
        pantun: "Ke pasar membeli pepaya,<br>Pulangnya membawa rambutan.<br>Jangan berhenti berharap bahagia,<br>Karena harapan membawa kekuatan."
    },

    {
        title: "Kenangan #17",
        category: "🫶 CERITA",
        quote: "Mungkin waktu terus berjalan, tapi beberapa cerita akan tetap tinggal dalam ingatan.",
        encouragement: "Jalani hari ini sebaik mungkin. Masa depan sedang menunggu langkahmu. 🫶",
        pantun: "Pergi pagi membawa sepatu,<br>Berjalan jauh menuju kota.<br>Semoga cerita menjadi satu,<br>Dan selalu dikenang sepanjang masa."
    },

    {
        title: "Kenangan #18",
        category: "🌌 BINTANG",
        quote: "Semoga kamu selalu menemukan cahaya ketika perjalanan terasa terlalu panjang.",
        encouragement: "Kamu tidak harus tahu semua jawabannya sekarang. Cukup terus berjalan. 🌌",
        pantun: "Melihat bintang di langit malam,<br>Cahayanya terang bersinar indah.<br>Semoga hati selalu tenteram,<br>Dan hidup dipenuhi berkah."
    },

    {
        title: "Kenangan #19",
        category: "💖 MOMEN",
        quote: "Momen sederhana bisa berubah menjadi kenangan luar biasa ketika kita melihatnya kembali.",
        encouragement: "Hargai setiap momen kecil. Bisa jadi suatu hari nanti kamu akan merindukannya. 💖",
        pantun: "Membeli es di pinggir jalan,<br>Duduk sebentar menikmati rasa.<br>Semoga indah setiap perjalanan,<br>Dan bahagia selalu bersama."
    },

    {
        title: "Kenangan #20",
        category: "🌸 KAMU",
        quote: "Tetaplah menjadi seseorang yang membawa kebaikan ke mana pun kamu pergi.",
        encouragement: "Jangan berubah hanya untuk mendapatkan pengakuan. Jadilah versi terbaik dirimu. 🌸",
        pantun: "Bunga mawar bunga melati,<br>Tumbuh indah di halaman.<br>Jadilah baik sepenuh hati,<br>Semoga bahagia sepanjang zaman."
    },

    {
        title: "Kenangan #21",
        category: "✨ SENYUM MANIS",
        quote: "Satu senyuman bisa menjadi alasan sebuah hari terasa jauh lebih baik.",
        encouragement: "Semoga selalu ada alasan kecil yang membuatmu tersenyum setiap hari. ✨",
        pantun: "Pergi ke taman mencari bunga,<br>Bertemu kupu-kupu warna-warni.<br>Semoga selalu penuh bahagia,<br>Dan tersenyum dari dalam hati."
    },

    {
        title: "Kenangan #22",
        category: "💜 SEMANGAT",
        quote: "Kalau lelah, berhentilah sebentar. Tapi jangan pernah menganggap dirimu gagal.",
        encouragement: "Istirahat bukan berarti menyerah. Kamu hanya sedang mengumpulkan tenaga. 💜",
        pantun: "Pergi mendaki membawa bekal,<br>Bekalnya cukup untuk perjalanan.<br>Jika terasa berat dan gagal,<br>Bangkit lagi dan lanjutkan."
    },

    {
        title: "Kenangan #23",
        category: "🌷 KENANGAN",
        quote: "Beberapa kenangan tidak membutuhkan banyak kata untuk membuat kita tersenyum.",
        encouragement: "Semoga hari-harimu selalu memiliki cerita yang layak untuk dikenang. 🌷",
        pantun: "Pergi pagi membeli bunga,<br>Bunganya harum berwarna merah.<br>Semoga selalu hidup bahagia,<br>Dan jauh dari rasa menyerah."
    },

    {
        title: "Kenangan #24",
        category: "💎 ISTIMEWA",
        quote: "Setiap orang punya keistimewaan masing-masing. Jangan pernah membandingkan perjalananmu.",
        encouragement: "Jalanmu berbeda, waktumu berbeda, dan itu tidak apa-apa. 💎",
        pantun: "Pergi ke pantai melihat karang,<br>Air laut tampak membiru.<br>Jangan takut melangkah seorang,<br>Karena kamu tahu apa yang dituju."
    },

    {
        title: "Kenangan #25",
        category: "🌈 HARAPAN",
        quote: "Semoga masa depanmu penuh dengan hal-hal yang lebih indah dari kenangan ini.",
        encouragement: "Percayalah, masih banyak cerita indah yang belum kamu temukan. 🌈",
        pantun: "Pelangi muncul setelah hujan,<br>Warnanya indah menghiasi awan.<br>Teruslah punya banyak harapan,<br>Karena bahagia masih menunggu di depan."
    },

    {
        title: "Kenangan #26",
        category: "💗 LANGKAH",
        quote: "Satu langkah kecil hari ini bisa membawa kamu jauh lebih dekat dengan impian.",
        encouragement: "Tidak perlu terburu-buru. Yang penting kamu tetap bergerak maju. 💗",
        pantun: "Jalan kaki menuju taman,<br>Melihat bunga bermekaran.<br>Terus melangkah perlahan,<br>Hingga sampai tujuan impian."
    },

    {
        title: "Kenangan #27",
        category: "🌙 TENANG",
        quote: "Semoga hati kamu selalu menemukan ketenangan di tengah banyaknya kesibukan.",
        encouragement: "Jaga dirimu, jaga pikiranmu, dan jangan lupa memberi waktu untuk beristirahat. 🌙",
        pantun: "Malam tenang ditemani bulan,<br>Bintang muncul satu per satu.<br>Semoga hati selalu nyaman,<br>Dan bahagia menyertaimu."
    },

    {
        title: "Kenangan #28",
        category: "🦋 MASA DEPAN",
        quote: "Kita tidak tahu apa yang akan terjadi besok, tapi kita bisa membuat hari ini berarti.",
        encouragement: "Buat hari ini menjadi cerita yang suatu hari nanti ingin kamu ingat kembali. 🦋",
        pantun: "Kupu-kupu hinggap di bunga,<br>Terbang tinggi menuju taman.<br>Semoga masa depan penuh bahagia,<br>Dan indah dalam setiap perjalanan."
    },

    {
        title: "Kenangan #29",
        category: "💞 SELAMAT",
        quote: "Untuk semua hal yang sudah kamu lewati, kamu layak mendapatkan apresiasi.",
        encouragement: "Lihat seberapa jauh kamu sudah berjalan. Kamu hebat karena tetap berusaha. 💞",
        pantun: "Pergi ke pasar membeli mangga,<br>Mangga manis dibawa pulang.<br>Semoga sukses selalu menyapa,<br>Dan kebahagiaan terus datang."
    },

    {
        title: "Kenangan #30",
        category: "💗 AKHIR YANG INDAH",
        quote: "Ini mungkin foto terakhir di galeri ini, tapi semoga bukan akhir dari cerita indahmu.",
        encouragement: "Teruslah tersenyum, teruslah bermimpi, dan teruslah menjadi seseorang yang hebat. Sampai bertemu di cerita berikutnya. ✨",
        pantun: "Pergi jauh membawa bekal,<br>Melihat langit yang sangat indah.<br>Semoga hidupmu penuh hal baik,<br>Dan cerita yang selalu indah."
    }

];


/* =========================================
   AMBIL ELEMENT
========================================= */

const loadingScreen =
    document.getElementById("loadingScreen");

const introPage =
    document.getElementById("introPage");

const galleryPage =
    document.getElementById("galleryPage");

const startButton =
    document.getElementById("startButton");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const slideCard =
    document.getElementById("slideCard");

const memoryPhoto =
    document.getElementById("memoryPhoto");

const slideTitle =
    document.getElementById("slideTitle");

const currentNumber =
    document.getElementById("currentNumber");

const photoNumber =
    document.getElementById("photoNumber");

const category =
    document.getElementById("category");

const quote =
    document.getElementById("quote");

const encouragement =
    document.getElementById("encouragement");

const pantunText =
    document.getElementById("pantunText");

const progressBar =
    document.getElementById("progressBar");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const dots =
    document.getElementById("dots");


/* =========================================
   VARIABLE
========================================= */

let currentSlide = 0;

let musicPlaying = false;

let startX = 0;


/* =========================================
   LOADING
========================================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        loadingScreen.classList.add("hide");

    }, 2500);

});


/* =========================================
   START WEBSITE
========================================= */

startButton.addEventListener("click", function () {

    introPage.style.display = "none";

    galleryPage.classList.remove("hidden");

    createDots();

    updateSlide();

    createFloatingEmojis();

    tryAutoMusic();

});


/* =========================================
   DOT
========================================= */

function createDots() {

    dots.innerHTML = "";

    for (
        let i = 0;
        i < memories.length;
        i++
    ) {

        const dot =
            document.createElement("button");

        dot.className = "dot";

        dot.addEventListener(
            "click",
            function () {

                currentSlide = i;

                updateSlide();

            }
        );

        dots.appendChild(dot);

    }

}


/* =========================================
   UPDATE SLIDE
========================================= */

function updateSlide(direction) {

    const data =
        memories[currentSlide];


    if (direction === "next") {

        slideCard.classList.remove(
            "animate-left",
            "animate-right"
        );

        void slideCard.offsetWidth;

        slideCard.classList.add(
            "animate-left"
        );

    }


    if (direction === "previous") {

        slideCard.classList.remove(
            "animate-left",
            "animate-right"
        );

        void slideCard.offsetWidth;

        slideCard.classList.add(
            "animate-right"
        );

    }


    memoryPhoto.src =
        photos[currentSlide];

    memoryPhoto.alt =
        "Kenangan foto " +
        (currentSlide + 1);


    slideTitle.textContent =
        data.title;


    currentNumber.textContent =
        String(
            currentSlide + 1
        ).padStart(2, "0");


    photoNumber.textContent =
        String(
            currentSlide + 1
        ).padStart(2, "0");


    category.textContent =
        data.category;


    quote.textContent =
        data.quote;


    encouragement.textContent =
        data.encouragement;


    pantunText.innerHTML =
        data.pantun;


    progressBar.style.width =
        (
            ((currentSlide + 1) /
            memories.length) * 100
        ) + "%";


    previousButton.disabled =
        currentSlide === 0;


    nextButton.disabled =
        currentSlide ===
        memories.length - 1;


    updateDots();

}


/* =========================================
   UPDATE DOT
========================================= */

function updateDots() {

    const allDots =
        document.querySelectorAll(".dot");


    allDots.forEach(
        function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );

}


/* =========================================
   NEXT
========================================= */

nextButton.addEventListener(
    "click",
    function () {

        if (
            currentSlide <
            memories.length - 1
        ) {

            currentSlide++;

            updateSlide("next");

        }

    }
);


/* =========================================
   PREVIOUS
========================================= */

previousButton.addEventListener(
    "click",
    function () {

        if (currentSlide > 0) {

            currentSlide--;

            updateSlide("previous");

        }

    }
);


/* =========================================
   SWIPE HP
========================================= */

slideCard.addEventListener(
    "touchstart",
    function (event) {

        startX =
            event.touches[0].clientX;

    },
    {
        passive: true
    }
);


slideCard.addEventListener(
    "touchend",
    function (event) {

        const endX =
            event.changedTouches[0].clientX;

        const distance =
            endX - startX;


        if (
            Math.abs(distance) < 50
        ) {

            return;

        }


        if (distance < 0) {

            nextButton.click();

        } else {

            previousButton.click();

        }

    },
    {
        passive: true
    }
);


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            galleryPage.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextButton.click();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousButton.click();

        }

    }
);


/* =========================================
   MUSIC
========================================= */

music.volume = 0.7;


/*
   Kita coba autoplay ketika halaman
   sudah dibuka.

   Kalau browser menolak,
   TIDAK membuat loading berhenti.
*/

function tryAutoMusic() {

    if (!music) {
        return;
    }


    music.play()
        .then(function () {

            musicPlaying = true;

            musicButton.textContent =
                "🔊 Musik ON";

        })
        .catch(function () {

            musicPlaying = false;

            musicButton.textContent =
                "🎵 Musik";

        });

}


/*
   Coba autoplay setelah halaman selesai.
*/

window.addEventListener(
    "load",
    function () {

        setTimeout(
            tryAutoMusic,
            500
        );

    }
);


/*
   Kalau autoplay diblokir,
   sentuhan pertama akan mencoba
   memutar musik.
*/

function playMusicFromInteraction() {

    if (
        !music ||
        musicPlaying
    ) {

        return;

    }


    music.play()
        .then(function () {

            musicPlaying = true;

            musicButton.textContent =
                "🔊 Musik ON";

        })
        .catch(function () {

            console.log(
                "Autoplay musik diblokir browser."
            );

        });

}


/*
   Interaksi pertama.
*/

document.addEventListener(
    "touchstart",
    playMusicFromInteraction,
    {
        once: true,
        passive: true
    }
);


/*
   Tombol musik.
*/

musicButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        if (music.paused) {

            music.play()
                .then(function () {

                    musicPlaying = true;

                    musicButton.textContent =
                        "🔊 Musik ON";

                })
                .catch(function () {

                    alert(
                        "Musik belum bisa diputar. Pastikan music/lagu.mp3 ada."
                    );

                });

        } else {

            music.pause();

            musicPlaying = false;

            musicButton.textContent =
                "🔇 Musik OFF";

        }

    }
);


/* =========================================
   EMOJI
========================================= */

const emojiList = [

    "💗",
    "💖",
    "💕",
    "💞",
    "✨",
    "🌸",
    "🌷",
    "🦋",
    "⭐",
    "💫"

];


function createFloatingEmojis() {

    const container =
        document.getElementById(
            "floatingEmojis"
        );


    setInterval(
        function () {

            const emoji =
                document.createElement("div");


            emoji.className =
                "floating-emoji";


            emoji.textContent =
                emojiList[
                    Math.floor(
                        Math.random() *
                        emojiList.length
                    )
                ];


            emoji.style.left =
                Math.random() * 100 + "%";


            emoji.style.fontSize =
                (
                    14 +
                    Math.random() * 20
                ) + "px";


            emoji.style.animationDuration =
                (
                    5 +
                    Math.random() * 5
                ) + "s";


            container.appendChild(
                emoji
            );


            setTimeout(
                function () {

                    emoji.remove();

                },
                11000
            );


        },
        800
    );

}


/* =========================================
   FOTO ERROR
========================================= */

memoryPhoto.addEventListener(
    "error",
    function () {

        memoryPhoto.removeAttribute(
            "src"
        );

        memoryPhoto.alt =
            "Foto belum ditemukan";

        memoryPhoto.style.background =
            "#21132c";

    }
);