import * as GETBooks from '../requests/GETBooks.request'

describe('GET Books',() =>{

    it('Listar Todos os Livros',() =>{
        GETBooks.allBooks().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.empty
            expect(response.body[0].title).to.eq('Book 1')
        })
    })
})

