export const Book = props => {
    return(
        <div className = 'book'>
            <p>{ props.name }</p>
            <p>{ props.year }</p>
        </div>
    )
}

export default Book