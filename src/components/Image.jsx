export default function Image({ path, onImageClick }) {
    return (
        <img className="basis-1/4 w-40"
            src={path}
            onClick={onImageClick}
        />
    );
}
