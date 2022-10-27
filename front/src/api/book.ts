import DomainCommon from './common'
import {Book} from '../types/book'

const BookService = {

  list: function (): Promise<Book[]> {
    return new Promise((resolve, reject) => {
      return DomainCommon.fetchGet({
        url: `${DomainCommon.getApiUrl()}/books`,
        resolve,
        reject,
        optionHeaders: {
          accept: 'application/json'
        }
      })
    })
  },

  get: function (id: number): Promise<Book> {
    return new Promise((resolve, reject) => {
      return DomainCommon.fetchGet({
        url: `${DomainCommon.getApiUrl()}/books/${id}`,
        resolve,
        reject
      })
    })
  },

  add: function (book: Book): Promise<Book> {
    return new Promise((resolve, reject) => {
      return DomainCommon.fetchPost({
        url: `${DomainCommon.getApiUrl()}/books`,
        jsonBody: book,
        resolve,
        reject,
        optionHeaders: {
          'Content-Type': 'application/json',
          accept: 'application/json'
        }
      })
    })
  },

  update: function (id: number, book: Book): Promise<Book> {
    return new Promise((resolve, reject) => {
      return DomainCommon.fetchPatch({
        url: `${DomainCommon.getApiUrl()}/books/${id}`,
        jsonBody: book,
        resolve,
        reject,
        optionHeaders: {
          'Content-Type': 'application/json',
          accept: 'application/json'
        }
      })
    })
  }
}

export default BookService
