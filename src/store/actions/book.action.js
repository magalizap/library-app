export const SELECTED_BOOK = 'SELECTED_BOOK'
export const FILTERED_BOOK = 'FILTERED_BOOK'

export const selectedBook = (id) => ({
    type: SELECTED_BOOK,
    bookID: id
})

export const filteredBook = (id) => ({
    type: FILTERED_BOOK,
    categoryID: id
})