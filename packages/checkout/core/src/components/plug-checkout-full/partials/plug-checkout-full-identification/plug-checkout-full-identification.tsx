import {
  Component,
  Host,
  h,
  Event,
  EventEmitter,
  State,
  Prop,
} from '@stencil/core'

import { countries } from '../../../../data/countries'

import { PlugCheckoutFullIdentificationService } from './plug-checkout-full-identification.service'
import {
  PlugCheckoutFullIdentificationFormValues,
  PlugCheckoutFullIdentificationFormValidFields,
} from './plug-checkout-full-identification.types'
import { validateCustomer } from './plug-checkout-full-identification.schema'
import { getIdentificationMask } from './plug-checkout-full-identification.utils'
import { cleanTextOnlyNumbers } from '../../../../utils'

@Component({
  tag: 'plug-checkout-full-identification',
  styleUrl: 'plug-checkout-full-identification.scss',
})
export class PlugCheckoutFullIdentification {
  identificationService = new PlugCheckoutFullIdentificationService()

  @Prop() formValues: PlugCheckoutFullIdentificationFormValues

  @Event() submitForm: EventEmitter<void>
  @Event() fieldChange: EventEmitter<{ field: string; value: string }>
  @Event() manyFieldsChange: EventEmitter<{
    customerFormValues: PlugCheckoutFullIdentificationFormValues
  }>

  @State() allFieldIsBlank = false
  @State() validFields: PlugCheckoutFullIdentificationFormValidFields = {
    name: null,
    email: null,
    identification: null,
    zipCode: null,
    street: null,
    number: null,
    complement: null,
    neighborhood: null,
    city: null,
    state: null,
    country: null,
  }

  private handleFieldFocused = (field: string) => () => {
    if (this.allFieldIsBlank) {
      this.allFieldIsBlank = false
    }

    this.validFields = { ...this.validFields, [field]: null }
  }

  private handleFieldBlurred = (field: string) => async (event) => {
    const isMaskedField = ['identification', 'zipCode'].includes(field)
    const normalizedValue = cleanTextOnlyNumbers(event.target.value)

    const validation = await validateCustomer({
      ...this.formValues,
      [field]: isMaskedField ? normalizedValue : event.target.value,
    })

    this.validFields = {
      ...this.validFields,
      [field]: validation.errors ? validation.errors[field] : '',
    }
  }

  private handleFieldChange = (field: string) => (event) => {
    this.fieldChange.emit({ field, value: event.target.value })
  }

  private handleZipCodeFieldChange = async (event) => {
    if (event.target.value.length === 8) {
      const address =
        await this.identificationService.getInformationsAboutZipCode(
          event.target.value,
        )

      this.manyFieldsChange.emit({
        customerFormValues: { ...this.formValues, ...address },
      })

      return
    }

    this.fieldChange.emit({ field: 'zipCode', value: event.target.value })
  }

  private handleSubmitForm = () => {
    this.submitForm.emit()
  }

  render() {
    return (
      <Host class={{ 'plug-checkout-full-identification__container': true }}>
        <checkout-typography
          tag="h4"
          variation="subtitle1"
          content="Dados pessoais"
        />
        <checkout-text-field
          value={this.formValues.name}
          onChanged={this.handleFieldChange('name')}
          onBlurred={this.handleFieldBlurred('name')}
          onFocused={this.handleFieldFocused('name')}
          hasValidation={this.validFields.name !== null}
          hasError={!!this.validFields.name}
          fullWidth
          inputmode="text"
          name="name"
          label="Nome completo *"
        />
        {!!this.validFields.name && (
          <checkout-error-message message={this.validFields.name} />
        )}

        <checkout-text-field
          value={this.formValues.email}
          onChanged={this.handleFieldChange('email')}
          onBlurred={this.handleFieldBlurred('email')}
          onFocused={this.handleFieldFocused('email')}
          hasValidation={this.validFields.email !== null}
          hasError={!!this.validFields.email}
          fullWidth
          inputmode="email"
          name="email"
          label="E-mail *"
        />
        {!!this.validFields.email && (
          <checkout-error-message message={this.validFields.email} />
        )}

        <checkout-typography
          tag="h4"
          variation="subtitle1"
          content="Documento"
        />
        <checkout-text-field
          value={this.formValues.identification}
          onChanged={this.handleFieldChange('identification')}
          onBlurred={this.handleFieldBlurred('identification')}
          onFocused={this.handleFieldFocused('identification')}
          hasValidation={this.validFields.identification !== null}
          hasError={!!this.validFields.identification}
          fullWidth
          inputmode="numeric"
          name="identification"
          label="CPF/CNPJ *"
          mask={getIdentificationMask(this.formValues.identification)}
        />
        {!!this.validFields.identification && (
          <checkout-error-message message={this.validFields.identification} />
        )}

        <checkout-typography
          tag="h4"
          variation="subtitle1"
          content="Endereço"
        />
        <fieldset
          class={{ 'plug-checkout-full-identification__row-fields': true }}
        >
          <div
            class={{ 'plug-checkout-full-identification__error-message': true }}
          >
            <checkout-text-field
              value={this.formValues.zipCode}
              onChanged={this.handleZipCodeFieldChange}
              onBlurred={this.handleFieldBlurred('zipCode')}
              onFocused={this.handleFieldFocused('zipCode')}
              hasValidation={this.validFields.zipCode !== null}
              hasError={!!this.validFields.zipCode}
              fullWidth
              inputmode="numeric"
              name="zipCode"
              label="CEP *"
              mask="99999-999"
            />
            {!!this.validFields.zipCode && (
              <checkout-error-message message={this.validFields.zipCode} />
            )}
          </div>

          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
          >
            Não sei meu CEP
          </a>
        </fieldset>

        <checkout-text-field
          value={this.formValues.street}
          onChanged={this.handleFieldChange('street')}
          onBlurred={this.handleFieldBlurred('street')}
          onFocused={this.handleFieldFocused('street')}
          hasValidation={this.validFields.street !== null}
          hasError={!!this.validFields.street}
          fullWidth
          inputmode="text"
          name="street"
          label="Endereço *"
        />
        {!!this.validFields.street && (
          <checkout-error-message message={this.validFields.street} />
        )}

        <fieldset
          class={{ 'plug-checkout-full-identification__row-fields': true }}
        >
          <div
            class={{ 'plug-checkout-full-identification__error-message': true }}
          >
            <checkout-text-field
              value={this.formValues.number}
              onChanged={this.handleFieldChange('number')}
              onBlurred={this.handleFieldBlurred('number')}
              onFocused={this.handleFieldFocused('number')}
              hasValidation={this.validFields.number !== null}
              hasError={!!this.validFields.number}
              fullWidth
              inputmode="text"
              name="number"
              label="Número *"
            />
            {!!this.validFields.number && (
              <checkout-error-message message={this.validFields.number} />
            )}
          </div>

          <checkout-text-field
            value={this.formValues.complement}
            onChanged={this.handleFieldChange('complement')}
            onBlurred={this.handleFieldBlurred('complement')}
            onFocused={this.handleFieldFocused('complement')}
            hasValidation={this.validFields.complement !== null}
            hasError={!!this.validFields.complement}
            fullWidth
            inputmode="text"
            name="complement"
            label="Complemento"
          />
          {!!this.validFields.complement && (
            <checkout-error-message message={this.validFields.complement} />
          )}
        </fieldset>

        <checkout-text-field
          value={this.formValues.neighborhood}
          onChanged={this.handleFieldChange('neighborhood')}
          onBlurred={this.handleFieldBlurred('neighborhood')}
          onFocused={this.handleFieldFocused('neighborhood')}
          hasValidation={this.validFields.neighborhood !== null}
          hasError={!!this.validFields.neighborhood}
          fullWidth
          inputmode="text"
          name="neighborhood"
          label="Bairro"
        />
        {!!this.validFields.neighborhood && (
          <checkout-error-message message={this.validFields.neighborhood} />
        )}

        <fieldset
          class={{ 'plug-checkout-full-identification__row-fields': true }}
        >
          <div
            class={{ 'plug-checkout-full-identification__error-message': true }}
          >
            <checkout-text-field
              value={this.formValues.city}
              onChanged={this.handleFieldChange('city')}
              onBlurred={this.handleFieldBlurred('city')}
              onFocused={this.handleFieldFocused('city')}
              hasValidation={this.validFields.city !== null}
              hasError={!!this.validFields.city}
              fullWidth
              inputmode="text"
              name="city"
              label="Cidade *"
            />
            {!!this.validFields.city && (
              <checkout-error-message message={this.validFields.city} />
            )}
          </div>

          <div
            class={{ 'plug-checkout-full-identification__error-message': true }}
          >
            <checkout-text-field
              value={this.formValues.state}
              onChanged={this.handleFieldChange('state')}
              onBlurred={this.handleFieldBlurred('state')}
              onFocused={this.handleFieldFocused('state')}
              hasValidation={this.validFields.state !== null}
              hasError={!!this.validFields.state}
              fullWidth
              inputmode="text"
              name="state"
              label="Estado *"
            />
            {!!this.validFields.state && (
              <checkout-error-message message={this.validFields.state} />
            )}
          </div>
        </fieldset>

        <checkout-select-field
          value={this.formValues.country}
          onChanged={this.handleFieldChange('country')}
          onBlurred={this.handleFieldBlurred('country')}
          onFocused={this.handleFieldFocused('country')}
          hasError={!!this.validFields.country}
          options={countries}
          fullWidth
          name="country"
          label="País *"
        />
        {!!this.validFields.country && (
          <checkout-error-message message={this.validFields.country} />
        )}

        <checkout-button
          type="submit"
          label="Próximo"
          onClick={this.handleSubmitForm}
        />
      </Host>
    )
  }
}
