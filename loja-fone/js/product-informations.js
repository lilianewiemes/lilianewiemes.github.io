const heart = document.querySelector('.-heart')
const stars = document.querySelectorAll('.star')

heart.addEventListener('click', handleClickHeart)

stars.forEach(function (star, key) {
    star.addEventListener('click', function () {
        handleClickStar(key)
    })
})

function handleClickStar(index) {
    stars.forEach(function (star, key) {
        star.classList.remove('-active')
        if (key <= index) {
            star.classList.add('-active')
        }
    })
}

function handleClickHeart() {
    this.classList.toggle('-active')
}