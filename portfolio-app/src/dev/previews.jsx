import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import TitleComponent from "../Components/TitleComponent";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/TitleComponent">
                <TitleComponent/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews