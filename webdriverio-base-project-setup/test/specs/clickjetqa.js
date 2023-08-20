describe('Home Page', () => {
  it('Open URL & assert title', async () => {
    // Open URL
    await browser.url("https://rahulshettyacademy.com/dropdownsPractise/");
    await browser.maximizeWindow();

    // Assert title
    await expect(browser).toHaveTitle("QAClickJet - Flight Booking for Domestic and International, Cheap Air Tickets");
  });
}); 

describe('Home Page', () => {
  it('Open URL & assert title', async () => {
    // Open URL
    await browser.url("https://rahulshettyacademy.com/dropdownsPractise/");
    await browser.maximizeWindow();
    
    const roundTrip = ".//input[@id='ctl00_mainContent_rbtnl_Trip_1']";
    const roundTripTagColor = ".//label[@for='ctl00_mainContent_rbtnl_Trip_1']"
    await $(roundTrip).click();
    const color = await $(roundTripTagColor).getCSSProperty('color')
    console.log(color.value)

  });
}); 


describe('Home Page', () => {
  it('Open URL & assert title', async () => {
    // Open URL
    await browser.url("https://rahulshettyacademy.com/dropdownsPractise/");
    await browser.maximizeWindow();
    
    const FromDestination = ".//input[@id='ctl00_mainContent_ddl_originStation1_CTXT']"
    await $(FromDestination).click();
    

  });
}); 