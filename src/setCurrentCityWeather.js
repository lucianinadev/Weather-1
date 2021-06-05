/* DOM Elements */
import {
  currentCityLabel,
  currentWeatherIcon,
  currentTempLabel,
  currentFeelTempLabel,
} from './DOMElements.js';

/* Functions */
import { weatherIconsTranslation } from './weatherIconsTranslation.js';

/* Set Current City Weather */
const setCurrentCityWeather = (cityWeather, currentCityName) => {
  currentWeatherIcon.setAttribute(
    'data-icon',
    weatherIconsTranslation[`I${cityWeather.current.weather[0].icon}`]
  );
  currentCityLabel.textContent = currentCityName;
  currentTempLabel.textContent = `${Math.round(cityWeather.current.temp)}°`;
  currentFeelTempLabel.textContent = `Feels like ${Math.round(
    cityWeather.current.feels_like
  )}°`;
};

export { setCurrentCityWeather };
