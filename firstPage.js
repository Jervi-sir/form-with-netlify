$("#stateExcited").click(function() {
    $("#stateExcited").addClass('active');
    $("#stateNeutral").removeClass('active');
    $("#stateBored").removeClass('active');
    $("#person_state").val('excited');
    state_filled = true;
});

$("#stateNeutral").click(function() {
    $("#stateExcited").removeClass('active');
    $("#stateNeutral").addClass('active');
    $("#stateBored").removeClass('active');
    $("#person_state").val('neutral');
    state_filled = true;

});

$("#stateBored").click(function() {
    $("#stateExcited").removeClass('active');
    $("#stateNeutral").removeClass('active');
    $("#stateBored").addClass('active');
    $("#person_state").val('bored');
    state_filled = true;
});

$("#excited-yes").click(function() {
    $("#excited-yes").addClass('active');
    $("#excited-no").removeClass('active');
    $("#person_excitement").val('yes');
    are_you = true;
});

$("#excited-no").click(function() {
    $("#excited-yes").removeClass('active');
    $("#excited-no").addClass('active');
    $("#person_excitement").val('no');
    are_you = true;
});
