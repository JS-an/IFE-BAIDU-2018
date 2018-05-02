$(document).ready(function () {
    //submit动画
    $('#in1,#in2').blur(function () {
        var val = $('#in1').val()
        var pass = $('#in2').val()
        if (val && pass) {
            $('.submit').css('animation', 'pulse 1s infinite')
        }
        else {
            $('.submit').css('animation', 'none')
        }
    })
    //usename动画
    //focus事件
    $('#in1').focus(function (e) {
        e.preventDefault();
        var val = $('#in1').val()
        $('#in1~ .line-go').css({ 'width': '358px', 'border-color': 'deepskyblue', 'border-bottom-width': '2px', 'transition': 'none' });
        if (!val) {
            $('.usename p').animate({ 'font-size': '15px' }, 50);
            $('.usename p').animate({ 'top': '120px' }, 'fast');
        }
    });
    //blur事件
    $('#in1').blur(function (e) {
        e.preventDefault();
        var val = $('#in1').val()
        $('#in1~ .line-go').css({ 'width': '0px', 'transition': 'width .5s' })
        if (!val) {
            $('.usename p').animate({ 'font-size': '25px' }, 50);
            $('.usename p').animate({ 'top': '130px' }, 'fast');
        }
    });
    //password动画
    //focus事件
    $('#in2').focus(function (e) {
        e.preventDefault();
        var pass = $('#in2').val()
        $('#in2~ .line-go').css({ 'width': '358px', 'border-color': 'deepskyblue', 'border-bottom-width': '2px', 'transition': 'none' });
        if (!pass) {
            $('.password p').animate({ 'font-size': '15px' }, 50);
            $('.password p').animate({ 'top': '220px' }, 'fast');
        }
    });
    //blur事件
    $('#in2').blur(function (e) {
        e.preventDefault();
        var pass = $('#in2').val()
        $('#in2~ .line-go').css({ 'width': '0px', 'transition': 'width .5s' })
        if (!pass) {
            $('.password p').animate({ 'font-size': '25px' }, 50);
            $('.password p').animate({ 'top': '230px' }, 'fast');
        }
    });
});