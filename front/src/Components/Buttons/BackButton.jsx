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
                    className="border-2 border-white rounded-full  text-white py-2 px-4 rounded-md"
                >
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
};

export default BackButton;
