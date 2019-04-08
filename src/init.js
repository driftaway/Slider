function changeStyles() {
    $('p').show()
    $('.image').removeClass('imageActive')
    $('.image').removeClass('imageActiveClose')
    $('.image').removeClass('imageActiveFar')
    let middleSlide = '' + this.currentSlide
    $('.image' + middleSlide).addClass('imageActive')
    $('.imageActive').parent().parent().prev('div').children().find('.image').addClass('imageActiveClose')
    $('.imageActive').parent().parent().next('div').children().find('.image').addClass('imageActiveClose')
    let prevSlide = $('.imageActive').parent().parent().prev('div')
    let nextSlide = $('.imageActive').parent().parent().next('div')
    $(prevSlide).prev().children().find('.image').addClass('imageActiveFar')
    $(nextSlide).next().children().find('.image').addClass('imageActiveFar')
    $(prevSlide).prev().children().find('p').hide()
    $(nextSlide).next().children().find('p').hide()
}

const mySiema = new Siema({
    onInit: changeStyles,
    onChange: changeStyles,
})

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


prev.addEventListener('click', () => mySiema.prev())
next.addEventListener('click', () => mySiema.next())
