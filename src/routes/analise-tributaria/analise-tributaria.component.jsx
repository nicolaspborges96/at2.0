import AnaliseTForm from '../../components/analise-tributaria-form/analise-tributaria-form.component';
import Card from '../../components/card-display/card-display.component';
import { AnaliseTContainer } from './analise-tributaria.styles';




const AnaliseT = () => {
    

    return (
        <>
            <AnaliseTContainer>
                <AnaliseTForm  />
            </AnaliseTContainer>

            <Card></Card>
        </>
        
    )
}

export default AnaliseT;
