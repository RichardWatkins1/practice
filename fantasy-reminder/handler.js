'use strict';

const addPhoneNumber = async (event, context) => {
  const phoneNumber = JSON.parse(event.body)
  if (invalidPhoneNumber(phoneNumber)) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        message: "Invalid phone number"
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

const VALID_UK_NUMBERS = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/

const invalidPhoneNumber = phoneNumber => {
  return !phoneNumber.match(VALID_UK_NUMBERS)
}

module.exports = {
  addPhoneNumber
}
