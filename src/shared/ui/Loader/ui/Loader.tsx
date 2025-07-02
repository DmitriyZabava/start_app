import  "./Loader.scss"

export const Loader = () => {
    return (
        <div className={"Loader"}>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
    );
};
