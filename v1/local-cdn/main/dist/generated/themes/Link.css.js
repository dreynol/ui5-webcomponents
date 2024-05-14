import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Link.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapLinkColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);cursor:pointer;outline:none;text-decoration:var(--_ui5-v1-24-0_link_text_decoration);text-shadow:var(--sapContent_TextShadow);white-space:nowrap;overflow-wrap:normal}:host(:hover){color:var(--sapLink_Hover_Color);text-decoration:var(--_ui5-v1-24-0_link_hover_text_decoration)}:host(:active){color:var(--sapLink_Active_Color);text-decoration:var(--_ui5-v1-24-0_link_active_text_decoration)}:host([disabled]){pointer-events:none}:host([disabled]) .ui5-link-root{text-shadow:none;outline:none;cursor:default;pointer-events:none;opacity:var(--sapContent_DisabledOpacity)}:host([design="Emphasized"]) .ui5-link-root{font-family:var(--sapFontBoldFamily)}:host([design="Subtle"]){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5-v1-24-0_link_subtle_text_decoration)}:host([design="Subtle"]:hover:not(:active)){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5-v1-24-0_link_subtle_text_decoration_hover)}:host([wrapping-type="Normal"]){white-space:normal;overflow-wrap:break-word}.ui5-link-root{max-width:100%;display:inline-block;position:relative;overflow:hidden;text-overflow:ellipsis;outline:none;white-space:inherit;overflow-wrap:inherit;text-decoration:inherit;color:inherit}:host .ui5-link-root{border:var(--_ui5-v1-24-0_link_border);border-radius:var(--_ui5-v1-24-0_link_focus_border-radius)}:host([focused]) .ui5-link-root,:host([design="Subtle"][focused]) .ui5-link-root{background-color:var(--_ui5-v1-24-0_link_focus_background_color);border:var(--_ui5-v1-24-0_link_border_focus);border-radius:var(--_ui5-v1-24-0_link_focus_border-radius);text-shadow:none}:host([focused]),:host([design="Subtle"][focused]){color:var(--_ui5-v1-24-0_link_focus_color);text-decoration:var(--_ui5-v1-24-0_link_focus_text_decoration)}:host([focused]:hover:not(:active)){color:var(--_ui5-v1-24-0_link_focused_hover_text_color);text-decoration:var(--_ui5-v1-24-0_link_focused_hover_text_decoration)}
` };
export default styleData;
//# sourceMappingURL=Link.css.js.map