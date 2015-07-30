/**
 * Created by Zen on 2015/7/29.
 */

var exec = require('child_process').exec;
var fs = require('fs');
var util = require('util');
var http = require('http');
var url = require('url');
var PDFDocument = require('pdfkit'); // http://pdfkit.org/


http.createServer(function (req, res) {

    // Parse URL to get a filename

    var urlObj = url.parse(req.url, true);
    var filename = urlObj.query["filename"];


    //Create a PDF with PDFKit
    var doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('output/' + filename + '.pdf'));

    doc.fontSize(22);
    doc.text('Your file: '+filename+'.pdf', 20, 20);
    doc.fontSize(16);
    doc.text('Was created successfully if you see this.', 20, 30);

    doc.save();
    doc.moveTo(100, 150);
    doc.lineTo(100, 250);
    doc.lineTo(200, 250);
    doc.fill("#FF3300");
    doc.restore();

    doc.end();


    // Render PNG with GhostScript

    exec("/usr/bin/gs -dQUIET -dPARANOIDSAFER -dBATCH -dNOPAUSE -dNOPROMPT -sDEVICE=png16m -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -r72 -dFirstPage=1 -dLastPage=1 -sOutputFile=./output/"+filename+".png ./output/"+filename+".pdf", function (error, stdout, stderr) {

        if ( error !== null ) {
            console.log(error);
        }
        else {
            var img = fs.readFileSync('./output/'+filename+'.png');
            res.writeHead(200, {'Content-Type': 'image/png' });
            res.end(img, 'binary');
            console.log('Created PNG: '+filename+'.png');
        }
    });

}).listen(3000);

console.log('Server running.');