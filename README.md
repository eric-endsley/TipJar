# TipJar - A React Native Payment App 

#### A React Native app, built in Expo, designed to enable payments into and out of pooled "tipjars" by multiple users

#### By Eric Endsley

## Description 

Welcome to the TipJar repo. This is my capstone project for Epicodus. This is a new type of mobile payment app, built in React Native using Expo. TipJar will allow artists, performers, event organizers or business owners to create hands free TipJars for events which allow the public to semi-anonymously contribute funds which will pay out to registered users associated with the TipJar. For example, musicians playing a show could register and associate themselves with a single TipJar. At the conclusion of the event, this TipJar will automate the process of evenly distributing the tips between the associated users. 

Streamlining this process will make it easier for performers to collect funds, and easier for the public to support acts and events that they enjoy. Bars and venues could even use TipJar to collect cover charge, eliminating the need to stop at the ATM before heading to a show.

Disclaimer: This app is under construction and remains in a skeletal state. There is currently no payment functionality built into the app.

Currently the apps functionality is limited to:
* Allowing users to register an account using firebase.
* Allowing registered users to post new events to the firestore, which tipjars will be attached to.
* Allowing all users to see a list of current posted events with tipjars.

## Setup

#### Install Node.js
This project requires Node.js to run. If you don't have Node installed on your machine already, navigate to the [Node download page](https://nodejs.org/en/download/) and follow their instructions to install.


#### Install Expo CLI

This app is developed using Expo and requires the expo CLI to run. Run the following command in your terminal once Node is installed 

```
npm install --global expo-cli
```

#### Setup or Link a Firebase Project 

This application is not currently setup for public use of its firebase server. If you wish to demo the application's functionality, you will need to setup a firebase/firestore project [here](https://console.firebase.google.com/u/0/) by following the instructions to do so. 

Once this is setup, copy your unique config information found in Project settings under Firebase SDK Snippet > Config. Paste this in the Firebase.js file of this project in place of the code currently listed under firebaseConfig:
```
const firebaseConfig {
  [YOUR UNIQUE CONFIG INFO HERE]
}
```

#### Install Android Studio and Setup an Emulator

This project is optimized for Android and it is recommended that you emulate it using Android Studio. Navigate to the [Android Studio Download Page](https://developer.android.com/studio) and follow their instructions to install. Once installed, follow the instructions [here](https://developer.android.com/studio/run/emulator) to setup and run an emulated Android device. 

#### Run the Following Commands in the Terminal to Start the App
```
npm install
```

```
expo start
```

A browser window should open. In the menu on the left of the screen select "Run on Android Device/Simulator". This should begin running the app in your emulator.

## Technologies Used
* Visual Studio Code
* Git
* Javascript
* React
* React Native
* React Native Dotenv
* React Native Paper
* [React Native Slider -- Community Developed](https://reactnative.dev/docs/slider)
* React Navigation
* Material Icons
* Expo
* Expo Image Picker
* Firebase
* Firestore
* [Lorem Picsum](https://picsum.photos/)

## Known Bugs
None

## Contact Information
To ask questions or report a bug, contact [Eric Endsley](mailto:eric.endsley4@gmail.com)

## Legal
This software is licensed under the MIT license.