import { StyleData, StyleDataCSP } from "./types.js";
import { getCurrentRuntimeIndex, compareRuntimes } from "./Runtimes.js";

const isSSR = typeof document === "undefined";

const getStyleId = (name: string, value: string) => {
	return value ? `${name}|${value}` : name;
};

const shouldUpdate = (runtimeIndex: string | undefined) => {
	if (runtimeIndex === undefined) {
		return true;
	}
	return compareRuntimes(getCurrentRuntimeIndex(), parseInt(runtimeIndex)) === 1; // 1 means the current is newer, 0 means the same, -1 means the resource's runtime is newer
};

const createStyle = (data: StyleData, name: string, value = "", theme?: string) => {
	const content = typeof data === "string" ? data : data.content;
	const currentRuntimeIndex = getCurrentRuntimeIndex();

	const stylesheet = new CSSStyleSheet();
	stylesheet.replaceSync(content);
	(stylesheet as Record<string, any>)._ui5StyleId = getStyleId(name, value); // set an id so that we can find the style later
	if (theme) {
		(stylesheet as Record<string, any>)._ui5RuntimeIndex = currentRuntimeIndex;
		(stylesheet as Record<string, any>)._ui5Theme = theme;
	}
	document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];
};

const updateStyle = (data: StyleData, name: string, value = "", theme?: string) => {
	const content = typeof data === "string" ? data : data.content;
	const currentRuntimeIndex = getCurrentRuntimeIndex();

	const stylesheet = document.adoptedStyleSheets.find(sh => (sh as Record<string, any>)._ui5StyleId === getStyleId(name, value));
	if (!stylesheet) {
		return;
	}

	if (!theme) {
		stylesheet.replaceSync(content || "");
	} else {
		const stylesheetRuntimeIndex: string | undefined = (stylesheet as Record<string, any>)._ui5RuntimeIndex;
		const stylesheetTheme: string | undefined = (stylesheet as Record<string, any>)._ui5Theme;
		if (stylesheetTheme !== theme || shouldUpdate(stylesheetRuntimeIndex)) {
			stylesheet.replaceSync(content || "");
			(stylesheet as Record<string, any>)._ui5RuntimeIndex = String(currentRuntimeIndex);
			(stylesheet as Record<string, any>)._ui5Theme = theme;
		}
	}
};

const hasStyle = (name: string, value = ""): boolean => {
	if (isSSR) {
		return true;
	}

	return !!document.adoptedStyleSheets.find(sh => (sh as Record<string, any>)._ui5StyleId === getStyleId(name, value));
};

const removeStyle = (name: string, value = "") => {
	document.adoptedStyleSheets = document.adoptedStyleSheets.filter(sh => (sh as Record<string, any>)._ui5StyleId !== getStyleId(name, value));
};

const createOrUpdateStyle = (data: StyleData, name: string, value = "", theme?: string) => {
	if (hasStyle(name, value)) {
		updateStyle(data, name, value, theme);
	} else {
		createStyle(data, name, value, theme);
	}
};

const mergeStyles = (style1?: StyleData, style2?: StyleData) => {
	if (style1 === undefined) {
		return style2;
	}
	if (style2 === undefined) {
		return style1;
	}
	const style2Content = typeof style2 === "string" ? style2 : style2.content;
	if (typeof style1 === "string") {
		return `${style1} ${style2Content}`;
	}
	return {
		content: `${style1.content} ${style2Content}`,
		packageName: style1.packageName,
		fileName: style1.fileName,
	};
};

export {
	createStyle,
	hasStyle,
	updateStyle,
	removeStyle,
	createOrUpdateStyle,
	mergeStyles,
};

export type {
	StyleData,
	StyleDataCSP,
};
