import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('newBook.db')

export const init = () => {
    const promise = new Promise((res, rej) => {
        db.transaction((tx) => {
            tx.executeSql(
                'create table if not exists newBook (id integer primary key not null, title text not null, image text not null, address text not null, lat real not null, lng real not null)', [],
                () => {
                    res()
                },
                (_, err) => {
                    rej(err)
                }
            )
        })
    })
    return promise
}

export const insertNewBook = (title, image, address, lat, lng) => {
    const promise = new Promise((res, rej) => {
        db.transaction((tx) => {
            tx.executeSql(
                'insert into newBook (title, image, address, lat, lng) VALUES (?, ?, ?, ?, ?)',
                [title, image, address, lat, lng],
                (_,result) => res(result),
                (_,err) => rej(err)
            )
        })
    })
    return promise
}

export const fetchNewBook = () => {
    const promise = new Promise((res, rej) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM newBook', [],
                (_,result) => res(result),
                (_,err) => rej(err)
            )
        })
    })
    return promise
}