(function (global) {
    'use strict';
    //global app object
    var app = global.app = global.app || {};

    //the view model for index.html
    app.scannerVM = function () {
        var that = this;
        this.barcode = ko.observable('9780321330253');
        this.buttonText = ko.observable('Scan');
        this.scan = scanBarcode;
        this.result = ko.observable('NO RESULT');
        this.serviceUrl = ko.observable('http://www.outpan.com/api/get-product.php?apikey=');
        //Register here to get a free API key: http://www.outpan.com/register.php
        this.apiKey = ko.observable('YOUR_API_KEY_HERE');
        this.barcodeService = ko.computed(function () {
            return that.serviceUrl() + that.apiKey();
        });
        this.getProductInfo = getProductInfo;
    };
    //scanner function that utilizes the cordova barcode plugin
    function scanBarcode() {
        var that = this;

        try {
            if (!app.runsInSimulator) {
                app.scanner.scan(function (result) {
                    if (result) {
                        that.barcode(result.text);
                    }
                },
                function (error) {
                   onError("Scanning failed: " + JSON.stringify(error));
                });
            }
            
            that.getProductInfo();
        }
        catch (error) {
            onError(error);
        }
    }
    //helper function for receiving product information via HTTP
    function getProductInfo() {
        var that = this;
        $.getJSON(this.barcodeService() + '&barcode=' + this.barcode()).done(function (data) {
            var productInfo = {
                image: data.images ? data.images[0] : '#',
                name: data.name,
                author: data.attributes['Author(s)'] ? data.attributes['Author(s)'] : '',
                pages: data.attributes['Page Count'] ? data.attributes['Page Count']: '',
                published: data.attributes['Publication Date'] ? data.attributes['Publication Date'] : '',
                isABook: data.attributes['Author(s)'] ? true : false
            };
            that.result(productInfo);
        }).fail(function (xhr, status, error) {
            onError(status + ' ' + error);
        });
    }
    
    function onError(err) {
        alert('Oops! => ' + err);
    }

}(window));