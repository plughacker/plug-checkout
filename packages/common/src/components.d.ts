/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CheckoutIconNames } from "./components/checkout-icon/checkout-icon.types";
import { CheckoutButtonType } from "./components/checkout-button/checkout-button.types";
import { CheckoutInputChangeEvent, CheckoutInputMode, CheckoutInputType, CheckoutInputValue } from "./components/checkout-input/checkout-input.types";
import { CheckoutSelectChangeEvent, CheckoutSelectOptions, CheckoutSelectValue } from "./components/checkout-select/checkout-select.types";
import { CheckoutTypographyColor, CheckoutTypographyVariation } from "./components/checkout-typography/checkout-typography.types";
export namespace Components {
    interface CheckoutButton {
        "customClass"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "icon"?: CheckoutIconNames;
        "isLoading"?: boolean;
        "label": string;
        "type"?: CheckoutButtonType;
    }
    interface CheckoutCreditCard {
        "cvv": string;
        "expiry": string;
        "focused": string;
        "issuer": string;
        "locale": { valid: string };
        "name": string;
        "number": string;
        "placeholders": { name: string };
    }
    interface CheckoutErrorMessage {
        "customClass"?: string;
        "fullWidth": boolean;
        "message": string;
    }
    interface CheckoutIcon {
        "class"?: string;
        "icon": CheckoutIconNames;
    }
    interface CheckoutInput {
        "autofocus": boolean;
        "customContainerClass"?: string;
        "customInputClass"?: string;
        "customLabelClass"?: string;
        "disabled": boolean;
        "fullWidth": boolean;
        "hasError"?: boolean;
        "hasValidation"?: boolean;
        "inputmode": CheckoutInputMode;
        "label"?: string;
        "mask"?: string;
        "max"?: string;
        "maxlength"?: number;
        "min"?: string;
        "minlength"?: number;
        "multiple"?: boolean;
        "name": string;
        "placeholder"?: string;
        "readonly": boolean;
        "required": boolean;
        "startIcon"?: CheckoutIconNames;
        "type": CheckoutInputType;
        "value"?: CheckoutInputValue;
    }
    interface CheckoutSelect {
        "autofocus": boolean;
        "customContainerClass"?: string;
        "customLabelClass"?: string;
        "customSelectClass"?: string;
        "disabled": boolean;
        "fullWidth": boolean;
        "hasError"?: boolean;
        "hasValidation": boolean;
        "label"?: string;
        "name": string;
        "options": CheckoutSelectOptions[];
        "placeholder"?: string;
        "readonly": boolean;
        "required": boolean;
        "startIcon"?: CheckoutIconNames;
        "value"?: CheckoutSelectValue;
    }
    interface CheckoutTypography {
        "color": CheckoutTypographyColor;
        "content": string;
        "tag": string;
        "variation": CheckoutTypographyVariation;
    }
}
declare global {
    interface HTMLCheckoutButtonElement extends Components.CheckoutButton, HTMLStencilElement {
    }
    var HTMLCheckoutButtonElement: {
        prototype: HTMLCheckoutButtonElement;
        new (): HTMLCheckoutButtonElement;
    };
    interface HTMLCheckoutCreditCardElement extends Components.CheckoutCreditCard, HTMLStencilElement {
    }
    var HTMLCheckoutCreditCardElement: {
        prototype: HTMLCheckoutCreditCardElement;
        new (): HTMLCheckoutCreditCardElement;
    };
    interface HTMLCheckoutErrorMessageElement extends Components.CheckoutErrorMessage, HTMLStencilElement {
    }
    var HTMLCheckoutErrorMessageElement: {
        prototype: HTMLCheckoutErrorMessageElement;
        new (): HTMLCheckoutErrorMessageElement;
    };
    interface HTMLCheckoutIconElement extends Components.CheckoutIcon, HTMLStencilElement {
    }
    var HTMLCheckoutIconElement: {
        prototype: HTMLCheckoutIconElement;
        new (): HTMLCheckoutIconElement;
    };
    interface HTMLCheckoutInputElement extends Components.CheckoutInput, HTMLStencilElement {
    }
    var HTMLCheckoutInputElement: {
        prototype: HTMLCheckoutInputElement;
        new (): HTMLCheckoutInputElement;
    };
    interface HTMLCheckoutSelectElement extends Components.CheckoutSelect, HTMLStencilElement {
    }
    var HTMLCheckoutSelectElement: {
        prototype: HTMLCheckoutSelectElement;
        new (): HTMLCheckoutSelectElement;
    };
    interface HTMLCheckoutTypographyElement extends Components.CheckoutTypography, HTMLStencilElement {
    }
    var HTMLCheckoutTypographyElement: {
        prototype: HTMLCheckoutTypographyElement;
        new (): HTMLCheckoutTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "checkout-button": HTMLCheckoutButtonElement;
        "checkout-credit-card": HTMLCheckoutCreditCardElement;
        "checkout-error-message": HTMLCheckoutErrorMessageElement;
        "checkout-icon": HTMLCheckoutIconElement;
        "checkout-input": HTMLCheckoutInputElement;
        "checkout-select": HTMLCheckoutSelectElement;
        "checkout-typography": HTMLCheckoutTypographyElement;
    }
}
declare namespace LocalJSX {
    interface CheckoutButton {
        "customClass"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "icon"?: CheckoutIconNames;
        "isLoading"?: boolean;
        "label"?: string;
        "onBlured"?: (event: CustomEvent<void>) => void;
        "onClicked"?: (event: CustomEvent<void>) => void;
        "onFocused"?: (event: CustomEvent<void>) => void;
        "type"?: CheckoutButtonType;
    }
    interface CheckoutCreditCard {
        "cvv"?: string;
        "expiry"?: string;
        "focused"?: string;
        "issuer"?: string;
        "locale"?: { valid: string };
        "name"?: string;
        "number"?: string;
        "placeholders"?: { name: string };
    }
    interface CheckoutErrorMessage {
        "customClass"?: string;
        "fullWidth"?: boolean;
        "message"?: string;
    }
    interface CheckoutIcon {
        "class"?: string;
        "icon"?: CheckoutIconNames;
    }
    interface CheckoutInput {
        "autofocus"?: boolean;
        "customContainerClass"?: string;
        "customInputClass"?: string;
        "customLabelClass"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "hasError"?: boolean;
        "hasValidation"?: boolean;
        "inputmode"?: CheckoutInputMode;
        "label"?: string;
        "mask"?: string;
        "max"?: string;
        "maxlength"?: number;
        "min"?: string;
        "minlength"?: number;
        "multiple"?: boolean;
        "name"?: string;
        "onBlurred"?: (event: CustomEvent<FocusEvent>) => void;
        "onChanged"?: (event: CustomEvent<CheckoutInputChangeEvent>) => void;
        "onFocused"?: (event: CustomEvent<FocusEvent>) => void;
        "onInputed"?: (event: CustomEvent<KeyboardEvent>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "startIcon"?: CheckoutIconNames;
        "type"?: CheckoutInputType;
        "value"?: CheckoutInputValue;
    }
    interface CheckoutSelect {
        "autofocus"?: boolean;
        "customContainerClass"?: string;
        "customLabelClass"?: string;
        "customSelectClass"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "hasError"?: boolean;
        "hasValidation"?: boolean;
        "label"?: string;
        "name"?: string;
        "onBlurred"?: (event: CustomEvent<void>) => void;
        "onChanged"?: (event: CustomEvent<CheckoutSelectChangeEvent>) => void;
        "onFocused"?: (event: CustomEvent<void>) => void;
        "onInputed"?: (event: CustomEvent<KeyboardEvent>) => void;
        "options"?: CheckoutSelectOptions[];
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "startIcon"?: CheckoutIconNames;
        "value"?: CheckoutSelectValue;
    }
    interface CheckoutTypography {
        "color"?: CheckoutTypographyColor;
        "content"?: string;
        "tag"?: string;
        "variation"?: CheckoutTypographyVariation;
    }
    interface IntrinsicElements {
        "checkout-button": CheckoutButton;
        "checkout-credit-card": CheckoutCreditCard;
        "checkout-error-message": CheckoutErrorMessage;
        "checkout-icon": CheckoutIcon;
        "checkout-input": CheckoutInput;
        "checkout-select": CheckoutSelect;
        "checkout-typography": CheckoutTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "checkout-button": LocalJSX.CheckoutButton & JSXBase.HTMLAttributes<HTMLCheckoutButtonElement>;
            "checkout-credit-card": LocalJSX.CheckoutCreditCard & JSXBase.HTMLAttributes<HTMLCheckoutCreditCardElement>;
            "checkout-error-message": LocalJSX.CheckoutErrorMessage & JSXBase.HTMLAttributes<HTMLCheckoutErrorMessageElement>;
            "checkout-icon": LocalJSX.CheckoutIcon & JSXBase.HTMLAttributes<HTMLCheckoutIconElement>;
            "checkout-input": LocalJSX.CheckoutInput & JSXBase.HTMLAttributes<HTMLCheckoutInputElement>;
            "checkout-select": LocalJSX.CheckoutSelect & JSXBase.HTMLAttributes<HTMLCheckoutSelectElement>;
            "checkout-typography": LocalJSX.CheckoutTypography & JSXBase.HTMLAttributes<HTMLCheckoutTypographyElement>;
        }
    }
}
