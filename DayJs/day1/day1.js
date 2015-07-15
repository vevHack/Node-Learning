/**
 * Created by bin on 2015/7/13.
 */
(function () {
    var textArea = function () {
        var textArea, ta = document.getElementById('ta');
        var scrollBottom = function () {
            if (textArea.selectionStart === textArea.selectionEnd) {
                textArea.scrollTop = textArea.scrollHeight;
            }
        };
        var fireBottomEvent = function () {
            console.log('test');
            console.log(ta.scrollTop);
            console.log(ta.scrollHeight);
            console.log(ta.clientHeight);
            if (ta.scrollTop > ta.scrollHeight - ta.clientHeight) {
                alert('bottom')
            }
        };
        return {
            scrollBottom: scrollBottom,
            fireBottomEvent: fireBottomEvent
        }
    };
    window.textArea = textArea();
})();
//textArea.scrollBottom();
$('#ta').on('scroll', function () {
    textArea.fireBottomEvent();
});



