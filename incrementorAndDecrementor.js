(function ($) {
    var button = {
        "text-align": 'center',
        "font-weight": 'bold',
        "font-size": '28px',
        display: 'inline-block',
        height: '40px',
        width: '35px',
        cursor: 'pointer'
    };

    var inc = {
        color: 'green',
        border: '1px solid green'
    };

    var dec = {
        color: 'red',
        border: '1px solid red'
    }

    // language=HTML
    var styleTag = '<style>' +
        'input[type=number]::-webkit-inner-spin-button,' + 'input[type=number]::-webkit-outer-spin-button {'+
        '-webkit-appearance: none;' + 'margin: 0;}' +
        '.inc{'+'color:green;border: 1px solid green;}'+
        '.dec{'+'color: red;border: 1px solid red;}'+
        '.wrapper {' +' margin-top:100px; '+ 'text-align: center;}'+
        '.input{'+'padding-bottom:11px;padding-top:12px;}'+
        '</style>';


    var title = {
        display: 'inline-block',
        "max-width": '100%',
        "margin-bottom": '5px',
        "font-weight": 'bolder',
        "font-style": 'italic',
        "font-family": 'cursive',
        color: 'blueviolet'
    };

    $.fn.stepCounter = function () {
        var that = this;
        stepCounterStyles();

        $('.inc').click(function () {
            var $this = $(this),
                $input = $this.prev('input'),
                newValue = parseInt($input.val()) + 1;
            $input.val(newValue);
        });

        $('.dec').click(function () {
            var $this = $(this),
                $input = $this.next('input'),
                newValue = $input.val() - 1;
            var secNewVal = parseInt(newValue);
            $input.val(secNewVal);
        });

        function stepCounterStyles(){
            var bodyWrapper = $('<div class="wrapper"></div>');
            var label = $("<label></label>").text('Increment And Decrement Count').css(title);
            var decDivButton =  $('<div class="dec"></div>').text('-').css(button);
            var input = $('<input class="input"/>').val(0);
            var inputStyle = input.append(styleTag);
            var incDivButton =  $('<div class="inc"></div>').text('+').css(button);
            $(bodyWrapper).append(label);
            $(bodyWrapper).append(decDivButton);
            $(bodyWrapper).append(input);
            $(bodyWrapper).append(inputStyle);
            $(bodyWrapper).append(incDivButton);
            $(that).append(bodyWrapper);
        }

    };

}(jQuery));

$(document).ready(function () {
    $('#countByOne').stepCounter();
})
