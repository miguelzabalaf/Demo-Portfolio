close = $(".fa-times");
open = $(".fa-chevron-down");
sectionInfoContent = $(".sectionInfoContent");

open.hide();

$(document).ready(function() {
    close.click(function(event) {
        sectionInfoContent.slideUp();
        close.hide();
        open.show();
    });

    open.click(function(event) {
        sectionInfoContent.slideDown();
        close.show();
        open.hide();
    });
});