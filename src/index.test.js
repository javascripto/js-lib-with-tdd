import OnLeaveIntent from './index'

describe('OnLeaveIntent', () => {
  let callback
  let onLeaveIntent

  beforeEach(() => {
    callback = jest.fn()
    onLeaveIntent = new OnLeaveIntent(callback)
  })

  it('should run the callback function if the users goes out of the screen', () => {
    // simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).toHaveBeenCalled()
  })

  it('should not run the callback function if the users stills on the screen', () => {
    // simulate the user leaving the page
    document.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: new EventTarget() })
    )
    expect(callback).not.toHaveBeenCalled()
  })
})
