# Weather API Library

### Installation:
Clone the starter code

Run - git clone https://github.com/JustJoshRiley/weatherAPI.git

### How it works:
1. Open Index.html

2. Grab your API_KEY from [Open Weather Map](https://openweathermap.org)
  * Create an account to gain access to your own

3. Lines 92 - 94:
  * Saves an API_KEY to a variable (apiKey).
  * Creates a new weather class
    * Passes the apiKey to the class (this can be done directly)

4. In the event listener we access methods of the weather class:
  * Line 116 gets the weather by zip from the user
  * Line 122 gets the weather by city from the user
  * Line 128 gets the weather by geolocation from the user