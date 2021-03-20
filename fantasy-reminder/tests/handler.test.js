const { addPhoneNumber } = require('../handler')

const buildEvent = payload => {
  return {
    body: JSON.stringify(payload)
  }
}

describe('addPhoneNumber', () => {
  it('returns a 422 if the body does not match a valid phone number', async () => {
    const input = "jkskjvv"
    const event = buildEvent(input)
    const response = await addPhoneNumber(event, {})

    expect(response.statusCode).toEqual(422)
    expect(JSON.parse(response.body).message).toEqual("Invalid phone number")
  })
})