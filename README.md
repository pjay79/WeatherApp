# WeatherApp

This a weather app built with React Native and powered by the Darksky weather API and Google Places API.

## Config

To run this app you will need to get a Darksky API key:
https://darksky.net/dev

You will also need a Google Places API Web Service key:
https://developers.google.com/places/web-service/intro

## Screenshots:

### iOS

![simulator screen shot - iphone x - 2018-03-05 at 16 08 15](https://user-images.githubusercontent.com/14052885/36958513-8ee86498-2090-11e8-9ae5-ff4f834fadb3.png)
![simulator screen shot - iphone x - 2018-03-05 at 16 10 02](https://user-images.githubusercontent.com/14052885/36958515-93c82f84-2090-11e8-970a-fc80442ac8f1.png)
![simulator screen shot - iphone x - 2018-03-05 at 16 10 13](https://user-images.githubusercontent.com/14052885/36958520-9611e320-2090-11e8-8fe5-f44ffbbe806d.png)
![simulator screen shot - iphone x - 2018-03-05 at 16 10 16](https://user-images.githubusercontent.com/14052885/36958521-964d115c-2090-11e8-8b80-fd2a781b1389.png)
![simulator screen shot - iphone x - 2018-03-05 at 16 06 32](https://user-images.githubusercontent.com/14052885/36958523-981aa030-2090-11e8-8478-4681973a32d3.png)
![simulator screen shot - iphone x - 2018-03-05 at 16 07 03](https://user-images.githubusercontent.com/14052885/36958528-9c71e1ac-2090-11e8-9e16-a480624ee5aa.png)
![simulator screen shot - iphone x - 2018-03-05 at 16 06 42](https://user-images.githubusercontent.com/14052885/36958533-a429376a-2090-11e8-93e4-fbb244ac2654.png)
![simulator screen shot - iphone x - 2018-03-05 at 16 06 47](https://user-images.githubusercontent.com/14052885/36958535-a461ae24-2090-11e8-9450-0a670b8b2df0.png)

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
`react-native-run-ios`

Run on android:
`react-native-run-android`
