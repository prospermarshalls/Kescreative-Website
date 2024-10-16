import Right from "./Right card"
import Left from "./Left card"

function Card() {
    return(
        <div className="flex flex-col md:flex-row space-x-5  p-10">
            <Right/>
            <Left/>
        </div>
    )
}

export default Card;