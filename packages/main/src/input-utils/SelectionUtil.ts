import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import TextArea from "../TextArea.js";

enum SelectionDirection {
	None = "none",
	Forward = "forward",
	Backward = "backward"
}

type CopyOptions = {
	textArea: UI5Element;
}

type SelectionEventDetails = {
	text: string,
	start: number,
	end: number,
	positionX: number,
	positionY: number,
	direction: SelectionDirection
}

type CaretPosition = {
	x: number;
	y: number;
}

const defaultStyleProperties = [
	"fontFamily",
	"fontSize",
	"fontWeight",
	"wordWrap",
	"whiteSpace",
	"borderLeftWidth",
	"borderTopWidth",
	"borderRightWidth",
	"borderBottomWidth",
];

const applyStyles = (target: HTMLElement, source: CSSStyleDeclaration, properties: string[]) => {
	properties.forEach(key => {
		// @ts-ignore
		target.style[key] = source[key];
	});
};

const createCopy = ({ textArea }: CopyOptions) => {
	const copiedElement = document.createElement("div");
	copiedElement.contentEditable = "true";
	// @ts-ignore
	copiedElement.textContent = textArea.value;

	const style = getComputedStyle(textArea);
	applyStyles(copiedElement, style, defaultStyleProperties);

	const innerElement = textArea.shadowRoot!.querySelector("textarea") || textArea.shadowRoot!.querySelector("input");

	if (innerElement) {
		if (innerElement.tagName === "INPUT") {
			copiedElement.style.display = "flex";
			copiedElement.style.alignItems = "center";
		}

		const innerTextAreaStyle = getComputedStyle(innerElement);

		// Additional styles for inner text area
		copiedElement.style.whiteSpace = "pre";
		copiedElement.style.paddingTop = innerTextAreaStyle.paddingTop;
		copiedElement.style.paddingLeft = innerTextAreaStyle.paddingLeft;
		copiedElement.style.lineHeight = innerTextAreaStyle.lineHeight;
		// Attach a scroll event listener to the original element
		innerElement.addEventListener("scroll", () => {
			// Update the scroll position of the copied element
			copiedElement.scrollTop = textArea.scrollTop;
			copiedElement.scrollLeft = textArea.scrollLeft;
		});
	}

	// Styles common to both outer and inner text areas
	copiedElement.style.overflow = "auto";
	copiedElement.style.boxSizing = "border-box";
	copiedElement.style.width = `${textArea.getBoundingClientRect().width}px`;
	copiedElement.style.height = `${textArea.getBoundingClientRect().height}px`;
	copiedElement.style.position = "absolute";
	copiedElement.style.left = `${textArea.getBoundingClientRect().left}px`;
	copiedElement.style.top = `${textArea.getBoundingClientRect().top}px`;

	document.body.appendChild(copiedElement);

	return copiedElement;
};

const getTextAreaSelection = (textArea: TextArea): CaretPosition => {
	const innerElement = textArea.shadowRoot!.querySelector("textarea");

	if (!innerElement) {
		throw new Error("Inner element not found");
	}

	const { selectionStart, selectionEnd } = innerElement;

	// Swap values if selection is from right to left
	const start = selectionStart;
	const end = selectionEnd;

	const copy = createCopy({ textArea });

	const range = document.createRange();
	range.setStart(copy.firstChild!, start);
	range.setEnd(copy.firstChild!, end);

	const selection = document.getSelection()!;
	selection.removeAllRanges();
	selection.addRange(range);

	const rect = range.getBoundingClientRect();

	document.body.removeChild(copy);

	innerElement.selectionStart = start;
	innerElement.selectionEnd = end;

	textArea.focus();
	const x = textArea.selectionDirection === SelectionDirection.Forward
		? rect.right - innerElement.scrollLeft
		: rect.left - innerElement.scrollLeft;

	return {
		x,
		y: rect.top - innerElement.scrollTop,
	};
};

export {
	SelectionDirection,
	getTextAreaSelection,
	createCopy,
};
export type { SelectionEventDetails };
