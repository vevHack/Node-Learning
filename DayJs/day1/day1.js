/**
 * Created by vevHack on 2015/7/13.
 */
(function () {
    var textArea = function () {
        var textArea = document.getElementById('textArea');
        var scrollBottom = function () {
            if (textArea.selectionStart === textArea.selectionEnd) {
                textArea.scrollTop = textArea.scrollHeight;
            }
        };
        return {
            scrollBottom: scrollBottom
        }
    };
    window.textArea = textArea();
})();
textArea.scrollBottom();


