const titles = document.getElementsByTagName('figcaption')
const imgs = document.querySelectorAll('.icons img')
const gaya = document.querySelector('.gaya')
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

// jalankan pilih style icons
gaya.addEventListener('change', function() {
    changeStyling()
})
const changeStyling = function() {
    for(let i = 0; i < titles.length; i++) {
        // title icons
        titles[i].innerHTML = icons[i]
        // image icons
        imgs[i].setAttribute('src', 'imgs/' + gaya.value + '/' + linkIcons[i] + '.svg')
    }
}


