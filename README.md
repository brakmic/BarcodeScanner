﻿**Barcode Scanner App with Visual Studio & Cordova**

This demo utilizes Cordova's <a href=https://github.com/wildabeast/BarcodeScanner"">barcode plugin</a>.

To compile the solution <a href="http://www.visualstudio.com/en-us/explore/cordova-vs.aspx">VS 2013 Tools for Apache Cordova - CTP3</a> must be installed.

This installer will download the Cordova runtime, SDKs etc. If you already have Android SDK/NDK you can change their paths in: 

*Tools/Options/Tools for Apache Cordova*

<img src="http://k83.imgup.net/cordova_en4523.png"/>

**Ripple Emulator**

VS2013 Tools for Cordova include the browser-based Ripple-Emulator which can emulate many different devices and form factors.

<img src="http://e83.imgup.net/ripple_emu24cd.png" /> 

*This is the app in Ripple*

<img src="http://c14.imgup.net/ripple_emu82bb.png" />

**Important:** the activated proxy in Ripple can cause connectivity problems. In such cases one can disable it
under *Settings/Cross Domain Proxy*

<img src="http://h25.imgup.net/disable_pr7a93.png" />

**Plugin installation**

The default project settings contain no Barcode scanner plugin. But this can be changed very easily by selecting the config.xml.
In the new window open the Plugins section and select Tab *Custom*

Here the plugin can be installed as a local file or via its GitHub URL.

<img src="http://l43.imgup.net/load_plugida12.png" />

**Running in Android Emulator**

Currently, it is not possible to run this App in the Emulator. A problem with *q.js* under *node_modules* throws an exception that 
halts the App execution.

<img src="http://z24.imgup.net/q_error9d75.png" />
 
Luckilly, manual compiling an deployment to a real device is still possible. Via Console go to Cordova's *build directory* and execute the
*build.bat* to generate a new APK package. 

*Cordova's Build Directory with build- & run-Scripts*

<img src="http://w04.imgup.net/cordova_bu1392.png" />

*Executing build.bat*

<img src="http://r35.imgup.net/build_andr0be4.png" />

*Executing run.bat*

Before executing run.bat an Android device with activated *Developer Options* must be attached to the machine.
The *Developer Options* allow the installation of unsigned APK packages. More info on this <a href="http://developer.android.com/tools/device.html" target="_blank">here</a>.

<img src="http://q14.imgup.net/run_androi90b7.png" />

**Final result**

<img src="http://x14.imgup.net/barcode_sca36d.png" />


**License**

MIT
