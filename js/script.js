const titles = document.getElementsByTagName('figcaption')
const bingkai = document.getElementsByTagName('picture')
const simpan = document.querySelector('.simpan')

const imgs = document.querySelectorAll('.icons img')
const gaya = document.querySelector('.gaya')
const warna = document.querySelector('.warna')
const wujud = document.querySelector('.wujud')
const mirror = document.querySelector('.mirror')
const card = document.querySelectorAll('.icons a')
const pasFoto = document.querySelector('.pasFoto')

const tanggal = document.querySelector('.tanggal')
const tBaru = document.querySelector('.tBaru')

// login
const tombol = document.getElementsByTagName('button')[0]
const login = document.querySelector('.login')
const logout = document.querySelector('.logout')
const styling = document.getElementsByClassName('styling')[0]

tombol.addEventListener('click', function() {
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    if(username.value && password.value == 'admin') {
        username.value = ''
        password.value = ''

        // alert("Login Berhasil!")
        Swal.fire('Login Berhasil!')

        if(tBaru.innerHTML == '') {
            styling.style.display = "flex"
        } else if(tBaru.innerHTML == 'Can edit icon again now!') {
            styling.style.display = "flex"
        }

        login.style.display = "none"
        logout.style.display = "block"

    }

    // jalankan pilih style icons
    gaya.addEventListener('change', function() {
        changeStyling()
    })
    warna.addEventListener('change', function() {
        changeColor()
    })
    wujud.addEventListener('change', function() {
        changeTransform()
    })
    mirror.addEventListener('change', function() {
        changeMirror(mirror.value)
    })
    pasFoto.addEventListener('click', function() {
        useBorder()
    })
    const tiluD = function() {
        for(let i = 0; i < titles.length; i++) {
            imgs[i].classList.toggle("hilang")
        }
    }
    simpan.addEventListener('click', function() {
        styling.style.display = "none"
        hilangSetting()
    })
})

// logout
logout.addEventListener('click', function(e) {
    e.target.style.display = "none"
    login.style.display = "block"

    Swal.fire("Logout Berhasil!")

    styling.style.display = "none"
})


// data on variables
const icons = ['Beer', 'Snack', 'Write Note', 'Send Gift']
const linkIcons = ['beer', 'snack', 'note', 'gift']



// styling icons by default 
for(let i = 0; i < titles.length; i++) {
    // title icons
    titles[i].innerHTML = icons[i]
    // image icons
    imgs[i].setAttribute('src', 'imgs/' + gaya.value + '/' + linkIcons[i] + '.svg')
}


// fungsi untuk setting
const changeStyling = function() {
    for(let i = 0; i < titles.length; i++) {
        // image icons
        imgs[i].setAttribute('src', 'imgs/' + gaya.value + '/' + linkIcons[i] + '.svg')
    }
}
const changeColor = function() {
    for(let i =0; i < titles.length; i++) {
        // title icons
        titles[i].classList.toggle('berem')
    }
}
const changeTransform = function() {
    for(let i =0; i < titles.length; i++) {
        // title icons
        titles[i].classList.toggle('badag')
    }
}
const changeMirror = function(mirror) {
    for(let i =0; i < titles.length; i++) {
        if(mirror == "tong") {
            bingkai[i].addEventListener('mousemove', function() {
                bingkai[i].style.borderRadius = "50px"
                bingkai[i].style.width = "inherit"
                bingkai[i].style.hight = "inherit"
            })
        } else if(mirror == "window") {
            bingkai[i].addEventListener('mousemove', function() {
                bingkai[i].style.borderRadius = "inherit"
                bingkai[i].style.width = "50%"
                bingkai[i].style.hight = "inherit"
            })
        } else if(mirror == "oval") {
            bingkai[i].addEventListener('mousemove', function() {
                bingkai[i].style.borderRadius = "50%"
                bingkai[i].style.width = "50px"
                bingkai[i].style.hight = "50px"
            })
        } else if(mirror == "natural") {
            bingkai[i].addEventListener('mousemove', function() {
                bingkai[i].style.borderRadius = "inherit"
                bingkai[i].style.width = "inherit"
                bingkai[i].style.hight = "inherit"
            })
        }
    }
}
const useBorder = function() {
    for(let i =0; i < titles.length; i++) {
        bingkai[i].classList.toggle('sisi')
    }
}
const hilangSetting = function() {
    let week = new Date().getTime() + 1000 * 60 * 60 * 24 * 7

    const hitungMundur = setInterval(() => {
        let sekarang = new Date().getTime()
        
        let selisih = week - sekarang

        let day = Math.floor(selisih / (1000 * 60 * 60 * 24))
        let jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        let menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60))
        let detik = Math.floor(selisih % (1000 * 60) / (1000))

        tBaru.innerHTML = 'Time for edit icons: ' + day + ' day ' + jam + ' hour ' + menit + ' minute ' + detik + ' second'
        if(selisih < 0) {
            clearInterval(hitungMundur)
            tBaru.innerHTML = 'Can edit icon again now!'
            styling.style.display = "flex"
        }
    }, 1000);
}

