/* eslint no-unused-vars: 0 */
import { html, svg, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-radio-root" role="radio" aria-checked="${ifDefined(this.checked)}" aria-disabled="${ifDefined(this.effectiveAriaDisabled)}" aria-describedby="${ifDefined(this.effectiveAriaDescribedBy)}" aria-label="${ifDefined(this.ariaLabelText)}" tabindex="${ifDefined(this.effectiveTabIndex)}" @click="${this._onclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @focusout="${this._onfocusout}"><div class='ui5-radio-inner ${classMap(this.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${blockSVG1.call(this, context, tags, suffix)}</svg><input type='radio' ?required="${this.required}" ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.effectiveAriaDisabled}" name="${ifDefined(this.name)}"  data-sap-no-tab-ref/></div>${this.text ? block1.call(this, context, tags, suffix) : undefined}${this.hasValueState ? block2.call(this, context, tags, suffix) : undefined}</div>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-label", tags, suffix)} id="${ifDefined(this._id)}-label" class="ui5-radio-label" for="${ifDefined(this._id)}" wrapping-type="${ifDefined(this.wrappingType)}">${ifDefined(this.text)}</${scopeTag("ui5-label", tags, suffix)}>` : html `<ui5-label id="${ifDefined(this._id)}-label" class="ui5-radio-label" for="${ifDefined(this._id)}" wrapping-type="${ifDefined(this.wrappingType)}">${ifDefined(this.text)}</ui5-label>`; }
function block2(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-descr" class="ui5-hidden-text">${ifDefined(this.valueStateText)}</span>`; }
function blockSVG1(context, tags, suffix) {
    return svg `<circle part="outer-ring" class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle part="inner-ring" class="ui5-radio-svg-inner" cx="50%" cy="50%" />`;
}
;
export default block0;
//# sourceMappingURL=RadioButtonTemplate.lit.js.map