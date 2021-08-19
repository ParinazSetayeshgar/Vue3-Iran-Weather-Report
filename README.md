# Vue3-Iran-Weather-Report

The project is going to show current weather of whole Iran regions.

Vue3-country-region-select library is used for creating dropdown menu of regions.

Openweather API is used for fetching weather data by fetch() method & AJAX technology.

Normlize-text library is used for normilizing name of regions to get proper API response. Also some changes will be made to few names of regions according to names which API support by switch-case statements in changeRegionName method of citiesMenu.vue component.

For ruuning the project:
1) Clone the project.
2) Install packages in dependencies section of package.json file in project root directory through Terminal.

        npm install


3) Run the command below in Terminal. Make sure you are in the project root directory. This will run the Vue project on local host.

        npm run serve
