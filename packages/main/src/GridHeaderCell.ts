import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";

import GridHeaderCellTemplate from "./generated/templates/GridHeaderCellTemplate.lit.js";
import GridHeaderCellCss from "./generated/themes/GridHeaderCell.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>ui5-grid-header-cell</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @ui5/webcomponents/dist/GridHeaderCell.js";</code>
 *
 * @constructor
 * @extends UI5Element
 * @public
 */
@customElement({
	tag: "ui5-grid-header-cell",
	renderer: litRender,
	styles: GridHeaderCellCss,
	template: GridHeaderCellTemplate,
	dependencies: [],
})
class GridHeaderCell extends UI5Element {
	/**
	 * Defines the content of the component.
	 *
	 * @public
	 */
	@slot({ type: Node, "default": true })
	content!: Array<Node>;

	/**
	 * Defines the width of the component, including padding and border.
	 *
	 * @default "auto"
	 * @public
	 */
	@property({ type: String, defaultValue: "auto" })
	width!: string;

	@property({ type: String, defaultValue: "auto" })
	minWidth!: string;

	@property({ type: String, defaultValue: "auto" })
	maxWidth!: string;

	@property({ validator: Integer, defaultValue: 0 })
	importance!: number;

	@property({ defaultValue: "-1", noAttribute: true })
	forcedTabIndex!: string;

	@property({ type: Boolean, noAttribute: true })
	_popin!: boolean;

	_popinWidth: number;

	constructor() {
		super();
		this._popinWidth = 0;
	}

	onEnterDOM() {
		this.setAttribute("role", "columnheader");
		this.style.minWidth = this.minWidth;
		this.style.maxWidth = this.maxWidth;
		this.style.width = this.width;
	}

	onBeforeRendering() {
		this.setAttribute("tabindex", this.forcedTabIndex);
	}

	getFocusDomRef() {
		return this;
	}
}

GridHeaderCell.define();

export default GridHeaderCell;