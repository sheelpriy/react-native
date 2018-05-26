
  ===============//////////////==================================//////////////===================
                                            NOTIFICATIONS
  ===============//////////////==================================//////////////===================

"notification": {
    /* 
      Local path or remote url to an image to use as the icon for push notifications. 
      48x48 png grayscale with transparency. 
    */
    "icon": STRING,

    /* 
      Tint color for the push notification image when it appears in the notification tray.
      6 character long hex color string eg: "#000000" 
    */
    "color": STRING,

    /* 
      Show each push notification individually "default" or collapse into one "collapse".
      Valid values: "default", "collapse"
    */
    "androidMode": STRING,

    /* 
      If "androidMode" is set to "collapse", this title is used for the collapsed notification message. 
      eg: "#{unread_notifications} new interactions" 
    */
    "androidCollapsedTitle": STRING
  }


  ===============//////////////==================================//////////////===================
                                            IOS
  ===============//////////////==================================//////////////===================

  "ios": {
    /*
      The bundle identifier for your iOS standalone app. 
      You make it up, but it needs to be unique on the App Store. 

      stackoverflow.com/questions/11347470/what-does-bundle-identifier-mean-in-the-ios-project.

      iOS bundle identifier notation unique name for your app. 
      For example, host.exp.exponent, where exp.host is our domain 
      and Expo is our app.
    */
    "bundleIdentifier": STRING,

    /*
      Build number for your iOS standalone app. Must be a string 
      that matches Apple's format for CFBundleVersion.

      developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102364.
    */
    "buildNumber": STRING,

    /*
      Local path or remote URL to an image to use for your app's 
      icon on iOS. If specified, this overrides the top-level "icon" key. 

      Use a 1024x1024 icon which follows Apple's interface guidelines for icons, including color profile and transparency. 

      Expo will generate the other required sizes. 
      This icon will appear on the home screen and within the Expo app.
    */
    "icon": STRING,

    /*
      Merchant ID for use with Apple Pay in your standalone app.
    */
    "merchantId": STRING,

    /*
      URL to your app on the Apple App Store, if you have deployed it there. 
      This is used to link to your store page from your Expo project page if your app is public.
    */
    appStoreUrl: STRING,

    /*
      Whether your standalone iOS app supports tablet screen sizes. 
      Defaults to `false`.
    */
    "supportsTablet": BOOLEAN,

    /*
      If true, indicates that your standalone iOS app does not support handsets.
      Your app will only support tablets.
    */
    "isTabletOnly": BOOLEAN,

    /*
      Dictionary of arbitrary configuration to add to your standalone app's native Info.plist. Applied prior to all other Expo-specific configuration. 

      No other validation is performed, so use this at your own risk of rejection from the App Store.
    */
    "infoPlist": OBJECT,

    /*
      An array that contains Associated Domains for the standalone app.
    */
    "associatedDomains": ARRAY,

    /*
      A boolean indicating if the app uses iCloud Storage for DocumentPicker. 
      See DocumentPicker docs for details.
    */
    "useIcloudStorage": BOOLEAN,

    "config": {
      /*
        Branch (https://branch.io/) key to hook up Branch linking services.
      */
      "branch": {
        /*
          Your Branch API key
        */
        "apiKey": STRING
      },

      /*
        Sets `ITSAppUsesNonExemptEncryption` in the standalone ipa's Info.plist to the given boolean value.
      */
      "usesNonExemptEncryption": STRING,

      /*
        Google Maps iOS SDK key for your standalone app. 

        developers.google.com/maps/documentation/ios-sdk/start
      */
      "googleMapsApiKey": STRING,

      /*
        Google Sign-In iOS SDK keys for your standalone app. 

        developers.google.com/identity/sign-in/ios/start-integrating
      */
      "googleSignIn": STRING,

      /*
        The reserved client ID URL scheme. 
        Can be found in GoogeService-Info.plist.
      */
      "reservedClientId": STRING
    },

    "splash": {
      /*
        Color to fill the loading screen background 6 character long hex color string, eg: "#000000"
      */
      "backgroundColor": STRING,

      /*
        Determines how the "image" will be displayed in the splash loading screen. 
        Must be one of "cover" or "contain", defaults to "contain".
        Valid values: "cover", "contain"
      */
      "resizeMode": STRING,

      /*
        Local path or remote url to an image to fill the background of the loading screen. 
        Image size and aspect ratio are up to you. 
        Must be a .png.
      */
      "image": STRING,

      /*
        Local path or remote url to an image to fill the background of the loading screen. 
        Image size and aspect ratio are up to you. 
        Must be a .png.
      */
      "tabletImage": STRING
    },

    "isRemoteJSEnabled": DEPRECATED,

    "loadJSInBackgroundExperimental": DEPRECATED,
  }



  ===============//////////////==================================//////////////===================
                                            ANDROID
  ===============//////////////==================================//////////////===================

  "android": {
    /*
      The package name for your Android standalone app. 
      You make it up, but it needs to be unique on the Play Store. 

      stackoverflow.com/questions/6273892/android-package-name-convention

      Reverse DNS notation unique name for your app. 
      For example, host.exp.exponent, where exp.host is our domain and Expo is our app.
    */
    "package": STRING,

    /*
      Version number required by Google Play. 
      Increment by one for each release. 
      Must be an integer. 
      developer.android.com/studio/publish/versioning.html
    */
    "versionCode": NUMBER,

    /*
      Local path or remote url to an image to use for your app's icon on Android. 
      If specified, this overrides the top-level "icon" key. 

      We recommend that you use a 1024x1024 png file.
      Transparency is recommended for the Google Play Store. 
      This icon will appear on the home screen and within the Expo app.
    */
    "icon": STRING,

    /*
      URL to your app on the Google Play Store, if you have deployed it there. 
      This is used to link to your store page from your Expo project page if your app is public.
    */
    "playStoreUrl": STRING,

    /*
      List of additional permissions the standalone app will request upon installation.
      Along with the minimum necessary for an expo app to function.  

      Don't use "permissions" to use the defualt list.

      Set "permissions" to [] to use ONLY the MINIMUM necessary permissions.
    */
    "permissions": [
      "ACCESS_COARSE_LOCATION",
      "ACCESS_FINE_LOCATION",
      "CAMERA",
      "MANAGE_DOCUMENTS",
      "READ_CONTACTS",
      "READ_CALENDAR",
      "WRITE_CALENDAR",
      "READ_EXTERNAL_STORAGE",
      "READ_INTERNAL_STORAGE",
      "READ_PHONE_STATE",
      "RECORD_AUDIO",
      "USE_FINGERPRINT",
      "VIBRATE",
      "WAKE_LOCK",
      "WRITE_EXTERNAL_STORAGE",
      "com.anddoes.launcher.permission.UPDATE_COUNT",
      "com.android.launcher.permission.INSTALL_SHORTCUT",
      "com.google.android.c2dm.permission.RECEIVE",
      "com.google.android.gms.permission.ACTIVITY_RECOGNITION",
      "com.google.android.providers.gsf.permission.READ_GSERVICES",
      "com.htc.launcher.permission.READ_SETTINGS",
      "com.htc.launcher.permission.UPDATE_SHORTCUT",
      "com.majeur.launcher.permission.UPDATE_BADGE",
      "com.sec.android.provider.badge.permission.READ",
      "com.sec.android.provider.badge.permission.WRITE",
      "com.sonyericsson.home.permission.BROADCAST_BADGE"
    ],

    "config": {
      /*
        Branch (https://branch.io/) key to hook up Branch linking services.
      */
      "branch": {
        /*
          Your Branch API key
        */
        "apiKey": STRING
      },

      /*
        Google Developers Fabric keys to hook up Crashlytics and other services.
        get.fabric.io/
      */
      "fabric": {
        /*
          Your Fabric API key
        */
        "apiKey": STRING,

        /*
          Your Fabric build secret
        */
        "buildSecret": STRING
      },

      /*
        Google Maps Android SDK key for your standalone app.
        developers.google.com/maps/documentation/android-api/signup
      */
      "googleMaps": {
        /*
          Your Google Maps Android SDK API key
        */
        "apiKey": STRING
      }

      /*
        Google Sign-In Android SDK keys for your standalone app.
        developers.google.com/identity/sign-in/android/start-integrating
      */
      "googleSignIn": {
        /*
          The Android API key. 
          Can be found in the credentials section of the developer console 
          or in "google-services.json"
        */
        "apiKey": STRING,

        /*
          The SHA-1 hash of the signing certificate used to build the apk without any separator `:`. 
          Can be found in "google-services.json". 
          developers.google.com/android/guides/client-auth
        */
        "certificateHash": STRING
      }
    },

    /*
      Configuration for loading and splash screen for standalone Android apps.
    */
    "splash": {
      /*
        Color to fill the loading screen background
        6 character long hex color string, eg: "#000000"
      */
      "backgroundColor": STRING,

      /*
        Determines how the "image" will be displayed in the splash loading screen. 
        Must be one of "cover" or "contain", defaults to "contain". 
        Valid values: "cover", "contain"
      */
      "resizeMode": STRING,

      /*
        Local path or remote url to an image to fill the background of the loading screen. 
        Image size and aspect ratio are up to you. 
        Must be a .png.
      */
      "ldpi": STRING,
      "mdpi": STRING,
      "hdpi": STRING,
      "xhdpi": STRING,
      "xxhdpi": STRING,
      "xxxhdpi": STRING
    }
  }

  =============/////////////==========================/////////////=============
                                random stuff
  =============/////////////==========================/////////////=============  
  
  "infoPlist": {
      "NSCameraUsageDescription": "This app uses the camera to scan barcodes on event tickets."
    },
    "permissions" : [
      "CAMERA",
      "ACCESS_FINE_LOCATION",
      "ACCESS_COARSE_LOCATION",
      "com.htc.launcher.permission.READ_SETTINGS",
      "MANAGE_DOCUMENTS",
      "com.sonyericsson.home.permission.BROADCAST_BADGE",
      "WRITE_EXTERNAL_STORAGE"
    ]