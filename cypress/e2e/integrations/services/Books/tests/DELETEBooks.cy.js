import * as POSTBooks from '../requests/POSTBooks.request';
import * as DELETEBooks from '../requests/DELETEBooks.request';

describe('DELETE Books',() =>{

    it('Criar um Livro e Deletar', () =>{
        POSTBooks.addBook().then((resAddBook) =>{
            DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200)
            })
        })
    })
})