// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function (global) {
    "use strict";

    var app = {};
    global.app = app;

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var device = global.device;
        var deviceinfo = 'Device Cordova: ' + device.cordova + ', ' +
                            'Device Platform: ' + device.platform + ', ' +
                            'Device UUID: ' + device.uuid + ', ' +
                            'Device Model: ' + device.model + ', ' +
                            'Device Version: ' + device.version + ', ';
        //simple check to distinguish between emulated and on-device instances
        app.runsInSimulator = !device.model ? true : false;
        app.scanner = cordova.plugins.barcodeScanner;
        if (app.runsInSimulator) {
            console.log('device ready > ' + JSON.stringify(deviceinfo));
        }
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
}(window));