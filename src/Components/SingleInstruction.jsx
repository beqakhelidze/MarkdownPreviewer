const SingleInstruction = ({ itemKey, value }) => {

    return (
        <li>
            <strong>{itemKey}</strong> - <i>{value}</i>
        </li>
    )
}

export default SingleInstruction;