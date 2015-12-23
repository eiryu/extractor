$(function() {
    $('button').click(function() {
        $result = $('#result');
        $result.val('');

        var regexp = new RegExp($('#regexp').val());
        var ext = $('#ext').val();

        var lines = $('#area').val().split('\n');
        $.each(lines, function(i, v) {
            if(regexp.test(v)) {
                var m = v.match(regexp);

                if($result.val() == '') {
                    $result.val(evalExt(m, ext));
                } else {
                    $result.val($result.val() + '\n' + evalExt(m, ext));
                }

            }
        });

        var positionTop = $result.position().top;
        $('html, body').animate({ scrollTop: positionTop }, 'fast');
    });
});

function evalExt(m, ext) {
    var result = ext;
    var m2 = ext.match(/m\[\d+\]/g);
    $.each(m2, function(i, v) {
        result = result.replace(v, eval(v));
    });
    return result;
}
