/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `${this.sideNavCollapsed ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}`; }
function block1(context, tags, suffix) { return html `<div class="ui5-sn-item-separator ${ifDefined(this.belowGroupClassName)}"></div><slot></slot><div class="ui5-sn-item-separator"></div>`; }
function block2(context, tags, suffix) { return html `<li id="${ifDefined(this._id)}" class="ui5-sn-list-li ${ifDefined(this.belowGroupClassName)}" role="none"><div class="ui5-sn-item-separator"></div><div class="ui5-sn-item ui5-sn-item-group ${ifDefined(this._classes)}" role="treeitem" data-sap-focus-ref @keydown="${this._onkeydown}" @click="${this._onclick}" @focusin="${this._onfocusin}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-expanded="${ifDefined(this._expanded)}" aria-description="${ifDefined(this.accDescription)}" title="${ifDefined(this._tooltip)}" aria-owns="${ifDefined(this._groupId)}"><div class="ui5-sn-item-text">${ifDefined(this.text)}</div>${this.items.length ? block3.call(this, context, tags, suffix) : undefined}</div>${this.items.length ? block4.call(this, context, tags, suffix) : undefined}<div class="ui5-sn-item-separator"></div></li>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="${ifDefined(this._toggleIconName)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-sn-item-toggle-icon" name="${ifDefined(this._toggleIconName)}"></ui5-icon>`; }
function block4(context, tags, suffix) { return html `<ul id="${ifDefined(this._groupId)}" class="ui5-sn-item-ul" aria-label="${ifDefined(this.text)}" role="group"><slot></slot></ul>`; }
export default block0;
//# sourceMappingURL=SideNavigationGroupTemplate.lit.js.map