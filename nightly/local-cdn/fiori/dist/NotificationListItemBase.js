var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { isSpace } from "@ui5/webcomponents-base/dist/Keys.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { getEventMark } from "@ui5/webcomponents-base/dist/MarkedEvents.js";
import ListItemBase from "@ui5/webcomponents/dist/ListItemBase.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
/**
 * @class
 *
 * The base class of the `NotificationListItem` and `NotificationListGroupItem`.
 * @constructor
 * @extends ListItemBase
 * @since 1.0.0-rc.8
 * @public
 */
class NotificationListItemBase extends ListItemBase {
    get hasTitleText() {
        return !!this.titleText.length;
    }
    /**
     * Event handlers
     */
    _onkeydown(e) {
        super._onkeydown(e);
        if (getEventMark(e) === "button") {
            return;
        }
        if (isSpace(e)) {
            e.preventDefault();
        }
    }
    static async onDefine() {
        NotificationListItemBase.i18nFioriBundle = await getI18nBundle("@ui5/webcomponents-fiori");
    }
}
__decorate([
    property()
], NotificationListItemBase.prototype, "titleText", void 0);
__decorate([
    property({ type: Boolean })
], NotificationListItemBase.prototype, "read", void 0);
__decorate([
    property({ type: Boolean })
], NotificationListItemBase.prototype, "loading", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 1000 })
], NotificationListItemBase.prototype, "loadingDelay", void 0);
export default NotificationListItemBase;
//# sourceMappingURL=NotificationListItemBase.js.map