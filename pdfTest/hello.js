'use strict';

//
// Fetch the PDF document from the URL using promises
//
PDFJS.getDocument('github.pdf').then(function(pdf) {
  pdf.getPage(1).then(function(page) {

//    var inchToCmRatio = 2.54;
//    var scaleTo = { width: 11 * inchToCmRatio, height: 17 * inchToCmRatio};

    var scale = 1.5;
    var viewport = page.getViewport(scale);

    //
    // Prepare canvas using PDF page dimensions
    //
    var canvas = document.getElementById('the-canvas');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});

