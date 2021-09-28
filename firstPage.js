$("#stateExcited").click(function() {
    $("#stateExcited").addClass('active');
    $("#stateNeutral").removeClass('active');
    $("#stateBored").removeClass('active');
    $("#person_state").val('excited')
});

$("#stateNeutral").click(function() {
    $("#stateExcited").removeClass('active');
    $("#stateNeutral").addClass('active');
    $("#stateBored").removeClass('active');
    $("#person_state").val('neutral')
});

$("#stateBored").click(function() {
    $("#stateExcited").removeClass('active');
    $("#stateNeutral").removeClass('active');
    $("#stateBored").addClass('active');
    $("#person_state").val('bored')
});

$("#excited-yes").click(function() {
    $("#excited-yes").addClass('active');
    $("#excited-no").removeClass('active');
    $("#person_excitement").val('yes')
});

$("#excited-no").click(function() {
    $("#excited-yes").removeClass('active');
    $("#excited-no").addClass('active');
    $("#person_excitement").val('no')
});
