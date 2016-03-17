// 'elem' is the element that you want to stick to top and 'anchor' is this: <div id="sticky-anchor"></div> and place it right before the 'elem' html
function stick_to_top(elem, anchor) {
    var div_top = anchor.offset().top;
    var compH = $('#header').height();
    var window_top = $(window).scrollTop() + compH;
    if (window_top > div_top) {
        elem.addClass('stick').css('top', window_top + compH - div_top - 20);
        // console.log(window_top, div_top);
    } else {
        elem.removeClass('stick').css('top', 0);
        // console.log(window_top, div_top);
    }
}