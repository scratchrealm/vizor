import { FunctionComponent } from "react";
import { SurfaceViewData } from "./SurfaceViewData";
import SurfaceWidget from "./SurfaceWidget";

type Props = {
    data: SurfaceViewData
    width: number
    height: number
}

const SurfaceView: FunctionComponent<Props> = ({data, width, height}) => {
    const {vertices, faces, scalarData, scalarRange} = data
    return (
        <SurfaceWidget
            vertices={vertices}
            faces={faces}
            scalarData={scalarData}
            scalarRange={scalarRange}
            width={width}
            height={height}
        />
    )

}

export default SurfaceView