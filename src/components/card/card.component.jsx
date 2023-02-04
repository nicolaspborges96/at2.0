import { a } from "@react-spring/web";
import { CardBody } from "./card.styles";


const Card = ({...props}) => {

    console.log(props)

    const { titulo, das, aliquotaEfetiva, faixa } = props.dados;
    
    return (
        <CardBody >
            <div>{titulo}</div>
            <h3>DAS {das}</h3>
            <h3>Alíquota Efetiva {aliquotaEfetiva}</h3>
            <h3>{faixa}</h3>
        </CardBody>
    )

}

export default Card;
