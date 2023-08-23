describe('Home Page', () => {
  it('Open URL & assert title', async () => {
    // Open URL
    await browser.url("https://rahulshettyacademy.com/dropdownsPractise/");
    await browser.maximizeWindow();

    // Assert title
    await expect(browser).toHaveTitle("QAClickJet - Flight Booking for Domestic and International, Cheap Air Tickets");
  });
}); 

describe('QAClickJet - Assert the color of the text when checkbox with same label is clicked ', () => {
  it('Open URL & assert title', async () => {
    // Open URL
    await browser.url("https://rahulshettyacademy.com/dropdownsPractise/");
    await browser.maximizeWindow();
    
    const roundTrip = await $('//input[@id="ctl00_mainContent_rbtnl_Trip_1"]');
    const roundTripTagColor = await $('//label[@for="ctl00_mainContent_rbtnl_Trip_1"]');
    await roundTrip.click()
    const color = await roundTripTagColor.getCSSProperty('color')
    console.log(color.value)

  });
}); 


describe('QAClickJet - Select From and To Destination from FROM & TO Dropdown', () => {
  it('Open URL & assert title', async () => {
    // Open URL
    await browser.url("https://rahulshettyacademy.com/dropdownsPractise/");
    await browser.maximizeWindow();
    
    const FromDestination = await $('//input[@id="ctl00_mainContent_ddl_originStation1_CTXT"]')
    const ToDestination = await $('//*[@id="ctl00_mainContent_ddl_destinationStation1_CTNR"]//a[@value="RDP"]')
    await FromDestination.click();
    await FromDestination.setValue('MAA');
    await ToDestination.waitForClickable({ timeout: 3000 });
    await ToDestination.click()
    const actualToDestinationValue = ToDestination.getValue();
    console.log(actualToDestinationValue)
    const actualFromDestinationValue = FromDestination.getValue();
    console.log(actualFromDestinationValue)
    await expect(FromDestination).toHaveText('Chennai (MAA)');
    await expect(ToDestination).toHaveText('Durgapur (RDP)');
    });
}); 