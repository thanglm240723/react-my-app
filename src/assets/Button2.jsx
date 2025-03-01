

function Button2() {
    let count=0;
    const hanglClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you click me ${count} time/s `)
        }

    }
    const hanglClick2 = (name) => console.log(`${name} stop clocking me `)
    //return (<button onClick={() => hanglClick2("bro")}>Click me </button>)
    return (<button onClick={() => hanglClick("bro") }>Click me </button>)
}

export default Button2