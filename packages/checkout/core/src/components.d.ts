/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PaymentMethods, PlugPaymentsChargeError, PlugPaymentsChargeSuccess } from "./components/plug-payments/plug-payments.types";
import { IPix } from "./providers/Pix";
import { IBoleto } from "./providers/Boleto";
import { PlugPaymentsCreditChargeError, PlugPaymentsCreditChargeSuccess, PlugPaymentsCreditFormCustomStyleFormClasses, PlugPaymentsCreditFormValues, PlugPaymentsCreditInstallmentsConfig } from "./components/plug-payments-credit/plug-payments-credit.types";
import { ICustomer } from "./providers/BaseProvider";
import { PlugCheckoutFullIdentificationFormValues } from "./components/plug-checkout-full/partials/plug-checkout-full-identification/plug-checkout-full-identification.types";
import { PlugPaymentsBoletoChargeError, PlugPaymentsBoletoChargeSuccess } from "./components/plug-payments-boleto/plug-payments-boleto.types";
import { PlugPaymentsPixChargeError, PlugPaymentsPixChargeSuccess } from "./components/plug-payments-pix/plug-payments-pix.types";
export namespace Components {
    interface PlugCheckoutFull {
        "amount": number;
        "boleto"?: IBoleto;
        "brandUrl": string;
        "capture": boolean;
        "clientId": string;
        "currency": string;
        "customer"?: ICustomer;
        "customerId"?: string;
        "delivery"?: number;
        "description"?: string;
        "footerDescription"?: string;
        "hasIdentificationSection": boolean;
        "installments"?: PlugPaymentsCreditInstallmentsConfig;
        "merchantId": string;
        "orderId"?: string;
        "paymentMethods": PaymentMethods;
        "pix"?: IPix;
        "products"?: {
    name: string
    amount: number
    quantity: number
    description: string
  }[];
        "publicKey": string;
        "sandbox": boolean;
        "showCreditCard": boolean;
        "statementDescriptor": string;
    }
    interface PlugCheckoutFullContent {
    }
    interface PlugCheckoutFullFooter {
        "description": string;
    }
    interface PlugCheckoutFullHeader {
        "brand": string;
    }
    interface PlugCheckoutFullIdentification {
        "formValues": PlugCheckoutFullIdentificationFormValues;
    }
    interface PlugPayments {
        "amount": number;
        "boleto"?: IBoleto;
        "capture": boolean;
        "clientId": string;
        "currency": string;
        "customer"?: ICustomer;
        "customerId"?: string;
        "description"?: string;
        "installments"?: PlugPaymentsCreditInstallmentsConfig;
        "merchantId": string;
        "orderId"?: string;
        "paymentMethods": PaymentMethods;
        "pix"?: IPix;
        "publicKey": string;
        "sandbox": boolean;
        "showCreditCard": boolean;
        "showDialog": boolean;
        "statementDescriptor": string;
    }
    interface PlugPaymentsBoleto {
        "amount": number;
        "boleto": IBoleto;
        "capture": boolean;
        "clientId": string;
        "currency": string;
        "customer"?: ICustomer;
        "customerId"?: string;
        "description"?: string;
        "merchantId": string;
        "orderId"?: string;
        "publicKey": string;
        "sandbox": boolean;
        "showDialog": boolean;
        "statementDescriptor": string;
    }
    interface PlugPaymentsCredit {
        "amount": number;
        "capture": boolean;
        "clientId": string;
        "currency": string;
        "customFormStyleClasses"?: PlugPaymentsCreditFormCustomStyleFormClasses;
        "customer"?: ICustomer;
        "customerId"?: string;
        "description"?: string;
        "installmentsConfig": PlugPaymentsCreditInstallmentsConfig;
        "merchantId": string;
        "orderId"?: string;
        "publicKey": string;
        "sandbox": boolean;
        "showCreditCard": boolean;
        "showDialog": boolean;
        "statementDescriptor": string;
    }
    interface PlugPaymentsCreditForm {
        "amount": number;
        "customFormStyleClasses": PlugPaymentsCreditFormCustomStyleFormClasses;
        "formValues": PlugPaymentsCreditFormValues;
        "installmentsConfig": PlugPaymentsCreditInstallmentsConfig;
        "isLoading": boolean;
    }
    interface PlugPaymentsPix {
        "amount": number;
        "capture": boolean;
        "clientId": string;
        "currency": string;
        "customer"?: ICustomer;
        "customerId"?: string;
        "description"?: string;
        "merchantId": string;
        "orderId"?: string;
        "pix": IPix;
        "publicKey": string;
        "sandbox": boolean;
        "showDialog": boolean;
        "statementDescriptor": string;
    }
}
declare global {
    interface HTMLPlugCheckoutFullElement extends Components.PlugCheckoutFull, HTMLStencilElement {
    }
    var HTMLPlugCheckoutFullElement: {
        prototype: HTMLPlugCheckoutFullElement;
        new (): HTMLPlugCheckoutFullElement;
    };
    interface HTMLPlugCheckoutFullContentElement extends Components.PlugCheckoutFullContent, HTMLStencilElement {
    }
    var HTMLPlugCheckoutFullContentElement: {
        prototype: HTMLPlugCheckoutFullContentElement;
        new (): HTMLPlugCheckoutFullContentElement;
    };
    interface HTMLPlugCheckoutFullFooterElement extends Components.PlugCheckoutFullFooter, HTMLStencilElement {
    }
    var HTMLPlugCheckoutFullFooterElement: {
        prototype: HTMLPlugCheckoutFullFooterElement;
        new (): HTMLPlugCheckoutFullFooterElement;
    };
    interface HTMLPlugCheckoutFullHeaderElement extends Components.PlugCheckoutFullHeader, HTMLStencilElement {
    }
    var HTMLPlugCheckoutFullHeaderElement: {
        prototype: HTMLPlugCheckoutFullHeaderElement;
        new (): HTMLPlugCheckoutFullHeaderElement;
    };
    interface HTMLPlugCheckoutFullIdentificationElement extends Components.PlugCheckoutFullIdentification, HTMLStencilElement {
    }
    var HTMLPlugCheckoutFullIdentificationElement: {
        prototype: HTMLPlugCheckoutFullIdentificationElement;
        new (): HTMLPlugCheckoutFullIdentificationElement;
    };
    interface HTMLPlugPaymentsElement extends Components.PlugPayments, HTMLStencilElement {
    }
    var HTMLPlugPaymentsElement: {
        prototype: HTMLPlugPaymentsElement;
        new (): HTMLPlugPaymentsElement;
    };
    interface HTMLPlugPaymentsBoletoElement extends Components.PlugPaymentsBoleto, HTMLStencilElement {
    }
    var HTMLPlugPaymentsBoletoElement: {
        prototype: HTMLPlugPaymentsBoletoElement;
        new (): HTMLPlugPaymentsBoletoElement;
    };
    interface HTMLPlugPaymentsCreditElement extends Components.PlugPaymentsCredit, HTMLStencilElement {
    }
    var HTMLPlugPaymentsCreditElement: {
        prototype: HTMLPlugPaymentsCreditElement;
        new (): HTMLPlugPaymentsCreditElement;
    };
    interface HTMLPlugPaymentsCreditFormElement extends Components.PlugPaymentsCreditForm, HTMLStencilElement {
    }
    var HTMLPlugPaymentsCreditFormElement: {
        prototype: HTMLPlugPaymentsCreditFormElement;
        new (): HTMLPlugPaymentsCreditFormElement;
    };
    interface HTMLPlugPaymentsPixElement extends Components.PlugPaymentsPix, HTMLStencilElement {
    }
    var HTMLPlugPaymentsPixElement: {
        prototype: HTMLPlugPaymentsPixElement;
        new (): HTMLPlugPaymentsPixElement;
    };
    interface HTMLElementTagNameMap {
        "plug-checkout-full": HTMLPlugCheckoutFullElement;
        "plug-checkout-full-content": HTMLPlugCheckoutFullContentElement;
        "plug-checkout-full-footer": HTMLPlugCheckoutFullFooterElement;
        "plug-checkout-full-header": HTMLPlugCheckoutFullHeaderElement;
        "plug-checkout-full-identification": HTMLPlugCheckoutFullIdentificationElement;
        "plug-payments": HTMLPlugPaymentsElement;
        "plug-payments-boleto": HTMLPlugPaymentsBoletoElement;
        "plug-payments-credit": HTMLPlugPaymentsCreditElement;
        "plug-payments-credit-form": HTMLPlugPaymentsCreditFormElement;
        "plug-payments-pix": HTMLPlugPaymentsPixElement;
    }
}
declare namespace LocalJSX {
    interface PlugCheckoutFull {
        "amount"?: number;
        "boleto"?: IBoleto;
        "brandUrl"?: string;
        "capture"?: boolean;
        "clientId"?: string;
        "currency"?: string;
        "customer"?: ICustomer;
        "customerId"?: string;
        "delivery"?: number;
        "description"?: string;
        "footerDescription"?: string;
        "hasIdentificationSection"?: boolean;
        "installments"?: PlugPaymentsCreditInstallmentsConfig;
        "merchantId"?: string;
        "onPaymentFailed"?: (event: CustomEvent<{
    error: PlugPaymentsChargeError
  }>) => void;
        "onPaymentSuccess"?: (event: CustomEvent<{
    data: PlugPaymentsChargeSuccess
  }>) => void;
        "orderId"?: string;
        "paymentMethods"?: PaymentMethods;
        "pix"?: IPix;
        "products"?: {
    name: string
    amount: number
    quantity: number
    description: string
  }[];
        "publicKey"?: string;
        "sandbox"?: boolean;
        "showCreditCard"?: boolean;
        "statementDescriptor"?: string;
    }
    interface PlugCheckoutFullContent {
    }
    interface PlugCheckoutFullFooter {
        "description"?: string;
    }
    interface PlugCheckoutFullHeader {
        "brand"?: string;
    }
    interface PlugCheckoutFullIdentification {
        "formValues"?: PlugCheckoutFullIdentificationFormValues;
        "onFieldChange"?: (event: CustomEvent<{ field: string; value: string }>) => void;
        "onManyFieldsChange"?: (event: CustomEvent<{
    customerFormValues: PlugCheckoutFullIdentificationFormValues
  }>) => void;
        "onSubmitForm"?: (event: CustomEvent<void>) => void;
    }
    interface PlugPayments {
        "amount"?: number;
        "boleto"?: IBoleto;
        "capture"?: boolean;
        "clientId"?: string;
        "currency"?: string;
        "customer"?: ICustomer;
        "customerId"?: string;
        "description"?: string;
        "installments"?: PlugPaymentsCreditInstallmentsConfig;
        "merchantId"?: string;
        "onPaymentFailed"?: (event: CustomEvent<{
    error: PlugPaymentsChargeError
  }>) => void;
        "onPaymentSuccess"?: (event: CustomEvent<{
    data: PlugPaymentsChargeSuccess
  }>) => void;
        "orderId"?: string;
        "paymentMethods"?: PaymentMethods;
        "pix"?: IPix;
        "publicKey"?: string;
        "sandbox"?: boolean;
        "showCreditCard"?: boolean;
        "showDialog"?: boolean;
        "statementDescriptor"?: string;
    }
    interface PlugPaymentsBoleto {
        "amount"?: number;
        "boleto"?: IBoleto;
        "capture"?: boolean;
        "clientId"?: string;
        "currency"?: string;
        "customer"?: ICustomer;
        "customerId"?: string;
        "description"?: string;
        "merchantId"?: string;
        "onPaymentFailed"?: (event: CustomEvent<{
    error: PlugPaymentsBoletoChargeError
  }>) => void;
        "onPaymentSuccess"?: (event: CustomEvent<{
    data: PlugPaymentsBoletoChargeSuccess
  }>) => void;
        "orderId"?: string;
        "publicKey"?: string;
        "sandbox"?: boolean;
        "showDialog"?: boolean;
        "statementDescriptor"?: string;
    }
    interface PlugPaymentsCredit {
        "amount"?: number;
        "capture"?: boolean;
        "clientId"?: string;
        "currency"?: string;
        "customFormStyleClasses"?: PlugPaymentsCreditFormCustomStyleFormClasses;
        "customer"?: ICustomer;
        "customerId"?: string;
        "description"?: string;
        "installmentsConfig"?: PlugPaymentsCreditInstallmentsConfig;
        "merchantId"?: string;
        "onPaymentFailed"?: (event: CustomEvent<{
    error: PlugPaymentsCreditChargeError
  }>) => void;
        "onPaymentSuccess"?: (event: CustomEvent<{
    data: PlugPaymentsCreditChargeSuccess
  }>) => void;
        "orderId"?: string;
        "publicKey"?: string;
        "sandbox"?: boolean;
        "showCreditCard"?: boolean;
        "showDialog"?: boolean;
        "statementDescriptor"?: string;
    }
    interface PlugPaymentsCreditForm {
        "amount"?: number;
        "customFormStyleClasses"?: PlugPaymentsCreditFormCustomStyleFormClasses;
        "formValues"?: PlugPaymentsCreditFormValues;
        "installmentsConfig"?: PlugPaymentsCreditInstallmentsConfig;
        "isLoading"?: boolean;
        "onFieldChange"?: (event: CustomEvent<{ field: string; value: string }>) => void;
        "onFormSubmit"?: (event: CustomEvent<void>) => void;
    }
    interface PlugPaymentsPix {
        "amount"?: number;
        "capture"?: boolean;
        "clientId"?: string;
        "currency"?: string;
        "customer"?: ICustomer;
        "customerId"?: string;
        "description"?: string;
        "merchantId"?: string;
        "onPaymentFailed"?: (event: CustomEvent<{
    error: PlugPaymentsPixChargeError
  }>) => void;
        "onPaymentSuccess"?: (event: CustomEvent<{
    data: PlugPaymentsPixChargeSuccess
  }>) => void;
        "orderId"?: string;
        "pix"?: IPix;
        "publicKey"?: string;
        "sandbox"?: boolean;
        "showDialog"?: boolean;
        "statementDescriptor"?: string;
    }
    interface IntrinsicElements {
        "plug-checkout-full": PlugCheckoutFull;
        "plug-checkout-full-content": PlugCheckoutFullContent;
        "plug-checkout-full-footer": PlugCheckoutFullFooter;
        "plug-checkout-full-header": PlugCheckoutFullHeader;
        "plug-checkout-full-identification": PlugCheckoutFullIdentification;
        "plug-payments": PlugPayments;
        "plug-payments-boleto": PlugPaymentsBoleto;
        "plug-payments-credit": PlugPaymentsCredit;
        "plug-payments-credit-form": PlugPaymentsCreditForm;
        "plug-payments-pix": PlugPaymentsPix;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "plug-checkout-full": LocalJSX.PlugCheckoutFull & JSXBase.HTMLAttributes<HTMLPlugCheckoutFullElement>;
            "plug-checkout-full-content": LocalJSX.PlugCheckoutFullContent & JSXBase.HTMLAttributes<HTMLPlugCheckoutFullContentElement>;
            "plug-checkout-full-footer": LocalJSX.PlugCheckoutFullFooter & JSXBase.HTMLAttributes<HTMLPlugCheckoutFullFooterElement>;
            "plug-checkout-full-header": LocalJSX.PlugCheckoutFullHeader & JSXBase.HTMLAttributes<HTMLPlugCheckoutFullHeaderElement>;
            "plug-checkout-full-identification": LocalJSX.PlugCheckoutFullIdentification & JSXBase.HTMLAttributes<HTMLPlugCheckoutFullIdentificationElement>;
            "plug-payments": LocalJSX.PlugPayments & JSXBase.HTMLAttributes<HTMLPlugPaymentsElement>;
            "plug-payments-boleto": LocalJSX.PlugPaymentsBoleto & JSXBase.HTMLAttributes<HTMLPlugPaymentsBoletoElement>;
            "plug-payments-credit": LocalJSX.PlugPaymentsCredit & JSXBase.HTMLAttributes<HTMLPlugPaymentsCreditElement>;
            "plug-payments-credit-form": LocalJSX.PlugPaymentsCreditForm & JSXBase.HTMLAttributes<HTMLPlugPaymentsCreditFormElement>;
            "plug-payments-pix": LocalJSX.PlugPaymentsPix & JSXBase.HTMLAttributes<HTMLPlugPaymentsPixElement>;
        }
    }
}
