import React from "react";

const BackButton = () => {

    const goBack = () => {
        history.back();
    };

    return (
        <div className="flex flex-col">
            <div>
                <button
                    onClick={goBack}
                    className="text-white py-2 px-4 rounded-md"
                >
                    <i class="fa fa-arrow-left" aria-hidden="true"></i><br></br>
                    <span className="text-[12px]">BACK</span>
                </button>
            </div>
        </div>
    );
};

export default BackButton;
