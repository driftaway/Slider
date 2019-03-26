function changeStyles() {
    document.querySelector('.js-index').innerHTML = this.currentSlide
    $('.image').removeClass('imageActive')
    $('.image').removeClass('imageActiveClose')
    $('.image').removeClass('imageActiveFar')
    if (this.currentSlide == 7 || this.currentSlide == -2) {
        $('.image1').addClass('imageActive')
        $('.image1').parent().prev().children().addClass('imageActiveClose')
        $('.image1').parent().next().children().addClass('imageActiveClose')
        let prevPrev = $('.image1').parent().prev()
        let nextNext = $('.image1').parent().next()
        $(prevPrev).prev().children().addClass('imageActiveFar')
        $(nextNext).next().children().addClass('imageActiveFar')
    } else if (this.currentSlide == 8 || this.currentSlide == -1) {
        $('.image2').addClass('imageActive')
        $('.image2').parent().prev().children().addClass('imageActiveClose')
        $('.image2').parent().next().children().addClass('imageActiveClose')
        let prevPrev = $('.image2').parent().prev()
        let nextNext = $('.image2').parent().next()
        $(prevPrev).prev().children().addClass('imageActiveFar')
        $(nextNext).next().children().addClass('imageActiveFar')
    } else if (this.currentSlide == 0) {
        $('.image3').addClass('imageActive')
        $('.image3').parent().prev().children().addClass('imageActiveClose')
        $('.image3').parent().next().children().addClass('imageActiveClose')
        let prevPrev = $('.image3').parent().prev()
        let nextNext = $('.image3').parent().next()
        $(prevPrev).prev().children().addClass('imageActiveFar')
        $(nextNext).next().children().addClass('imageActiveFar')
    } else if (this.currentSlide == 1) {
        $('.image4').addClass('imageActive')
        $('.image4').parent().prev().children().addClass('imageActiveClose')
        $('.image4').parent().next().children().addClass('imageActiveClose')
        let prevPrev = $('.image4').parent().prev()
        let nextNext = $('.image4').parent().next()
        $(prevPrev).prev().children().addClass('imageActiveFar')
        $(nextNext).next().children().addClass('imageActiveFar')
    } else if (this.currentSlide == 2) {
        $('.image5').addClass('imageActive')
        $('.image5').parent().prev().children().addClass('imageActiveClose')
        $('.image5').parent().next().children().addClass('imageActiveClose')
        let prevPrev = $('.image5').parent().prev()
        let nextNext = $('.image5').parent().next()
        $(prevPrev).prev().children().addClass('imageActiveFar')
        $(nextNext).next().children().addClass('imageActiveFar')
    } else if (this.currentSlide == 3) {
        $('.image6').addClass('imageActive')
        $('.image6').parent().prev().children().addClass('imageActiveClose')
        $('.image6').parent().next().children().addClass('imageActiveClose')
        let prevPrev = $('.image6').parent().prev()
        let nextNext = $('.image6').parent().next()
        $(prevPrev).prev().children().addClass('imageActiveFar')
        $(nextNext).next().children().addClass('imageActiveFar')
    } else if (this.currentSlide == 4) {
        $('.image7').addClass('imageActive')
        $('.image7').parent().prev().children().addClass('imageActiveClose')
        $('.image7').parent().next().children().addClass('imageActiveClose')
        let prevPrev = $('.image7').parent().prev()
        let nextNext = $('.image7').parent().next()
        $(prevPrev).prev().children().addClass('imageActiveFar')
        $(nextNext).next().children().addClass('imageActiveFar')
    } else if (this.currentSlide == -4 || this.currentSlide == 5) {
        $('.image8').addClass('imageActive')
        $('.image8').parent().prev().children().addClass('imageActiveClose')
        $('.image8').parent().next().children().addClass('imageActiveClose')
        let prevPrev = $('.image8').parent().prev()
        let nextNext = $('.image8').parent().next()
        $(prevPrev).prev().children().addClass('imageActiveFar')
        $(nextNext).next().children().addClass('imageActiveFar')
    } else if (this.currentSlide == -3 || this.currentSlide == 6) {
        $('.image9').addClass('imageActive')
        $('.image9').parent().prev().children().addClass('imageActiveClose')
        $('.image9').parent().next().children().addClass('imageActiveClose')
        let prevPrev = $('.image9').parent().prev()
        let nextNext = $('.image9').parent().next()
        $(prevPrev).prev().children().addClass('imageActiveFar')
        $(nextNext).next().children().addClass('imageActiveFar')
    }
}

const mySiema = new Siema({
    onInit: changeStyles,
    onChange: changeStyles,
});

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


prev.addEventListener('click', () => mySiema.prev())
next.addEventListener('click', () => mySiema.next())