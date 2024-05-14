import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/TimelineItem.css.ts", content: `:host(:not([hidden])){display:block}.ui5-tli-root{display:flex}:host([layout="Horizontal"]) .ui5-tli-root{flex-direction:column}:host(:not([layout="Horizontal"])) .ui5-tli-indicator{position:relative;width:2rem}:host([layout="Horizontal"]) .ui5-tli-indicator{position:relative;display:flex;height:2rem;align-items:center}:host(:not([layout="Horizontal"])) .ui5-tli-indicator:before{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);width:1px;position:absolute;top:2.125rem;bottom:var(--_ui5-v1-24-3_timeline_tli_indicator_before_bottom);left:50%}:host([layout="Horizontal"]) .ui5-tli-indicator:before{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);height:1px;top:50%;position:absolute;left:2.0625rem;right:var(--_ui5-v1-24-3_timeline_tli_indicator_before_right)}:host(:not([layout="Horizontal"])) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{bottom:var(--_ui5-v1-24-3_timeline_tli_indicator_before_without_icon_bottom)}:host([layout="Horizontal"]) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{right:var(--_ui5-v1-24-3_timeline_tli_indicator_before_without_icon_right)}:host(:not([layout="Horizontal"])):not([icon]) .ui5-tli-indicator:before{bottom:var(--_ui5-v1-24-3_timeline_tli_indicator_before_without_icon_bottom);top:1.875rem}:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator:before{top:50%;right:var(--_ui5-v1-24-3_timeline_tli_indicator_before_without_icon_right);left:1.6875rem}:host(:not([layout="Horizontal"])):not([icon]) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{bottom:var(--_ui5-v1-24-3_timeline_tli_indicator_before_bottom)}:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{right:var(--_ui5-v1-24-3_timeline_tli_indicator_before_right)}:host(:not([icon])) .ui5-tli-indicator:after{content:"";display:inline-block;box-sizing:border-box;border:1px solid var(--sapContent_NonInteractiveIconColor);background-color:var(--sapContent_NonInteractiveIconColor);border-radius:50%;width:.375rem;height:.375rem;position:absolute;top:.9375rem;left:51.75%;transform:translate(-50%)}:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator:after{top:.84rem;left:.9625rem}:host(:last-child) .ui5-tli-indicator:before{display:none}.ui5-tli-icon-outer{display:flex;justify-content:center;align-items:center;margin-top:.25rem;height:1.625rem;width:2rem}:host([layout="Horizontal"]) .ui5-tli-icon-outer{margin-top:0rem;height:1.3125rem}.ui5-tli-icon{color:var(--sapContent_NonInteractiveIconColor);height:1.375rem;width:1.375rem}:host([layout="Horizontal"]) .ui5-tli-dummy-icon-container{height:1.375rem;width:1.375rem;display:inline-block;outline:none}.ui5-tli-bubble{background:var(--sapGroup_ContentBackground);border:1px solid var(--_ui5-v1-24-3_TimelineItem_bubble_border_color);box-sizing:border-box;border-radius:var(--_ui5-v1-24-3_TimelineItem_bubble_border_radius);flex:1;position:relative;margin-left:.5rem;padding:var(--_ui5-v1-24-3_TimelineItem_bubble_content_padding)}:host([layout="Horizontal"]) .ui5-tli-bubble{margin-top:.5rem;margin-left:0}.ui5-tli-bubble:focus{outline:none}.ui5-tli-bubble:focus:after{content:"";border:var(--_ui5-v1-24-3_TimelineItem_bubble_border_width) var(--_ui5-v1-24-3_TimelineItem_bubble_border_style) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-24-3_TimelineItem_bubble_focus_border_radius);position:absolute;top:var(--_ui5-v1-24-3_TimelineItem_bubble_border_top);right:var(--_ui5-v1-24-3_TimelineItem_bubble_border_right);bottom:var(--_ui5-v1-24-3_TimelineItem_bubble_border_bottom);left:var(--_ui5-v1-24-3_TimelineItem_bubble_border_left);pointer-events:none}:host([layout="Horizontal"]) .ui5-tli-bubble:focus:after{top:var(--_ui5-v1-24-3_TimelineItem_horizontal_bubble_focus_top_offset);left:var(--_ui5-v1-24-3_TimelineItem_horizontal_bubble_focus_left_offset)}.ui5-tli-bubble-arrow{width:var(--_ui5-v1-24-3_TimelineItem_arrow_size);padding-bottom:var(--_ui5-v1-24-3_TimelineItem_arrow_size);position:absolute;pointer-events:none;top:0;left:0;overflow:hidden}.ui5-tli-bubble-arrow:before{content:"";background:var(--sapGroup_ContentBackground);border:1px solid var(--_ui5-v1-24-3_TimelineItem_bubble_border_color);position:absolute;top:0;left:0;width:100%;height:100%;transform-origin:0 100%;transform:rotate(45deg)}:host([layout="Horizontal"]) .ui5-tli-bubble-arrow:before{transform:rotate(315deg)}.ui5-tli-bubble-arrow--left{left:calc(-1 * var(--_ui5-v1-24-3_TimelineItem_arrow_size))}.ui5-tli-bubble-arrow--top{top:calc(-1 * var(--_ui5-v1-24-3_TimelineItem_arrow_size))}.ui5-tli-bubble-arrow--left:before{left:50%;width:50%;transform-origin:100% 100%}.ui5-tli-bubble-arrow--top:before{left:42%;width:75%;transform-origin:152% 104%}.ui5-tli-title,.ui5-tli-desc{color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;font-size:var(--sapFontSize)}.ui5-tli-title span{display:inline-block}.ui5-tli-subtitle{color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-weight:400;font-size:var(--sapFontSmallSize);padding-top:var(--_ui5-v1-24-3_TimelineItem_bubble_content_subtitle_padding_top)}.ui5-tli-desc{padding-top:var(--_ui5-v1-24-3_TimelineItem_bubble_content_description_padding_top)}:dir(rtl) .ui5-tli-bubble-arrow--left{right:calc(-1 * var(--_ui5-v1-24-3_TimelineItem_arrow_size));left:auto;transform:scaleX(-1)}:dir(rtl) .ui5-tli-bubble-arrow--top{right:0;left:auto;transform:scaleX(-1)}:dir(rtl) .ui5-tli-bubble{margin-left:auto;margin-right:.5rem}:host([layout="Horizontal"]:dir(rtl)) .ui5-tli-bubble{margin-right:0}:dir(rtl) .ui5-tli-bubble:focus:after{left:var(--_ui5-v1-24-3_TimelineItem_bubble_rtl_left_offset);right:var(--_ui5-v1-24-3_TimelineItem_bubble_rtl_right_offset)}:host([layout="Horizontal"]:dir(rtl)) .ui5-tli-bubble:focus:after{right:0}:host([layout="Horizontal"]:not([icon]):dir(rtl)) .ui5-tli-indicator:after{right:.625rem}:host([layout="Horizontal"]:not([icon]):dir(rtl)) .ui5-tli-indicator:before{right:1.9375rem;left:var(--_ui5-v1-24-3_timeline_tli_indicator_before_right)}:host([layout="Horizontal"]:dir(rtl)) .ui5-tli-indicator:before{left:var(--_ui5-v1-24-3_timeline_tli_indicator_before_right);right:2.125rem}
` };
export default styleData;
//# sourceMappingURL=TimelineItem.css.js.map