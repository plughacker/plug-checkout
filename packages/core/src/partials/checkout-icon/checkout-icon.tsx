import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core'

import { CheckoutIconNames, CheckoutIconsObject } from './checkout-icon.types'

import ArrowDownIcon from '../../assets/icons/arrow-down.svg'
import CalendarIcon from '../../assets/icons/calendar.svg'
import CheckIcon from '../../assets/icons/check.svg'
import CreditCardIcon from '../../assets/icons/credit-card.svg'
import CvvIcon from '../../assets/icons/cvv.svg'
import DollarIcon from '../../assets/icons/dollar.svg'
import LockIcon from '../../assets/icons/lock.svg'
import SpinnerIcon from '../../assets/icons/spinner.svg'
import UserIcon from '../../assets/icons/user.svg'
import WarningIcon from '../../assets/icons/warning.svg'

@Component({ tag: 'checkout-icon' })
export class CheckoutIcon implements ComponentInterface {
  @Prop() icon: CheckoutIconNames
  @Prop() class?: string

  private renderCurrentIcon = (): string => {
    const icons: CheckoutIconsObject = {
      arrowDown: ArrowDownIcon,
      calendar: CalendarIcon,
      check: CheckIcon,
      creditCard: CreditCardIcon,
      cvv: CvvIcon,
      dollar: DollarIcon,
      lock: LockIcon,
      spinner: SpinnerIcon,
      user: UserIcon,
      warning: WarningIcon,
    }

    return icons[this.icon]
  }

  render() {
    return (
      <Host class={{ [this.class]: !!this.class }}>
        <i innerHTML={this.renderCurrentIcon()} />
      </Host>
    )
  }
}