import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";
import "@ui5/webcomponents-icons/dist/decline.js";
import "@ui5/webcomponents-icons/dist/not-editable.js";
import "@ui5/webcomponents-icons/dist/error.js";
import "@ui5/webcomponents-icons/dist/alert.js";
import "@ui5/webcomponents-icons/dist/sys-enter-2.js";
import "@ui5/webcomponents-icons/dist/information.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type { IIcon } from "./Icon.js";
import ComboBoxItem from "./ComboBoxItem.js";
import Popover from "./Popover.js";
import ResponsivePopover from "./ResponsivePopover.js";
import type { ListItemClickEventDetail } from "./List.js";
import ComboBoxFilter from "./types/ComboBoxFilter.js";
import type FormSupportT from "./features/InputElementsFormSupport.js";
import PopoverHorizontalAlign from "./types/PopoverHorizontalAlign.js";
import { InputEventDetail } from "./Input.js";
/**
 * Interface for components that may be slotted inside a `ui5-combobox`
 * @public
 */
interface IComboBoxItem {
    text: string;
    focused: boolean;
    isGroupItem: boolean;
    selected?: boolean;
    additionalText?: string;
}
type ValueStateAnnouncement = Record<Exclude<ValueState, ValueState.None>, string>;
type ValueStateTypeAnnouncement = Record<Exclude<ValueState, ValueState.None>, string>;
type ComboBoxSelectionChangeEventDetail = {
    item: ComboBoxItem;
};
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-combobox` component represents a drop-down menu with a list of the available options and a text input field to narrow down the options.
 *
 * It is commonly used to enable users to select an option from a predefined list.
 *
 * ### Structure
 * The `ui5-combobox` consists of the following elements:
 *
 * -  Input field - displays the selected option or a custom user entry. Users can type to narrow down the list or enter their own value.
 * -  Drop-down arrow - expands\collapses the option list.
 * -  Option list - the list of available options.
 *
 * ### Keyboard Handling
 *
 * The `ui5-combobox` provides advanced keyboard handling.
 *
 * - [F4], [Alt]+[Up], or [Alt]+[Down] - Toggles the picker.
 * - [Escape] - Closes the picker, if open. If closed, cancels changes and reverts the typed in value.
 * - [Enter] or [Return] - If picker is open, takes over the currently selected item and closes it.
 * - [Down] - Selects the next matching item in the picker.
 * - [Up] - Selects the previous matching item in the picker.
 * - [Page Down] - Moves selection down by page size (10 items by default).
 * - [Page Up] - Moves selection up by page size (10 items by default).
 * - [Home] - If focus is in the ComboBox, moves cursor at the beginning of text. If focus is in the picker, selects the first item.
 * - [End] - If focus is in the ComboBox, moves cursor at the end of text. If focus is in the picker, selects the last item.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/ComboBox.js";`
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.0.0-rc.6
 */
declare class ComboBox extends UI5Element {
    /**
     * Defines the value of the component.
     * @default ""
     * @formEvents change input
     * @formProperty
     * @public
     */
    value: string;
    /**
     * Defines whether the value will be autocompleted to match an item
     * @default false
     * @public
     * @since 1.19.0
     */
    noTypeahead: boolean;
    /**
     * Defines the "live" value of the component.
     *
     * **Note:** If we have an item e.g. "Bulgaria", "B" is typed, "ulgaria" is typed ahead, value will be "Bulgaria", filterValue will be "B".
     *
     * **Note:** Initially the filter value is synced with value.
     * @default ""
     * @private
     */
    filterValue: string;
    /**
     * Defines a short hint intended to aid the user with data entry when the
     * component has no value.
     * @default ""
     * @public
     */
    placeholder: string;
    /**
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is completely noninteractive.
     * @default false
     * @public
     */
    disabled: boolean;
    /**
     * Defines the value state of the component.
     * @default "None"
     * @public
     */
    valueState: `${ValueState}`;
    /**
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     * @default false
     * @public
     */
    readonly: boolean;
    /**
     * Defines whether the component is required.
     * @default false
     * @public
     */
    required: boolean;
    /**
     * Indicates whether a loading indicator should be shown in the picker.
     * @default false
     * @public
     */
    loading: boolean;
    /**
     * Defines the filter type of the component.
     * @default "StartsWithPerTerm"
     * @public
     */
    filter: `${ComboBoxFilter}`;
    /**
     * Defines whether the clear icon of the combobox will be shown.
     * @default false
     * @public
     * @since 1.20.1
     */
    showClearIcon: boolean;
    /**
     * Indicates whether the input is focssed
     * @private
     */
    focused: boolean;
    /**
     * Indicates whether the visual focus is on the value state header
     * @private
     */
    _isValueStateFocused: boolean;
    /**
     * Defines the accessible ARIA name of the component.
     * @default ""
     * @public
     * @since 1.0.0-rc.15
     */
    accessibleName: string;
    /**
     * Receives id(or many ids) of the elements that label the component
     * @default ""
     * @public
     * @since 1.0.0-rc.15
     */
    accessibleNameRef: string;
    _iconPressed: boolean;
    _filteredItems: Array<IComboBoxItem>;
    _listWidth: number;
    _effectiveShowClearIcon: boolean;
    /**
     * Defines the component items.
     * @public
     */
    items: Array<IComboBoxItem>;
    /**
     * Defines the value state message that will be displayed as pop up under the component.
     * The value state message slot should contain only one root element.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the `ui5-combobox` is in `Information`, `Warning` or `Error` value state.
     * @since 1.0.0-rc.9
     * @public
     */
    valueStateMessage: Array<HTMLElement>;
    /**
     * Defines the icon to be displayed in the input field.
     * @public
     * @since 1.0.0-rc.9
     */
    icon: Array<IIcon>;
    _initialRendering: boolean;
    _itemFocused: boolean;
    _autocomplete: boolean;
    _isKeyNavigation: boolean;
    _selectionPerformed: boolean;
    _lastValue: string;
    _selectedItemText: string;
    _userTypedValue: string;
    responsivePopover?: ResponsivePopover;
    valueStatePopover?: Popover;
    FormSupport?: typeof FormSupportT;
    static i18nBundle: I18nBundle;
    constructor();
    onBeforeRendering(): void;
    get iconsCount(): number;
    onAfterRendering(): Promise<void>;
    shouldClosePopover(): Promise<boolean>;
    _focusin(e: FocusEvent): void;
    _focusout(e: FocusEvent): void;
    _afterOpenPopover(): void;
    _afterClosePopover(): void;
    _toggleRespPopover(): Promise<void>;
    storeResponsivePopoverWidth(): Promise<void>;
    toggleValueStatePopover(open: boolean): void;
    openValueStatePopover(): Promise<void>;
    closeValueStatePopover(): Promise<void>;
    _getValueStatePopover(): Promise<Popover>;
    _resetFilter(): void;
    _arrowClick(): void;
    _handleMobileInput(e: CustomEvent<InputEventDetail>): void;
    _input(e: InputEvent): void;
    shouldAutocomplete(e: InputEvent): boolean;
    _startsWithMatchingItems(str: string): Array<IComboBoxItem>;
    _clearFocus(): void;
    handleNavKeyPress(e: KeyboardEvent): void;
    _handleItemNavigation(e: KeyboardEvent, indexOfItem: number, isForward: boolean): void;
    _handleArrowDown(e: KeyboardEvent, indexOfItem: number): void;
    _handleArrowUp(e: KeyboardEvent, indexOfItem: number): void;
    _handlePageUp(e: KeyboardEvent, indexOfItem: number): void;
    _handlePageDown(e: KeyboardEvent, indexOfItem: number): void;
    _handleHome(e: KeyboardEvent): void;
    _handleEnd(e: KeyboardEvent): void;
    _keyup(): void;
    _keydown(e: KeyboardEvent): void;
    _click(): void;
    _closeRespPopover(e?: Event): void;
    _openRespPopover(): Promise<void>;
    _filterItems(str: string): IComboBoxItem[];
    /**
     * Returns true if the group header should be shown (if there is a filtered suggestion item for this group item)
     * @private
     */
    static _groupItemFilter(item: IComboBoxItem, idx: number, allItems: Array<IComboBoxItem>, filteredItems: Array<IComboBoxItem>): boolean | undefined;
    _getFirstMatchingItem(current: string): ComboBoxItem | undefined;
    _applyAtomicValueAndSelection(item: ComboBoxItem, filterValue: string, highlightValue: boolean): void;
    _selectMatchingItem(): void;
    _fireChangeEvent(): void;
    _inputChange(e: Event): void;
    _itemMousedown(e: MouseEvent): void;
    _selectItem(e: CustomEvent<ListItemClickEventDetail>): void;
    _onItemFocus(): void;
    _announceSelectedItem(indexOfItem: number): void;
    _clear(): void;
    _scrollToItem(indexOfItem: number, forward: boolean): Promise<void>;
    _announceValueStateText(): void;
    get _headerTitleText(): string;
    get _iconAccessibleNameText(): string;
    get inner(): HTMLInputElement;
    _getPicker(): Promise<ResponsivePopover>;
    get hasValueState(): boolean;
    get hasValueStateText(): boolean;
    get ariaValueStateHiddenText(): string;
    get valueStateDefaultText(): string | undefined;
    get valueStateMessageText(): Array<Node>;
    get valueStateTextMappings(): ValueStateAnnouncement;
    get valueStateTypeMappings(): ValueStateTypeAnnouncement;
    get shouldOpenValueStateMessagePopover(): boolean;
    get shouldDisplayDefaultValueStateMessage(): boolean;
    get _valueStatePopoverHorizontalAlign(): `${PopoverHorizontalAlign}`;
    /**
     * This method is relevant for sap_horizon theme only
     */
    get _valueStateMessageIcon(): string;
    get open(): boolean;
    get _isPhone(): boolean;
    get itemTabIndex(): undefined;
    get ariaLabelText(): string | undefined;
    get clearIconAccessibleName(): string;
    static onDefine(): Promise<void>;
    get styles(): {
        popoverHeader: {
            width: string;
        };
        suggestionPopoverHeader: {
            display: string;
            width: string;
        };
        suggestionsPopover: {
            "min-width": string;
            "max-width": string;
        };
    };
    get classes(): {
        popover: {
            "ui5-suggestions-popover": boolean;
            "ui5-popover-with-value-state-header-phone": boolean;
            "ui5-popover-with-value-state-header": boolean;
        };
        popoverValueState: {
            "ui5-valuestatemessage-header": boolean;
            "ui5-valuestatemessage-root": boolean;
            "ui5-valuestatemessage--success": boolean;
            "ui5-valuestatemessage--error": boolean;
            "ui5-valuestatemessage--warning": boolean;
            "ui5-valuestatemessage--information": boolean;
        };
    };
}
export default ComboBox;
export type { ComboBoxSelectionChangeEventDetail, IComboBoxItem, };
