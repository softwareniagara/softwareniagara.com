import { createElement } from 'react'

import makeStyledButton from './Button.css'

export default ({ children, className, component, pill, primary, ...rest }) => {
  const BaseComponent = makeStyledButton(component || 'a') 
  const props = {
    ...rest,
    className: `
      ${className || ''} 
      ${primary ? 'is-primary' : 'is-secondary'}
      ${pill ? 'is-pill' : ''}
    `,
  }

  return createElement(BaseComponent, props, children)
}
