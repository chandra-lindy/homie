export default function Button({ onSubmit }) {
    return (
        <div className="flex flex-row place-content-center">
            <button
                className=" bg-blue-500 transformation duration-700 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded"
                type="button"
                onClick={onSubmit}
            >
                Click Me
            </button>
        </div>
    );
}
