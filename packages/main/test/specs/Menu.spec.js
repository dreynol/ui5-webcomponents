import { assert } from "chai";

describe("Menu interaction", () => {
	it("Menu opens after button click", async () => {
		await browser.url(`test/pages/Menu.html`);
		const openButton = await browser.$("#btnOpen");

		await openButton.click();

		const menu = await browser.$("#menu");
		const popover = await menu.shadow$("ui5-responsive-popover");
		const _id = await menu.getProperty("_id");
		assert.strictEqual(await popover.getAttribute("id"), `${_id}-menu-rp`, "There is popover for the menu created in the static area");
	});

	it("Menu opens after setting of opener and open", async () => {
		await browser.url(`test/pages/Menu.html`);
		const openerButton = await browser.$("#btnAddOpener");
		const openButton = await browser.$("#btnToggleOpen");

		await openerButton.click();
		await openButton.click();

		const menu = await browser.$("#menu");
		const popover = await menu.shadow$("ui5-responsive-popover");
		const _id = await menu.getProperty("_id");

		assert.strictEqual(await popover.getAttribute("id"), `${_id}-menu-rp`, "There is popover for the menu created in the static area");
	});

	it("Top level menu items appearance", async () => {
		await browser.url(`test/pages/Menu.html`);
		const openButton = await browser.$("#btnOpen");
		const menuItems = await browser.$$("ui5-menu[id='menu']>ui5-menu-item");

		await openButton.click();


		const popover = await browser.$("#menu").shadow$("ui5-responsive-popover");
		const listItems = await popover.$("ui5-list").$$("ui5-menu-li");

		assert.strictEqual(await menuItems.length, 7, "There are proper count of menu items in the top level menu");
		assert.strictEqual(await listItems.length, 7, "There are proper count of list items in the top level menu popover list");
		assert.strictEqual(await listItems[0].getAttribute("additional-text"), await menuItems[0].getAttribute("additional-text"), "The first list item has proper additional text set");
		assert.strictEqual(await listItems[1].getAttribute("disabled"), "true", "The second list item is disabled");
		assert.strictEqual(await listItems[2].getAttribute("starts-section"), "", "The third list item has separator addded");
		assert.ok(await listItems[3].$(".ui5-menu-item-icon-end"), "The third list item has sub-items and must have arrow right icon after the text");
		assert.ok(await listItems[4].$(".ui5-menu-item-dummy-icon"), "The fourth list item has no icon and has dummy div instead of icon");
	});

	it("Sub-menu creation, opening, closing and destroying", async () => {
		await browser.url(`test/pages/Menu.html`);
		const openButton = await browser.$("#btnOpen");

		await openButton.click();


		const menu = await browser.$("#menu");
		const popover = await menu.shadow$("ui5-responsive-popover");
		const listItems = await popover.$("ui5-list").$$("ui5-menu-li");
		const submenuList = await menu.shadow$(".ui5-menu-submenus");

		await listItems[3].click(); // open sub-menu

		await submenuList.$("ui5-menu:nth-of-type(1)").waitForExist({
			timeout: 1000,
			timeoutMsg: "First sub-menu is created"
		})

		assert.ok(await submenuList.$("ui5-menu"), "The second level sub-menu is being created"); // new ui5-menu element is created for the sub-menu

		await listItems[4].click(); // open sub-menu

		await submenuList.$("ui5-menu:nth-of-type(2)").waitForExist({
			timeout: 1000,
			timeoutMsg: "Second sub-menu is created"
		})

		assert.strictEqual(await submenuList.$$("ui5-menu").length, 2,
								"Two sub-menus are present");
	});

	it("Event firing after 'click' on menu item", async () => {
		await browser.url(`test/pages/Menu.html`);
		const openButton = await browser.$("#btnOpen");

		await openButton.click();


		const popover = await browser.$("#menu").shadow$("ui5-responsive-popover");
		const listItems = await popover.$("ui5-list").$$("ui5-menu-li");
		const selectionInput = await browser.$("#selectionInput");

		await listItems[0].click({x: 1, y: 1});

		assert.strictEqual(await selectionInput.getAttribute("value"), "New File(selection prevented)", "Click on first item fires an event");
	});

	it("Event firing after [Space] on menu item", async () => {
		await browser.url(`test/pages/Menu.html`);
		const openButton = await browser.$("#btnOpen");

		await openButton.click();


		const popover = await browser.$("#menu").shadow$("ui5-responsive-popover");
		const selectionInput = await browser.$("#selectionInput");

		await browser.keys("Space");

		assert.strictEqual(await selectionInput.getAttribute("value"), "New File(selection prevented)", "Pressing [Space] on first item fires an event");
	});

	it("Event firing after [Enter] on menu item", async () => {
		await browser.url(`test/pages/Menu.html`);
		const openButton = await browser.$("#btnOpen");

		await openButton.click();


		const popover = await browser.$("#menu").shadow$("ui5-responsive-popover");
		const selectionInput = await browser.$("#selectionInput");

		await browser.keys("Enter");

		assert.strictEqual(await selectionInput.getAttribute("value"), "New File(selection prevented)", "Pressing [Enter] on first item fires an event");
	});

	it("Events firing on open/close of the menu", async () => {
		await browser.url(`test/pages/Menu.html`);
		const openButton = await browser.$("#btnOpen");
		const eventLogger = await browser.$("#eventLogger");

		await openButton.click();
		await browser.pause(100);
		await browser.keys("Escape");

		const eventLoggerValue = await eventLogger.getValue();

		assert.notEqual(eventLoggerValue.indexOf("before-open"), -1, "'before-open' event is fired");
		assert.notEqual(eventLoggerValue.indexOf("open"), -1, "'open' event is fired");
		assert.notEqual(eventLoggerValue.indexOf("before-close"), -1, "'before-close' event is fired");
		assert.notEqual(eventLoggerValue.indexOf("close"), -1, "'close' event is fired");
	});

	it("Menu and Menu items busy indication", async () => {
			await browser.url(`test/pages/Menu.html`);
			const openButton = await browser.$("#btnOpen");
			await openButton.click();

			const menu = await browser.$("#menu");
			const menuPopover = await menu.shadow$("ui5-responsive-popover");
			const visualOpenItem = await menuPopover.$("ui5-menu-li[accessible-name='Open']");
			const visualCloseItem = await menuPopover.$("ui5-menu-li[accessible-name='Close']");

			await visualOpenItem.click();
			const openSubmenuPopover = await menu.shadow$(".ui5-menu-submenus ui5-menu:last-of-type").shadow$("ui5-responsive-popover");
			const openMenuList = await openSubmenuPopover.$("ui5-list");

			// assert.ok(await openMenuList.getProperty("loading"), "Busy property is properly propagated to the ui5-list component.");
			await browser.waitUntil(async () => {
				return (await openMenuList.$$("ui5-menu-li")).length === 4;
			}, 1500, "Two additional nodes have been added.");

			await visualCloseItem.click();

			const closeSubmenuPopover = await menu.shadow$(".ui5-menu-submenus ui5-menu:last-of-type").shadow$("ui5-responsive-popover");
			const busyIndicator = await closeSubmenuPopover.$("ui5-busy-indicator");
			assert.ok(await busyIndicator.getProperty("active"), "Active attribute is properly set.");
			assert.strictEqual(await busyIndicator.getProperty("size"), "M", "Size attribute is properly set.");
			assert.strictEqual(await busyIndicator.getProperty("delay"), 100, "Delay attribute is properly set.");
		});

		it("Prevent menu closing on item press", async () => {
			await browser.url(`test/pages/Menu.html`);
			const openButton = await browser.$("#btnOpen");
			await openButton.click();

			const menu = await browser.$("#menu");
			const menuPopover = await menu.shadow$("ui5-responsive-popover");

			const newFileItem = await menuPopover.$("ui5-menu-li[accessible-name='New File(selection prevented) Opens a file explorer']");
			await newFileItem.click();

			assert.ok(await menuPopover.getProperty("open"), "Menu is still opened.");
		});

		it("Enable navigaion over disabled items", async () => {
			await browser.url(`test/pages/Menu.html`);
			const openButton = await browser.$("#btnOpen");
			await openButton.click();

			const menu = await browser.$("#menu");
			const menuPopover = await menu.shadow$("ui5-responsive-popover");

			const listItem = await menuPopover.$("ui5-menu-li[accessible-name='Preferences']");
			await listItem.click();

			assert.ok(await listItem.getProperty("disabled"), "The menu item is disabled");
			assert.ok(await listItem.getProperty("focused"), "The menu item is focused");
		});
	});

describe("Menu Accessibility", () => {
	it("Menu and Menu items accessibility attributes", async () => {
		await browser.url(`test/pages/Menu.html`);
		const openButton = await browser.$("#btnOpen");

		await openButton.click();


		const popover = await browser.$("#menu").shadow$("ui5-responsive-popover");
		const list = await popover.$("ui5-list");
		const listItems = await popover.$("ui5-list").$$("ui5-menu-li");

		assert.strictEqual(await list.getAttribute("accessible-role"), "Menu", "There is proper 'menu' role for the menu list");
		assert.strictEqual(await listItems[0].getAttribute("accessible-role"), "MenuItem", "There is proper 'menuitem' role for the menu list items");
		assert.strictEqual(await listItems[0].getAttribute("tooltip"), "Select a file - prevent default", "There is a tooltip");
		assert.strictEqual(await listItems[2].shadow$(".ui5-li-root").getAttribute("aria-haspopup"), "menu", "There is an aria-haspopup attribute");
		assert.strictEqual(
			await listItems[0].getAttribute("accessible-name"),
			"New File(selection prevented) Opens a file explorer",
			"There is additional description added");
	});
});
