import { Image } from './Image';

export default function Board({ path, handleImageClick }) {
    return (
        <>
            <div className="flex flex-row place-content-center mt-8">
                <img className="basis-1/6 w-20 transformation duration-700 hover:p-2"
                    src={path[0]} onClick={() => handleImageClick(0)} />
                <img className="basis-1/6 w-20 transformation duration-700 hover:p-2"
                    src={path[1]} onClick={() => handleImageClick(1)} />
                <img className="basis-1/6 w-20 transformation duration-700 hover:p-2"
                    src={path[2]} onClick={() => handleImageClick(2)} />
            </div>
            <div className="flex flex-row place-content-center">
                <img className="basis-1/6 w-20 transformation duration-700 hover:p-2"
                    src={path[3]} onClick={() => handleImageClick(3)} />
                <img className="basis-1/6 w-20 transformation duration-700 hover:p-2"
                    src={path[4]} onClick={() => handleImageClick(4)} />
                <img className="basis-1/6 w-20 transformation duration-700 hover:p-2"
                    src={path[5]} onClick={() => handleImageClick(5)} />
            </div>
            <div className="flex flex-row place-content-center">
                <img className="basis-1/6 w-20 transformation duration-700 hover:p-2"
                    src={path[6]} onClick={() => handleImageClick(6)} />
                <img className="basis-1/6 w-20 transformation duration-700 hover:p-2"
                    src={path[7]} onClick={() => handleImageClick(7)} />
                <img className="basis-1/6 w-20 transformation duration-700 hover:p-2"
                    src={path[8]} onClick={() => handleImageClick(8)} />
            </div>
        </>
    );
}
