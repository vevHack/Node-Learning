/**
 * Created by Zen on 2015/7/29.
 */

var PDFImage = require("pdf-image").PDFImage;

var pdfImage = new PDFImage("/tmp/test.pdf");
pdfImage.convertPage(0).then(function (imagePath) {
    // 0-th page (fisrt page) of the slide.pdf is available as slide-0.png
    fs.existsSync("/tmp/test-0.png") // => true
});