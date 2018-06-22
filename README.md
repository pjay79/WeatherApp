# WeatherApp

This a weather app built with React Native and powered by the Darksky weather API and Google Places API.

## Config

To run this app you will need to get a Darksky API key:
https://darksky.net/dev

You will also need a Google Places API Web Service key:
https://developers.google.com/places/web-service/intro

## Screenshots:

### iOS

![simulator screen shot - iphone x - 2018-06-22 at 23 36 15](https://user-images.githubusercontent.com/14052885/41779732-1517459e-7676-11e8-9d11-5d48886563f8.png)
![simulator screen shot - iphone x - 2018-03-05 at 16 10 02](https://user-images.githubusercontent.com/14052885/36958515-93c82f84-2090-11e8-970a-fc80442ac8f1.png)
![simulator screen shot - iphone x - 2018-06-22 at 23 42 10](https://user-images.githubusercontent.com/14052885/41779733-1550a258-7676-11e8-94cd-575d02e84e49.png)
![simulator screen shot - iphone x - 2018-06-22 at 23 42 14](https://user-images.githubusercontent.com/14052885/41779734-15844e6e-7676-11e8-978a-33c6486a06c6.png)
![simulator screen shot - iphone x - 2018-06-22 at 13 25 52](https://user-images.githubusercontent.com/14052885/41756461-1c1e37e0-7620-11e8-8b2b-fc1741141da5.png)
![simulator screen shot - iphone x - 2018-06-22 at 13 25 55](https://user-images.githubusercontent.com/14052885/41756462-1c653ab4-7620-11e8-93f6-cb9dbc82c260.png)
![simulator screen shot - iphone x - 2018-06-22 at 13 25 59](https://user-images.githubusercontent.com/14052885/41756463-1cb3cd46-7620-11e8-9bc7-cd657dc506fd.png)
![simulator screen shot - iphone x - 2018-06-22 at 13 26 12](https://user-images.githubusercontent.com/14052885/41756552-76f32b94-7620-11e8-80e8-2860cb10146e.png)

## Technology stack:

* react-native
* react-navigation
* react-native-vector-icons
* react-native-indicators
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
`react-native run-ios`

Run on android:
`react-native run-android`
