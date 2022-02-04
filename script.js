$(function() {

    let ekran = $('input')[0];


    $('.number').click(function() {
        ekran.value = ekran.value + this.value;
    })


    $('.del').on('click', () => {
        ekran.value = "";
    })

    $('.equal').on('click', () => {

        ekran.value = eval(ekran.value);
    })

    $('.sil').click(function() {
        ekran.value = ekran.value.substr(0, ekran.value.length - 1);

    })




});