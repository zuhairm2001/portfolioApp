import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import TitleComponent from "../Components/TitleComponent";
import ButtonComponent from "../Components/ButtonComponent";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/TitleComponent">
                <TitleComponent/>
            </ComponentPreview>
            <ComponentPreview path="/ButtonComponent">
                <ButtonComponent/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews