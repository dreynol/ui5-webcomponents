var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Timeline_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { isTabNext, isTabPrevious } from "@ui5/webcomponents-base/dist/Keys.js";
import ItemNavigation from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import NavigationMode from "@ui5/webcomponents-base/dist/types/NavigationMode.js";
import { getEventMark } from "@ui5/webcomponents-base/dist/MarkedEvents.js";
import { TIMELINE_ARIA_LABEL } from "./generated/i18n/i18n-defaults.js";
import TimelineTemplate from "./generated/templates/TimelineTemplate.lit.js";
import TimelineItem from "./TimelineItem.js";
// Styles
import TimelineCss from "./generated/themes/Timeline.css.js";
import TimelineLayout from "./types/TimelineLayout.js";
const SHORT_LINE_WIDTH = "ShortLineWidth";
const LARGE_LINE_WIDTH = "LargeLineWidth";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-timeline` component shows entries (such as objects, events, or posts) in chronological order.
 * A common use case is to provide information about changes to an object, or events related to an object.
 * These entries can be generated by the system (for example, value XY changed from A to B), or added manually.
 * There are two distinct variants of the timeline: basic and social. The basic timeline is read-only,
 * while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam.
 * @constructor
 * @extends UI5Element
 * @public
 * @since 0.8.0
 */
let Timeline = Timeline_1 = class Timeline extends UI5Element {
    constructor() {
        super();
        this._itemNavigation = new ItemNavigation(this, {
            getItemsCallback: () => this.items,
        });
    }
    static async onDefine() {
        Timeline_1.i18nBundle = await getI18nBundle("@ui5/webcomponents-fiori");
    }
    get ariaLabel() {
        return this.accessibleName
            ? `${Timeline_1.i18nBundle.getText(TIMELINE_ARIA_LABEL)} ${this.accessibleName}`
            : Timeline_1.i18nBundle.getText(TIMELINE_ARIA_LABEL);
    }
    _onfocusin(e) {
        const target = e.target;
        this._itemNavigation.setCurrentItem(target);
    }
    onBeforeRendering() {
        this._itemNavigation._navigationMode = this.layout === TimelineLayout.Horizontal ? NavigationMode.Horizontal : NavigationMode.Vertical;
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].layout = this.layout;
            if (this.items[i + 1] && !!this.items[i + 1].icon) {
                this.items[i].forcedLineWidth = SHORT_LINE_WIDTH;
            }
            else if (this.items[i].icon && this.items[i + 1] && !this.items[i + 1].icon) {
                this.items[i].forcedLineWidth = LARGE_LINE_WIDTH;
            }
        }
    }
    _onkeydown(e) {
        const target = e.target;
        if (isTabNext(e)) {
            if (!target.nameClickable || getEventMark(e) === "link") {
                this._handleTabNextOrPrevious(e, isTabNext(e));
            }
        }
        else if (isTabPrevious(e)) {
            this._handleTabNextOrPrevious(e);
        }
    }
    _handleTabNextOrPrevious(e, isNext) {
        const target = e.target;
        const nextTargetIndex = isNext ? this.items.indexOf(target) + 1 : this.items.indexOf(target) - 1;
        const nextTarget = this.items[nextTargetIndex];
        if (!nextTarget) {
            return;
        }
        if (nextTarget.nameClickable && !isNext) {
            e.preventDefault();
            nextTarget.focusLink();
            return;
        }
        e.preventDefault();
        nextTarget.focus();
        this._itemNavigation.setCurrentItem(nextTarget);
    }
};
__decorate([
    property({ type: TimelineLayout, defaultValue: TimelineLayout.Vertical })
], Timeline.prototype, "layout", void 0);
__decorate([
    property()
], Timeline.prototype, "accessibleName", void 0);
__decorate([
    slot({ type: HTMLElement, individualSlots: true, "default": true })
], Timeline.prototype, "items", void 0);
Timeline = Timeline_1 = __decorate([
    customElement({
        tag: "ui5-timeline",
        languageAware: true,
        renderer: litRender,
        styles: TimelineCss,
        template: TimelineTemplate,
        dependencies: [TimelineItem],
    })
], Timeline);
Timeline.define();
export default Timeline;
//# sourceMappingURL=Timeline.js.map