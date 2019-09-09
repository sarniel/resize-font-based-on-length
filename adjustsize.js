function adjustHeightPrice() {
    function reduceFontSizePrice(elem) {
        var fontstep = 1;
        if ($(elem).find('.group-price').height() > 28) {
            $(elem).css('font-size', (($(elem).css('font-size').substr(0, 2) - fontstep)) + 'px');
            reduceFontSizePrice(elem);
        }
    }
    $('.price-range-container').css('font-size', '20px');
    $('.price-range-container').each(function() {
        var elem = $(this);
        reduceFontSizePrice(elem);
    });
}

$(window).resize(function() {
    adjustHeightPrice();
});