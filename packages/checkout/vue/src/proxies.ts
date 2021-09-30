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


export const CheckoutInput = /*@__PURE__*/ defineContainer<JSX.CheckoutInput>('checkout-input', undefined, [
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


export const CheckoutManualPayment = /*@__PURE__*/ defineContainer<JSX.CheckoutManualPayment>('checkout-manual-payment', undefined, [
  'fullWidth',
  'paymentMethod',
  'paymentClick'
]);


export const CheckoutOrderSummary = /*@__PURE__*/ defineContainer<JSX.CheckoutOrderSummary>('checkout-order-summary', undefined, [
  'label',
  'fullWidth',
  'amount',
  'products'
]);


export const CheckoutRadioField = /*@__PURE__*/ defineContainer<JSX.CheckoutRadioField>('checkout-radio-field', undefined, [
  'customContainerClass',
  'customLabelClass',
  'customInputClass',
  'fullWidth',
  'isChecked',
  'label',
  'value',
  'inputed',
  'clicked',
  'changed'
]);


export const CheckoutSelect = /*@__PURE__*/ defineContainer<JSX.CheckoutSelect>('checkout-select', undefined, [
  'customContainerClass',
  'customLabelClass',
  'customSelectClass',
  'startIcon',
  'hasError',
  'placeholder',
  'label',
  'name',
  'options',
  'hasValidation',
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
  'content'
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
  'paymentSuccess',
  'paymentFailed'
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
  'paymentSuccess',
  'paymentFailed'
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
  'currency',
  'sandbox',
  'capture',
  'showCreditCard',
  'installmentsConfig',
  'customFormStyleClasses',
  'paymentSuccess',
  'paymentFailed'
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
  'paymentSuccess',
  'paymentFailed'
]);
