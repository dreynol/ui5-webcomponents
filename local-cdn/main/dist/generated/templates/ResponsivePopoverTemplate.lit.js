/* eslint no-unused-vars: 0 */
import { html, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `${this._isPhone ? block1.call(this, context, tags, suffix) : block7.call(this, context, tags, suffix)}`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-dialog", tags, suffix)} accessible-name=${ifDefined(this.accessibleName)} accessible-name-ref=${ifDefined(this.accessibleNameRef)} accessible-role=${ifDefined(this.accessibleRole)} stretch ?_disable-initial-focus="${ifDefined(this._disableInitialFocus)}" initial-focus="${ifDefined(this.initialFocus)}" @ui5-before-open="${ifDefined(this._beforeDialogOpen)}" @ui5-after-open="${ifDefined(this._propagateDialogEvent)}" @ui5-before-close="${ifDefined(this._propagateDialogEvent)}" @ui5-after-close="${ifDefined(this._afterDialogClose)}" exportparts="content, header, footer">${!this._hideHeader ? block2.call(this, context, tags, suffix) : undefined}<slot></slot><slot slot="footer" name="footer"></slot></${scopeTag("ui5-dialog", tags, suffix)}>` : html `<ui5-dialog accessible-name=${ifDefined(this.accessibleName)} accessible-name-ref=${ifDefined(this.accessibleNameRef)} accessible-role=${ifDefined(this.accessibleRole)} stretch ?_disable-initial-focus="${ifDefined(this._disableInitialFocus)}" initial-focus="${ifDefined(this.initialFocus)}" @ui5-before-open="${ifDefined(this._beforeDialogOpen)}" @ui5-after-open="${ifDefined(this._propagateDialogEvent)}" @ui5-before-close="${ifDefined(this._propagateDialogEvent)}" @ui5-after-close="${ifDefined(this._afterDialogClose)}" exportparts="content, header, footer">${!this._hideHeader ? block2.call(this, context, tags, suffix) : undefined}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`; }
function block2(context, tags, suffix) { return html `${this.header.length ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}`; }
function block3(context, tags, suffix) { return html `<slot slot="header" name="header"></slot>`; }
function block4(context, tags, suffix) { return html `<div class="${classMap(this.classes.header)}" slot="header">${this.headerText ? block5.call(this, context, tags, suffix) : undefined}${!this._hideCloseButton ? block6.call(this, context, tags, suffix) : undefined}</div>`; }
function block5(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-title", tags, suffix)} level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${ifDefined(this.headerText)}</${scopeTag("ui5-title", tags, suffix)}>` : html `<ui5-title level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${ifDefined(this.headerText)}</ui5-title>`; }
function block6(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" aria-label="${ifDefined(this._closeDialogAriaLabel)}" @click="${this.close}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="decline" design="Transparent" aria-label="${ifDefined(this._closeDialogAriaLabel)}" @click="${this.close}"></ui5-button>`; }
function block7(context, tags, suffix) { return html `<section style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(this.styles.arrow)}"></span>${this._displayHeader ? block8.call(this, context, tags, suffix) : undefined}<div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter ? block11.call(this, context, tags, suffix) : undefined}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`; }
function block8(context, tags, suffix) { return html `<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length ? block9.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</header>`; }
function block9(context, tags, suffix) { return html `<slot name="header"></slot>`; }
function block10(context, tags, suffix) { return html `<h1 class="ui5-popup-header-text">${ifDefined(this.headerText)}</h1>`; }
function block11(context, tags, suffix) { return html `${this.footer.length ? block12.call(this, context, tags, suffix) : undefined}`; }
function block12(context, tags, suffix) { return html `<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`; }
export default block0;
//# sourceMappingURL=ResponsivePopoverTemplate.lit.js.map