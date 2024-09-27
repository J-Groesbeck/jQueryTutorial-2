$(document).ready(function () {
    $('.swatch').on('mouseover', function () {
        $('.swatch').removeClass('selected')
        $(this).addClass('selected')
        $('#product-photo').attr('src', `img/chair-${$(this).attr('id')}@2x.jpg`)
    })
})