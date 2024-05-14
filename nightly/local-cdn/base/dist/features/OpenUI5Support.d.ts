import { CLDRData } from "../asset-registries/LocaleData.js";
import type { LegacyDateCalendarCustomizing } from "../features/LegacyDateFormats.js";
declare class OpenUI5Support {
    static isAtLeastVersion116(): boolean;
    static isOpenUI5Detected(): boolean;
    static init(): Promise<void>;
    static getConfigurationSettingsObject(): {
        animationMode?: undefined;
        language?: undefined;
        theme?: undefined;
        themeRoot?: undefined;
        rtl?: undefined;
        timezone?: undefined;
        calendarType?: undefined;
        formatSettings?: undefined;
    } | {
        animationMode: string;
        language: string;
        theme: string;
        themeRoot: string;
        rtl: string;
        timezone: string;
        calendarType: string;
        formatSettings: {
            firstDayOfWeek: number | undefined;
            legacyDateCalendarCustomizing: LegacyDateCalendarCustomizing;
        };
    };
    static getLocaleDataObject(): CLDRData | undefined;
    static _listenForThemeChange(): void;
    static attachListeners(): void;
    static cssVariablesLoaded(): boolean | undefined;
}
export default OpenUI5Support;