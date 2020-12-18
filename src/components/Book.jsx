export const Book = props => {
    return(
        <div className = 'book'>
            <p className = 'book__name'>{ props.name }</p>
            <p className = 'book__year'>{ props.author + ', ' + props.year }</p>
        </div>
    )
}

export default Book