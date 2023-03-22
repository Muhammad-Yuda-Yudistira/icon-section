const titles = document.getElementsByTagName('figcaption')
const bingkai = document.getElementsByTagName('picture')

const imgs = document.querySelectorAll('.icons img')
const gaya = document.querySelector('.gaya')
const warna = document.querySelector('.warna')
const wujud = document.querySelector('.wujud')
const mirror = document.querySelector('.mirror')
const pasFoto = document.querySelector('.icons picture:hover')
const card = document.querySelectorAll('.icons a')

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
// pasFoto.addEventListener('click', function() {
//     // pasFoto.style.border = "3px solid rgba(222, 184, 135, 0.514)"
//     alert("Oke")
// })
console.log(pasFoto)
