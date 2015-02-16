(function (global) {
    'use strict';

    var app = global.app || {};
    //apply knockout bindings
    ko.applyBindings(new app.scannerVM(), document.body);

}(window));