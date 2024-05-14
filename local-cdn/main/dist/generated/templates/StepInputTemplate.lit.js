/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div id="${ifDefined(this._id)}" class="ui5-step-input-root" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${!this.readonly ? block1.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-input", tags, suffix)} id="${ifDefined(this._id)}-inner" class="ui5-step-input-input" placeholder="${ifDefined(this.placeholder)}" type="${ifDefined(this.type)}" value="${ifDefined(this._displayValue)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${ifDefined(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${ifDefined(this.accInfo)}" ._nativeInputAttributes="${ifDefined(this.inputAttributes)}" @ui5-change="${ifDefined(this._onInputChange)}" @focusout="${this._onInputFocusOut}" @focusin="${this._onInputFocusIn}">${this.valueStateMessage.length ? block2.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-input", tags, suffix)}>${!this.readonly ? block3.call(this, context, tags, suffix) : undefined}<slot name="formSupport"></slot></div>` : html `<div id="${ifDefined(this._id)}" class="ui5-step-input-root" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${!this.readonly ? block1.call(this, context, tags, suffix) : undefined}<ui5-input id="${ifDefined(this._id)}-inner" class="ui5-step-input-input" placeholder="${ifDefined(this.placeholder)}" type="${ifDefined(this.type)}" value="${ifDefined(this._displayValue)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${ifDefined(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${ifDefined(this.accInfo)}" ._nativeInputAttributes="${ifDefined(this.inputAttributes)}" @ui5-change="${ifDefined(this._onInputChange)}" @focusout="${this._onInputFocusOut}" @focusin="${this._onInputFocusIn}">${this.valueStateMessage.length ? block2.call(this, context, tags, suffix) : undefined}</ui5-input>${!this.readonly ? block3.call(this, context, tags, suffix) : undefined}<slot name="formSupport"></slot></div>`; }
function block1(context, tags, suffix) { return suffix ? html `<div class="ui5-step-icon ui5-step-dec" title="${ifDefined(this.decIconTitle)}"><${scopeTag("ui5-icon", tags, suffix)} id="${ifDefined(this._id)}-dec" name="${ifDefined(this.decIconName)}" tabindex="-1" accessible-name="${ifDefined(this.decIconTitle)}" @click="${this._decValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._decSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" input-icon show-tooltip ?clickable="${this._decIconClickable}"></${scopeTag("ui5-icon", tags, suffix)}></div>` : html `<div class="ui5-step-icon ui5-step-dec" title="${ifDefined(this.decIconTitle)}"><ui5-icon id="${ifDefined(this._id)}-dec" name="${ifDefined(this.decIconName)}" tabindex="-1" accessible-name="${ifDefined(this.decIconTitle)}" @click="${this._decValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._decSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" input-icon show-tooltip ?clickable="${this._decIconClickable}"></ui5-icon></div>`; }
function block2(context, tags, suffix) { return html `<slot name="valueStateMessage" slot="valueStateMessage"></slot>`; }
function block3(context, tags, suffix) { return suffix ? html `<div class="ui5-step-icon ui5-step-inc" title="${ifDefined(this.incIconTitle)}"><${scopeTag("ui5-icon", tags, suffix)} id="${ifDefined(this._id)}-inc" name="${ifDefined(this.incIconName)}" tabindex="-1" accessible-name="${ifDefined(this.incIconTitle)}" @click="${this._incValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._incSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" input-icon show-tooltip ?clickable="${this._incIconClickable}"></${scopeTag("ui5-icon", tags, suffix)}></div>` : html `<div class="ui5-step-icon ui5-step-inc" title="${ifDefined(this.incIconTitle)}"><ui5-icon id="${ifDefined(this._id)}-inc" name="${ifDefined(this.incIconName)}" tabindex="-1" accessible-name="${ifDefined(this.incIconTitle)}" @click="${this._incValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._incSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" input-icon show-tooltip ?clickable="${this._incIconClickable}"></ui5-icon></div>`; }
export default block0;
//# sourceMappingURL=StepInputTemplate.lit.js.map