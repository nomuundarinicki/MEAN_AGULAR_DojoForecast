import { WeatherForcastPage } from './app.po';

describe('weather-forcast App', () => {
  let page: WeatherForcastPage;

  beforeEach(() => {
    page = new WeatherForcastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
