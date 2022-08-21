let id = $('#id');
let pw = $('#pw');
let btn = $('#btn');

$(btn).on('click', function () {
    if ($('#id').val() == "") {
        $('.int-area > label.id').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if  ($('#pw').val() == "") {
        $('.int-area > label.pw').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
});