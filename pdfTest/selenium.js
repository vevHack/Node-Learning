"use strict";

var fs = require('fs');
var _ = require('lodash');
var webdriver = require('selenium-webdriver');
var im = require("imagemagick");

var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'firefox' }).build();

browser.get('http://localhost:3000')
    .then(function () {

      browser.sleep(5000)
          .then(_.partial(console.log, "Ya termino el timeout"))
          .then(function () {
          })
          .then(function () {
            return browser.takeScreenshot()
          })
          .then(function (data) {
            var base64Data = data.replace(/^data:image\/png;base64,/, "");
            fs.writeFile("image.png", base64Data, 'base64', function (err) {
              if (err) console.log(err);
            });
          })
          .then(function () {
            var location = {x: 0, y: 0}, size = {width: 0, height: 0};
            browser.findElement(webdriver.By.id("the-canvas"))
                .then(function (element) {
                  element.getLocation().then(function (l) {
                    console.log(l);
                    location = l;
                  });
                  return element;
                })
                .then(function (element) {
                  element.getSize().then(function (s) {
                    console.log(s);
                    size = s;
                  });
                  return element;
                })
                .then(function () {
                  return [
                    "image.png",
                    "-crop",
                        size.width + "x" + size.height + "+" + location.x + "+" + location.y,
                    "image.png"
                  ];
                })
                .then(im.convert);
          });
    });

