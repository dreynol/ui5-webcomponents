import { assert } from "chai";

describe("Button general interaction", () => {
	before(async () => {
		await browser.url(`test/pages/Button.html`);
	});

	it("tests button's text rendering", async () => {
		const slotsLength = (await browser.$("#button1").shadow$$(".ui5-button-text>bdi>slot")).length;

		// The default slot
		assert.strictEqual(slotsLength, 1, "Button text is not rendered");
	});

	it("tests button's icon rendering", async () => {
		const button = await browser.$("#button1");

		await button.setAttribute("icon", "add");
		assert.ok(await button.shadow$("ui5-icon").isExisting(), "icon is present");

		await button.setAttribute("icon", "");
		assert.notOk(await button.shadow$("ui5-icon").isExisting(),"icon is not present");
	});

	it("tests button's slot rendering", async () => {
		const btnImage = await browser.$("#btnImage");
		assert.ok(await btnImage.isDisplayed(),  "Btn image is rendered");
	});

	it("tests button's icon only rendering", async () => {
		const oButtonIconOnlyComment = await browser.$("#icon-only-comment");
		const oButtonIconOnlyBlankText = await browser.$("#icon-only-blank-text");

		assert.strictEqual(await oButtonIconOnlyComment.getAttribute("icon-only"), "", "Button comment has attribute icon-only");
		assert.strictEqual(await oButtonIconOnlyBlankText.getAttribute("icon-only"), "", "Button blank text has attribute icon-only");
	});

	it("tests click event", async () => {
		const button = await browser.$("#button1");
		const field = await browser.$("#click-counter");

		await button.click();
		await button.keys("Space");
		await button.keys("Enter");

		assert.strictEqual(await field.getProperty("value"), "3", "Click should be called 3 times");
	});

	it("tests clicking on disabled button", async () => {
		const button = await browser.$("#button-disabled");
		const nativeButton = await button.shadow$("button");

		// don't test space and enter, as wdio always fires a click but the browser not.
		// await button.keys("Space");
		// await button.keys("Enter");

		await button.click();

		const field = await browser.$("#click-counter");
		assert.strictEqual(await field.getProperty("value"), "3", "Click should be called 3 times");
		assert.ok(await nativeButton.hasAttribute("disabled"), )
	});

	it("tests clicking on disabled button whith Icon", async () => {
		const button = await browser.$("#disabled-button-icon-only");
		const buttonIcon = await button.shadow$("[ui5-icon]");


		await button.click()

		const field = await browser.$("#click-counter");
		assert.strictEqual(await field.getProperty("value"), "3", "Click should be called 3 times");

		await buttonIcon.click();

		assert.strictEqual(await field.getProperty("value"), "3", "Click should be called 3 times");
	});

	it("click should call handler", async () => {

		const button = await browser.$("#button1");
		const field = await browser.$("#click-counter");

		await button.click();
		await button.keys("Space");
		await button.keys("Enter");

		assert.strictEqual(await field.getProperty("value"), "6", "click should be called 3 times");
	});

	it("click on disabled button should not call handler", async () => {
		const button = await browser.$("#button-disabled").shadow$("button");
		const field = await browser.$("#click-counter");

		// don't test space and enter, as wdio always fires a click but the browser not.
		// await button.keys("Space");
		// await button.keys("Enter");

		assert.strictEqual(await field.getProperty("value"), "6", "click should be called 6 times");
	});

	it("aria-expanded is properly applied on the button tag", async () => {
		const button = await browser.$("#button1");
		const innerButton = await button.shadow$("button");

		assert.strictEqual(await innerButton.getAttribute("aria-expanded"), "true", "Attribute is reflected");

		await button.click();

		assert.strictEqual(await innerButton.getAttribute("aria-expanded"), "false", "Attribute is reflected");
	});

	it("aria-haspopup and aira-controls are properly applied on the button tag", async () => {
		const button = await browser.$("#openDialogButton");
		const innerButton = await button.shadow$("button");

		assert.strictEqual(await innerButton.getAttribute("aria-haspopup"), "dialog", "Attribute is reflected");
		assert.strictEqual(await innerButton.getAttribute("aria-controls"), "registration-dialog", "Attribute is reflected");
	});

	it("tests button with text icon role", async () => {
		const button = await browser.$("#attentionIconButton");
		const icon = await button.shadow$("ui5-icon");

		assert.strictEqual(await icon.getAttribute("mode"), "Decorative", "icon has proper role");
	});

	it("setting accessible-name-ref on the host is reflected on the button tag", async () => {
		const button = await browser.$("#buttonAccNameRef").shadow$("button");

		assert.strictEqual(await button.getAttribute("aria-label"), "Download Application", "Attribute is reflected");
	});

	it("setting tooltip on the host is reflected on the button tag", async () => {
		const button = await browser.$("#customTooltip").shadow$("button");

		assert.strictEqual(await button.getAttribute("title"), "Go home", "Attribute is reflected");
	});

	it("tooltip from inner icon is propagated", async () => {
		const button = await browser.$("#download");
		const nativeButton = await button.shadow$("button");

		assert.strictEqual(await nativeButton.getAttribute("title"), "Download", "Icon tooltip is shown");
	});

	it("setting accessible-role on the host is reflected on the button tag", async () => {
		const button = await browser.$("#button-role-link").shadow$("button");

		assert.strictEqual(await button.getAttribute("role"), "link", "Attribute is reflected");
	});
	it("not setting accessible-role on the host keeps the correct role on the button tag", async () => {
		const button = await browser.$("#button1").shadow$("button");

		assert.strictEqual(await button.getAttribute("role"), "button", "Attribute is reflected");
	});

	it("should be focused when the click is on a slotted element", async () => {
		const button = await browser.$("#button-with-slot");
		await button.click();

		assert.ok(await button.matches(":focus"), "The button has received focus");
	});
});
