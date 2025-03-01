function Student(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age  >18 ? "Yes" : "No" }</p>
        </div>

    )


}

export default Student