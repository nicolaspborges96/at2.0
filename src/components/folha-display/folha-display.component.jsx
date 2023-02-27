import { FolhaDisplayContainer } from "./folha-display.styles";
import { CalculoContext } from "../../context/calculo.context";
import { useContext } from "react";
import FolhaCard from "../folha-card/folha-card.component";
import Card from "../card/card.component";
import { Fragment } from "react";

const FolhaDisplay = ({ ...props }) => {

    const { resultados, isCardShown } = useContext(CalculoContext);


    return (
        <>
            {
                isCardShown ? (
                    <FolhaDisplayContainer>
                        {
                            resultados.map((resultado, index) => (
                                <Fragment key={index} >
                                    {
                                        resultado.titulo === 'anexoV' ? (
                                            <></>
                                        ) : (
                                            <FolhaCard dados={resultado} key={index} />
                                        )
                                    }

                                </Fragment>))
                        }

                    </FolhaDisplayContainer>
                ) : (
                    <></>
                )
            }
        </>

    )
}

export default FolhaDisplay;