/**
 * Created by Zen on 2015/8/7.
 */
var nodeUtil = require("util"),
    fs = require('fs'),
    _ = require('underscore'),
    PDFParser = require("pdf2json/pdfparser");

var pdfParser = new PDFParser();

//pdfParser.on("pdfParser_dataReady", _.bind(_onPFBinDataReady, self));
//
//pdfParser.on("pdfParser_dataError", _.bind(_onPFBinDataError, self));

var pdfFilePath = "G:/EBook/regular-expressions-cheat-sheet-v2.pdf";

pdfParser.loadPDF(pdfFilePath);

// or call directly with buffer
fs.readFile(pdfFilePath, function (err, pdfBuffer) {
    if (!err) {
        pdfParser.parseBuffer(pdfBuffer);
    }
})