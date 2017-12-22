import expect from "expect"
import PropTypes from 'prop-types'
import { createMemoryHistory } from 'history'
import { historyPropTypes } from '../lib'

let warningMessage

// eslint-disable-next-line no-console
console.error = message => {
  warningMessage = message
}

// eslint-disable-next-line no-console
console.warn = message => {
  warningMessage = message
}

const historyTypeChecking = (history, historyType) => {
  PropTypes.checkPropTypes(historyPropTypes, history, 'prop', historyType)
  expect(warningMessage).toEqual(undefined)
}

const historyLifecycleTypeChecking = (history, historyType) => {
  describe(`${historyType} pass the type checking`, () => {
    describe('when created', () => {
      historyTypeChecking(history, historyType)
    })

    describe('when pushing a new location', () => {
      history.push("/home")
      historyTypeChecking(history, historyType)
    })

    describe('when going back', () => {
      history.goBack()
      historyTypeChecking(history, historyType)
    })
  })
}

describe(`history-prop-types`, () => {
  describe("each history implementation pass the type checking in the course of its lifecycle", () => {
    historyLifecycleTypeChecking(createMemoryHistory(), 'memory history')
  })
});