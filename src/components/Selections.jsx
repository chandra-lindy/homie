import {Title} from './Title';
import {Board} from './Board';
import {Button} from './Button';


export default function Selections() {
    const source = [
        '../../images/home01.jpeg',
        '../../images/home02.jpeg',
        '../../images/home03.jpeg',
        '../../images/home04.jpeg',
        '../../images/home05.jpeg',
        '../../images/home06.jpeg',
        '../../images/home07.jpeg',
        '../../images/home08.jpeg',
        '../../images/home09.jpeg'
    ];


    function handleImageClick(i) {
        console.log("Home: " + i + " clicked");
    }

    function handleSubmit() {
        console.log("Submit clicked");
    }

    return (
        <>
        <Title title="Capt-cha Ya-house!"/>
        <Board path={source} handleImageClick={handleImageClick} />
        <Button onSubmit={() => handleSubmit()} />
        </>
    )
}
