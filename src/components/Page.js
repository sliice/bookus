import { useCallback, useEffect, useMemo } from 'react'
import Book from './Book'
import NewBook from './CreateBook'
import Books from '../mocked-data/books.json'
import { useHttp } from '../hooks/http'

export const Page = props => {
    
    const { request } = useHttp()
    const books = useMemo( () => Books )

    // const fetchData = useCallback(async () => {
    //     try {
    //         const fetched = await request(`/info`, 'GET', null, {})
    //         console.log("fetched: ", fetched)            
    //         return fetched
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    //   }, [request])

    //   useEffect(() => {
    //       fetchData()
    //   }, [fetchData])
    
    useEffect( () => {
        document.title = 'bookus'
    }, [document] )

    return ( 
        <div id = 'page-container'>
            <h2>we are bookus.</h2> 
            <div id = 'books-container'>
                <NewBook />
                { books.map( 
                    (book, i) => { 
                        return ( <Book  { ...book } key = { i } /> )
                    })
                }
            </div> 
        </div>
    )
}
export default Page