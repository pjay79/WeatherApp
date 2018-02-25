# WeatherApp

This a weather app built with React Native and powered by the Darksky weather API and Google Places API.

## Config

To run this app you will need to get a Darksky API key:
https://darksky.net/dev

You will also need a Google Places API Web Service key:
https://developers.google.com/places/web-service/intro

## Screenshots:

### iOS

![shot1](https://user-images.githubusercontent.com/14052885/36338180-6ca5b502-13fc-11e8-9a86-638ebdc5019d.png)
![shot2](https://user-images.githubusercontent.com/14052885/36338181-6cffe77a-13fc-11e8-8c46-8954c51a2b4d.png)
![shot3](https://user-images.githubusercontent.com/14052885/36338182-6d3e6ca2-13fc-11e8-8072-481d8c9e53c8.png)
![shot4](https://user-images.githubusercontent.com/14052885/36338183-6d7705d0-13fc-11e8-9b0c-98f2c91cb46b.png)
![shot5](https://user-images.githubusercontent.com/14052885/36338184-6dc63a06-13fc-11e8-9cb9-f40b49ddeb07.png)
![shot6](https://user-images.githubusercontent.com/14052885/36338185-6e14bbf4-13fc-11e8-9890-792526c6f6ba.png)

## Technology stack:

* react-native
* react-navigation
* react-native-vector-icons
* react-native-onboarding-swiper
* react-native-modal
* react-native-keyboard-aware-scroll-view
* react-native-google-places-autocomplete
* react-native-snap-carousel
* axios

## Installation

### React Native setup:

`brew install node`

`brew install watchman`

`sudo npm install -g react-native-cli`

And also install Xcode for iOS simulator + Android Studio / Genymotion for Android simulator. Alternatively connect up a hardware device.

### Project setup:

Clone the repo:
`git clone https://github.com/pjay79/WeatherApp.git`

Change to the project folder:
`cd WeatherApp`

Add dependencies:
`npm install` or `yarn`

Run on ios:
`react-native-run-ios`

Run on android:
`react-native-run-android`
