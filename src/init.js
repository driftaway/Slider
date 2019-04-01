function changeStyles() {
    $('p').show()
    document.querySelector('.js-index').innerHTML = this.currentSlide
    $('.image').removeClass('imageActive')
    $('.image').removeClass('imageActiveClose')
    $('.image').removeClass('imageActiveFar')
    let centerSlide = '' + this.currentSlide
    $('.image' + centerSlide).addClass('imageActive')
    $('.imageActive').parent().parent().prev('div').children().find('.image').addClass('imageActiveClose')
    $('.imageActive').parent().parent().next('div').children().find('.image').addClass('imageActiveClose')
    let prev = $('.imageActive').parent().parent().prev('div')
    let next = $('.imageActive').parent().parent().next('div')
    $(prev).prev().children().find('.image').addClass('imageActiveFar')
    $(next).next().children().find('.image').addClass('imageActiveFar')
    $(prev).prev().children().find('p').hide()
    $(next).next().children().find('p').hide()
}

const mySiema = new Siema({
    onInit: changeStyles,
    onChange: changeStyles,
})

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


prev.addEventListener('click', () => mySiema.prev())
next.addEventListener('click', () => mySiema.next())