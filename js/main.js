$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text('Оформление заказа');
    modal.find('#dr_order input').val(recipient)
});

$(function () {
    NProgress.start();
    NProgress.set(0.3);
});

$(window).ready (function () {
    NProgress.done();
});


function smoothScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    },500);
    return false;
}

$('#myButton').on('click', function () {
    var formValid = true;
    //перебрать все элементы управления input
    $('input').each(function() {
        var formGroup = $(this).parents('.form1');
        if (this.checkValidity()) {
            formGroup.addClass('has-success').removeClass('has-error');
        } else {
            formGroup.addClass('has-error').removeClass('has-success');
            formValid = false;
        }
    });
    //$('#tnx').modal('show');
    if (formValid == true) {
        //$('#exampleModal').modal('hide');
        $('#exampleModal').hide();
        $('#tnx').show();

    }

});

$(function(){
    $("#phone").mask("+7(999) 999-9999");
});


