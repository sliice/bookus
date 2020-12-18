import Book from './Book'

export const Page = props => {
    return ( <
        div id = 'page-container' >
        <
        h2 >
        we are bookus. <
        /h2> <
        div id = 'books-container' >
        <
        Book name = 'Wuthering Heights'
        author = 'Emily Bronte'
        year = '1847' / >
        <
        Book name = 'Steppenwolf'
        author = 'Hermann Hesse'
        year = '1927' / >
        <
        Book name = 'Das Schloss'
        author = 'Franz Kafka'
        year = '1926' / >
        <
        /div> <
        /div>
    )
}
export default Page