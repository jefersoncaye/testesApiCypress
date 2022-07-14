import * as PUTBooks from '../requests/PUTBooks.request';
import * as GETBooks from '../requests/GETBooks.request'

describe('PUT Books', () => {

    it('Altera um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.alterBook(resAllBooks.body[0].id).should((resAlterBook) => {
                expect(resAlterBook.status).to.eq(200)
                expect(resAlterBook.body.title).to.eq('Livro Post Alterado')
                expect(resAlterBook.body.description).to.eq('Testando PUT')
                expect(resAlterBook.body.excerpt).to.eq('Aqui temos uma descrição longa para testar o PUT de uma API aleatoria')
            })
        })
      })
})