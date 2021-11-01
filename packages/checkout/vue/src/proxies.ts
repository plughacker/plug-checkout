/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@plug-checkout/core';




export const CheckoutAccordion = /*@__PURE__*/ defineContainer<JSX.CheckoutAccordion>('checkout-accordion', undefined, [
  'opened',
  'label',
  'isEditable',
  'fullWidth',
  'expandClick'
]);


export const CheckoutButton = /*@__PURE__*/ defineContainer<JSX.CheckoutButton>('checkout-button', undefined, [
  'customClass',
  'icon',
  'label',
  'fullWidth',
  'disabled',
  'type',
  'isLoading',
  'clicked',
  'focused',
  'blured'
]);


export const CheckoutClipboardButton = /*@__PURE__*/ defineContainer<JSX.CheckoutClipboardButton>('checkout-clipboard-button', undefined, [
  'label',
  'clipboardContent'
]);


export const CheckoutCountdown = /*@__PURE__*/ defineContainer<JSX.CheckoutCountdown>('checkout-countdown', undefined, [
  'expirationTime',
  'filledProgressBarColor',
  'emptyProgressBarColor',
  'countdownFinished'
]);


export const CheckoutCreditCard = /*@__PURE__*/ defineContainer<JSX.CheckoutCreditCard>('checkout-credit-card', undefined, [
  'cvv',
  'expiry',
  'focused',
  'issuer',
  'name',
  'number',
  'locale',
  'placeholders'
]);


export const CheckoutErrorMessage = /*@__PURE__*/ defineContainer<JSX.CheckoutErrorMessage>('checkout-error-message', undefined, [
  'message',
  'customClass',
  'fullWidth'
]);


export const CheckoutIcon = /*@__PURE__*/ defineContainer<JSX.CheckoutIcon>('checkout-icon', undefined, [
  'icon',
  'class'
]);


export const CheckoutManualPayment = /*@__PURE__*/ defineContainer<JSX.CheckoutManualPayment>('checkout-manual-payment', undefined, [
  'fullWidth',
  'paymentMethod',
  'isLoading',
  'paymentClick'
]);


export const CheckoutModal = /*@__PURE__*/ defineContainer<JSX.CheckoutModal>('checkout-modal', undefined, [
  'open',
  'mode',
  'errorTitle',
  'errorDescription',
  'paymentCode',
  'paymentImageUrl',
  'amount',
  'expirationDate',
  'expirationTime',
  'boletoActionButtonLabel',
  'pixActionButtonLabel',
  'successActionButtonLabel',
  'errorActionButtonLabel',
  'successDescription',
  'successButtonClicked',
  'errorButtonClicked',
  'pixCountdownIsFinished'
]);


export const CheckoutModalBoleto = /*@__PURE__*/ defineContainer<JSX.CheckoutModalBoleto>('checkout-modal-boleto', undefined, [
  'boletoCode',
  'boletoImageUrl',
  'amount',
  'expirationDate',
  'actionButtonLabel',
  'boletoActionButtonIsClicked'
]);


export const CheckoutModalError = /*@__PURE__*/ defineContainer<JSX.CheckoutModalError>('checkout-modal-error', undefined, [
  'errorTitle',
  'errorDescription',
  'errorActionButtonLabel',
  'errorActionButtonClicked'
]);


export const CheckoutModalPix = /*@__PURE__*/ defineContainer<JSX.CheckoutModalPix>('checkout-modal-pix', undefined, [
  'qrCodeIdentificator',
  'qrCodeImageUrl',
  'amount',
  'expirationDate',
  'expirationTime',
  'actionButtonLabel',
  'countdownIsFinished',
  'pixActionButtonIsClicked'
]);


export const CheckoutModalSuccess = /*@__PURE__*/ defineContainer<JSX.CheckoutModalSuccess>('checkout-modal-success', undefined, [
  'successDescription',
  'successActionButtonLabel',
  'successActionButtonClicked'
]);


export const CheckoutOrderSummary = /*@__PURE__*/ defineContainer<JSX.CheckoutOrderSummary>('checkout-order-summary', undefined, [
  'label',
  'fullWidth',
  'amount',
  'delivery',
  'products'
]);


export const CheckoutRadioField = /*@__PURE__*/ defineContainer<JSX.CheckoutRadioField>('checkout-radio-field', undefined, [
  'customContainerClass',
  'customLabelClass',
  'customInputClass',
  'endIcon',
  'fullWidth',
  'isChecked',
  'label',
  'value',
  'inputed',
  'clicked',
  'changed'
]);


export const CheckoutSelectField = /*@__PURE__*/ defineContainer<JSX.CheckoutSelectField>('checkout-select-field', undefined, [
  'customContainerClass',
  'customLabelClass',
  'customSelectClass',
  'hasError',
  'placeholder',
  'label',
  'noneOptionLabel',
  'name',
  'options',
  'fullWidth',
  'readonly',
  'required',
  'autofocus',
  'disabled',
  'value',
  'inputed',
  'changed',
  'blurred',
  'focused'
]);


export const CheckoutTextField = /*@__PURE__*/ defineContainer<JSX.CheckoutTextField>('checkout-text-field', undefined, [
  'customContainerClass',
  'customLabelClass',
  'customInputClass',
  'mask',
  'startIcon',
  'hasValidation',
  'hasError',
  'max',
  'maxlength',
  'min',
  'minlength',
  'multiple',
  'placeholder',
  'label',
  'name',
  'fullWidth',
  'readonly',
  'required',
  'autofocus',
  'disabled',
  'inputmode',
  'type',
  'value',
  'inputed',
  'changed',
  'blurred',
  'focused'
]);


export const CheckoutTypography = /*@__PURE__*/ defineContainer<JSX.CheckoutTypography>('checkout-typography', undefined, [
  'tag',
  'variation',
  'color',
  'content',
  'styles'
]);


export const PlugCheckout = /*@__PURE__*/ defineContainer<JSX.PlugCheckout>('plug-checkout', undefined, [
  'paymentMethods',
  'showCreditCard',
  'clientId',
  'publicKey',
  'merchantId',
  'statementDescriptor',
  'amount',
  'pix',
  'boleto',
  'installments',
  'customer',
  'description',
  'orderId',
  'customerId',
  'currency',
  'sandbox',
  'capture',
  'showDialog',
  'paymentSuccess',
  'paymentFailed'
]);


export const PlugPayments = /*@__PURE__*/ defineContainer<JSX.PlugPayments>('plug-payments', undefined, [
  'paymentMethods',
  'showCreditCard',
  'clientId',
  'publicKey',
  'merchantId',
  'statementDescriptor',
  'amount',
  'pix',
  'boleto',
  'installments',
  'customer',
  'description',
  'orderId',
  'customerId',
  'currency',
  'sandbox',
  'capture',
  'showDialog',
  'checkoutPaymentSuccess',
  'checkoutPaymentFailed'
]);


export const PlugPaymentsBoleto = /*@__PURE__*/ defineContainer<JSX.PlugPaymentsBoleto>('plug-payments-boleto', undefined, [
  'clientId',
  'publicKey',
  'merchantId',
  'statementDescriptor',
  'amount',
  'boleto',
  'customer',
  'description',
  'orderId',
  'customerId',
  'currency',
  'sandbox',
  'capture',
  'showDialog',
  'boletoPaymentSuccess',
  'boletoPaymentFailed'
]);


export const PlugPaymentsCredit = /*@__PURE__*/ defineContainer<JSX.PlugPaymentsCredit>('plug-payments-credit', undefined, [
  'clientId',
  'publicKey',
  'merchantId',
  'statementDescriptor',
  'amount',
  'description',
  'orderId',
  'customerId',
  'customer',
  'currency',
  'sandbox',
  'capture',
  'showCreditCard',
  'showDialog',
  'installmentsConfig',
  'customFormStyleClasses',
  'creditPaymentSuccess',
  'creditPaymentFailed'
]);


export const PlugPaymentsCreditForm = /*@__PURE__*/ defineContainer<JSX.PlugPaymentsCreditForm>('plug-payments-credit-form', undefined, [
  'formValues',
  'amount',
  'installmentsConfig',
  'customFormStyleClasses',
  'isLoading',
  'formSubmit',
  'fieldChange'
]);


export const PlugPaymentsPix = /*@__PURE__*/ defineContainer<JSX.PlugPaymentsPix>('plug-payments-pix', undefined, [
  'clientId',
  'publicKey',
  'merchantId',
  'statementDescriptor',
  'amount',
  'pix',
  'customer',
  'description',
  'orderId',
  'customerId',
  'currency',
  'sandbox',
  'capture',
  'showDialog',
  'pixPaymentSuccess',
  'pixPaymentFailed'
]);

