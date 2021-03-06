﻿**Barcode Scanner App with Visual Studio & Cordova**

This demo utilizes Cordova's <a href=https://github.com/wildabeast/BarcodeScanner"">barcode plugin</a>, <a href="http://knockoutjs.com/" target="_blank">KnockoutJS</a> and a RESTful Service from <a href="http://www.outpan.com" target="_blank">Outpan.com</a> to gather Product information.

We, at <a href="http://www.advarics.net" target="_blank">advarics GmbH</a>, use similar techniques plus some UI-frameworks, like Telerik's Kendo or DevExpress, to provide our customers instant information regarding their products & sales. 
This example wants to show how quickly one can develop a barcode scanner without touching the device-specific languages (Java, Objective-C) and environments (Android, iOS). 

Thanks to Cordova and Microsoft's Visual Studio Tools the development of mobile apps is straightforward and easy. Of course, the current VS Tools are in CTP and I encountered some problems while trying to run the App in the Android emulator. However, I expect them to disappear when
the final version arrives.

**Prerequisites: API-Key**

*To be able to use the Product-Service from Outpan.com a valid (free) registration is needed. After the registration the generated API-Key should be inserted in scripts/modules/scanner.js*

<img src="http://o33.imgup.net/api_key7850.png" />

To compile the solution <a href="http://www.visualstudio.com/en-us/explore/cordova-vs.aspx">VS 2013 Tools for Apache Cordova - CTP3</a> must be installed.

This installer will download the Cordova runtime, SDKs etc. If you already have the Android SDKs/NDKs you can change their paths in: 

*Tools/Options/Tools for Apache Cordova*

<img src="http://k83.imgup.net/cordova_en4523.png"/>

**Ripple Emulator**

VS2013 Tools for Cordova include the browser-based Ripple-Emulator which can emulate many different devices & form factors.

<img src="http://e83.imgup.net/ripple_emu24cd.png" /> 

*This is the app in Ripple*

<img src="http://c14.imgup.net/ripple_emu82bb.png" />

**Important:** the activated proxy in Ripple can cause connectivity problems. In such cases one can disable it
under *Settings/Cross Domain Proxy*

<img src="http://h25.imgup.net/disable_pr7a93.png" />

**Plugin installation**

The default project settings contain no Barcode scanner plugin. But this can be changed very easily by selecting the *config.xml*.
In the new window open the *Plugins* section and select Tab *Custom*

Here the plugin can be installed as a local file or via its GitHub URL.

<img src="http://l43.imgup.net/load_plugida12.png" />

**Running in Android Emulator**

Currently, it is not possible to run this App in the Emulator. A problem with *q.js* under *node_modules* throws an exception that 
halts the App execution.

<img src="http://z24.imgup.net/q_error9d75.png" />
 
Luckilly, manual compiling an deployment to a real device is still possible. Via Console go to Cordova's *build directory* and execute the
*build.bat* to generate a new APK package. 

<img src="http://g72.imgup.net/cordova_bud1b9.png" />
*Cordova's Build Directory with build- & run-Scripts*

<img src="http://r35.imgup.net/build_andr0be4.png" />
*Executing build.bat*


**Deploying APK to device**

Before executing *run.bat* the attached Android device must activate its *Developer Options*.
These settings allow the installation of unsigned APK packages. More info <a href="http://developer.android.com/tools/device.html" target="_blank">here</a>.

<img src="http://q14.imgup.net/run_androi90b7.png" />

**Final result**

<img src="http://l08.imgup.net/android_ba065e.png"/>



**License**

MIT
