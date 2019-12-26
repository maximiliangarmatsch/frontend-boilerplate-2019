import React from 'react'
import { shallow } from 'enzyme'
import App from '../app'
import { appConfig } from '../app.config'

// eslint-disable-next-line no-undef
describe('<App />', () => {
  // eslint-disable-next-line no-undef
  test('renders', () => {
    const app = shallow(<App />)
    // eslint-disable-next-line no-undef
    expect(app.find('Route').length).toEqual(appConfig.routes.list.length)
  })
})
