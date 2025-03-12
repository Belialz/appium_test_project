describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const okButton = $('//android.widget.Button[@resource-id="android:id/button1"]');
        await okButton.getText();
        await okButton.click();
        expect(await okButton.isDisplayed()).toBeFalsy();
    })
})

