$("#lngEng").click(function() {
    $("#lngFr").removeClass('active');
    $("#lngFr").find('img').attr('src', 'images/checkbox.svg');
    
    $("#lngEng").addClass('active');
    $("#lngEng").find('img').attr('src', 'images/checkedBox.svg');
   
    $("#lngAr").removeClass('active');
    $("#lngAr").find('img').attr('src', 'images/checkbox.svg');
});

$("#lngFr").click(function() {
    $("#lngFr").addClass('active');
    $("#lngFr").find('img').attr('src', 'images/checkedBox.svg');
    
    $("#lngEng").removeClass('active');
    $("#lngEng").find('img').attr('src', 'images/checkbox.svg');
    
    $("#lngAr").removeClass('active');
    $("#lngAr").find('img').attr('src', 'images/checkbox.svg');
});

$("#lngAr").click(function() {
    $("#lngFr").removeClass('active');
    $("#lngFr").find('img').attr('src', 'images/checkbox.svg');
    
    $("#lngEng").removeClass('active');
    $("#lngEng").find('img').attr('src', 'images/checkbox.svg');
    
    $("#lngAr").addClass('active');
    $("#lngAr").find('img').attr('src', 'images/checkedBox.svg');
});