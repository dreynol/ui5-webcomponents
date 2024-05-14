import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import ListItemBase from "./ListItemBase.js";
import ListItemGroupHeader from "./ListItemGroupHeader.js";
/**
 * @class
 * ### Overview
 * The `ui5-li-group` is a special list item, used only to create groups of list items.
 *
 * This is the item to use inside a `ui5-list`.
 *
 * ### ES6 Module Import
 * `import "@ui5/webcomponents/dist/ListItemGroup.js";`
 * @csspart header - Used to style the header item of the group
 * @constructor
 * @extends UI5Element
 * @public
 * @since 2.0
 */
declare class ListItemGroup extends UI5Element {
    /**
     * Defines the header text of the <code>ui5-li-group</code>.
     * @public
     * @default ""
     */
    headerText: string;
    /**
     * Defines the accessible name of the header.
     * @public
     * @default ""
     */
    headerAccessibleName: string;
    /**
     * Defines the items of the <code>ui5-li-group</code>.
     * @public
     */
    items: Array<ListItemBase>;
    /**
    * Defines the header of the component.
    *
    * **Note:** Using this slot, the default header text of group and the value of `headerText` property will be overwritten.
    * @public
    */
    header: Array<ListItemBase>;
    get groupHeaderItem(): ListItemGroupHeader;
    get hasHeader(): boolean;
    get hasFormattedHeader(): boolean;
    get isListItemGroup(): boolean;
}
declare const isInstanceOfListItemGroup: (object: any) => object is ListItemGroup;
export default ListItemGroup;
export { isInstanceOfListItemGroup };