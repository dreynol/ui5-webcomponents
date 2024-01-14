import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import executeTemplate from "@ui5/webcomponents-base/dist/renderer/executeTemplate.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";

import type FormItem from "./FormItem.js";
import { FormLabelPlacement } from "./Form.js";

import FormGroupTemplate from "./generated/templates/FormGroupTemplate.lit.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>ui5-form-group</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @ui5/webcomponents/dist/FormGroup.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webc.main.FormGroup
 * @extends sap.ui.webc.base.UI5Element
 * @tagname ui5-form-group
 * @public
 */
@customElement("ui5-form-group")
class FormGroup extends UI5Element {
	@property()
	heading!: string;

	@property({ validator: Integer, defaultValue: 1 })
	colsM!: number;

	@property({ validator: Integer, defaultValue: 1 })
	colsL!: number;

	@property({ validator: Integer, defaultValue: 1 })
	colsXl!: number;

	@property({ validator: Integer, defaultValue: 4 })
	labelSpanS!: number;

	@property({ validator: Integer, defaultValue: 4 })
	labelSpanM!: number;

	@property({ validator: Integer, defaultValue: 4 })
	labelSpanL!: number;

	@property({ validator: Integer, defaultValue: 4 })
	labelSpanXl!: number;

	@property({ type: FormLabelPlacement, defaultValue: FormLabelPlacement.Auto })
	labelPlacement!: FormLabelPlacement;

	@slot({
		type: HTMLElement,
		"default": true,
	})
	items!: Array<FormItem>;

	onBeforeRendering(): void {
		this.setLabelSpanAndPlacement();
	}

	setLabelSpanAndPlacement() {
		this.items.forEach((item: FormItem | FormGroup) => {
			item.labelSpanS = this.labelSpanS;
			item.labelSpanM = this.labelSpanM;
			item.labelSpanL = this.labelSpanL;
			item.labelSpanXl = this.labelSpanXl;
			item.labelPlacement = this.labelPlacement;
		});
	}

	get isGroup() {
		return true;
	}

	get formGroupRepresentation() {
		return executeTemplate(FormGroupTemplate, this);
	}
}

FormGroup.define();

export default FormGroup;
