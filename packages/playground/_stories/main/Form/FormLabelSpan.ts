import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type Form from "@ui5/webcomponents/dist/Form.js";
import type { UI5StoryArgs } from "../../../types.js";
import type { StoryArgsSlots } from "./argTypes.js";


const FormLabelSpanTemplate: UI5StoryArgs<Form, StoryArgsSlots> = (args) => html`
<style>
	.text {
		display: inline-block;
		font-size: var(--sapFontSize);
		font-family: var(--sapFontFamily);
		color: var(--sapTextColor);
		line-height: normal;
		white-space: pre-line;
		word-wrap: break-word;
		cursor: text;
}
</style>
	${unsafeHTML(args.default)}
`;

const FormLabelSpan = FormLabelSpanTemplate.bind({});
FormLabelSpan.args = {
	default: `
	<ui5-form header-text="Address (label-span=S12 M12 L12 XL12)" layout="S1 M2 L2 XL2" label-span="S12 M12 L12 XL12">
	<ui5-form-group header-text="Address">
		<ui5-form-item>
			<ui5-label slot="labelContent">Name:</ui5-label>
			<span class="text">Red Point Stores</span>
		</ui5-form-item>
		
		<ui5-form-item>
			<ui5-label slot="labelContent">ZIPCode/City:</ui5-label>
			<span class="text">411 Maintown</span>
		</ui5-form-item>
		
		<ui5-form-item>
			<ui5-label slot="labelContent">Street:</ui5-label>
			<span class="text">Main St 1618</span>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Country:</ui5-label>
			<span class="text">Germany</span>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">WebSite:</ui5-label>
			<ui5-link href="sap.com">sap.com</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Twitter:</ui5-label>
			<span class="text">@sap</span>
		</ui5-form-item>
		
		<ui5-form-item>
			<ui5-label slot="labelContent">Email:</ui5-label>
			<span class="text">john.smith@sap.com</span>
		</ui5-form-item>
		
		<ui5-form-item>
			<ui5-label slot="labelContent">Tel:</ui5-label>
			<ui5-link>+49 6227 747474</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">SMS:</ui5-label>
			<ui5-link>+49 6227 747474</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Mobile:</ui5-label>
			<ui5-link href="sap.com">+49 6227 747474</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Pager:</ui5-label>
			<ui5-link href="sap.com">+49 6227 747474</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Fax:</ui5-label>
			<ui5-link href="sap.com">+49 6227 747474</ui5-link>
		</ui5-form-item>
	</ui5-form-group>
	</ui5-form>
	
	<br><br><br>

	<ui5-form header-text="Address (label-span=S6 M6 L6 XL6)" layout="S1 M2 L2 XL2" label-span="S6 M6 L6 XL6">
	<ui5-form-group header-text="Address">
		<ui5-form-item>
			<ui5-label slot="labelContent">Name:</ui5-label>
			<span class="text">Red Point Stores</span>
		</ui5-form-item>
		
		<ui5-form-item>
			<ui5-label slot="labelContent">ZIPCode/City:</ui5-label>
			<span class="text">411 Maintown</span>
		</ui5-form-item>
		
		<ui5-form-item>
			<ui5-label slot="labelContent">Street:</ui5-label>
			<span class="text">Main St 1618</span>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Country:</ui5-label>
			<span class="text">Germany</span>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">WebSite:</ui5-label>
			<ui5-link href="sap.com">sap.com</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Twitter:</ui5-label>
			<span class="text">@sap</span>
		</ui5-form-item>
		
		<ui5-form-item>
			<ui5-label slot="labelContent">Email:</ui5-label>
			<span class="text">john.smith@sap.com</span>
		</ui5-form-item>
		
		<ui5-form-item>
			<ui5-label slot="labelContent">Tel:</ui5-label>
			<ui5-link>+49 6227 747474</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">SMS:</ui5-label>
			<ui5-link>+49 6227 747474</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Mobile:</ui5-label>
			<ui5-link href="sap.com">+49 6227 747474</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Pager:</ui5-label>
			<ui5-link href="sap.com">+49 6227 747474</ui5-link>
		</ui5-form-item>

		<ui5-form-item>
			<ui5-label slot="labelContent">Fax:</ui5-label>
			<ui5-link href="sap.com">+49 6227 747474</ui5-link>
		</ui5-form-item>
	</ui5-form-group>
	</ui5-form>`
};

export { FormLabelSpan };
