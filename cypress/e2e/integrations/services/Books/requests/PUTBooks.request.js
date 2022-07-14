/// <reference types="cypress" />

const payloadAlterdBook = require('../payloads/put-book.json')

function alterBook(idBook) {
  return cy.request({
    method: 'PUT',
    url: `Books/${idBook}`,
    failOnStatusCode: false,
    body: payloadAlterdBook
  })
}

export { alterBook };