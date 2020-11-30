$(document).ready(() => {
    $('#btn-login').on('click', () => {
        let inputsLength = $('.form-control').length;

        for (let i = 0; i < inputsLength; i++) {
            let inputs = $('.form-control')[i];
            let alias = $('.form-control')[i];

            validator(inputs.value, alias.id);
        }
    });

    function validator(inputs, alias){
        if(inputs == null || inputs == undefined || inputs == ""){
            $('#error-'+alias).removeClass('hidden');
            $('#'+alias).addClass('invalid');
        }
    }

    $('#email-or-phone').on('keyup', function() {
        let id = $(this).attr('id');

        if(!$('#error-'+id).hasClass('hidded')){
            $('#error-'+id).addClass('hidden');
            $(this).removeClass('invalid');
        }
    });

    $('#password').on('keyup', function() {
        let id = $(this).attr('id');

        if(!$('#error-'+id).hasClass('hidded')){
            $('#error-'+id).addClass('hidden');
            $(this).removeClass('invalid');
        }
    });
});