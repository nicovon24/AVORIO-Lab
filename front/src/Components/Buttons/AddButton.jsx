import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateProductForm from "../Create/CreateProduct";


const AddButton = () => {
	const dispatch = useDispatch();
	const [isFormOpen, setIsFormOpen] = useState(false);

	const openForm = () => {
		setIsFormOpen(true);
	};

	const closeForm = () => {
		setIsFormOpen(false);
	};

	return (
		<div className="flex flex-col">
			<div>
				<button
					onClick={openForm}
					className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 absolute top-2 left-2"
				>
          <i class="fa fa-plus" aria-hidden="true"></i>
				</button>
			</div>
			<CreateProductForm isOpen={isFormOpen} onClose={closeForm} />
		</div>
	);
};

export default AddButton;
