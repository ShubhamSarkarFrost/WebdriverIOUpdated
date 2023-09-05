describe('Practice Login Page', () =>{
    it('Login Fail Page', async() =>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        console.log( await browser.getTitle());
        await expect(browser).toHaveTitleContaining('loginpagePractise')
        
    })
} )