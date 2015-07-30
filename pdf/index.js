/**
 * Created by Zen on 2015/7/29.
 */
var pdftohtml = require('pdftohtmljs'),
    converter = new pdftohtml('test/pdfs/sample.pdf', "sample.html");

converter.preset('default');

converter.success(function() {
    console.log("convertion done");
});

converter.error(function(error) {
    console.log("conversion error: " + error);
});

converter.progress(function(ret) {
    console.log ((ret.current*100.0)/ret.total + " %");
});

converter.convert();