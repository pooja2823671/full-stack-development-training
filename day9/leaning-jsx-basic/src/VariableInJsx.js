function VariableInJsx() {
    let name = "Pooja";
    let address = "Samalkha"

    return (
        <div>
            {/* accessing variable in jsx in curly braces */}
            <h1>my name is {name}</h1>
            <h1>my address is {address} </h1>
        </div>
    );
}

export { VariableInJsx }