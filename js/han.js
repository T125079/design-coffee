$(function () {

    $(".openbtn").click(function () {
        $(this).toggleClass("active");
        $("#han-menu").toggleClass("active");
    });

    $("#han-menu a").click(function () {
        $(".openbtn").removeClass("active");
        $("#han-menu").removeClass("active");
    });
});
