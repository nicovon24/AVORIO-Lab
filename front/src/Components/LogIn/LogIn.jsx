// Importa los módulos necesarios
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/auth";
import logo from "../../assets/logo.png";

const LogIn = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate(); 
  const {token, user_type} = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs?.userName && inputs?.password) {
      try {
        await dispatch(loginUser(inputs.userName, inputs.password)).then(
          (data) => {
            console.log(data);
            localStorage.setItem("token", data.payload.token);
            localStorage.setItem("user_type", data.payload.type);
          }
        );
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-2 pl-2 w-full">
      <div className="w-full  mt-8 grid place-content-center bg-gray-100">
        <div className="grid place-items-center m-auto w-full ">
          <div className="box grid place-items-center h-full m-auto mb-5 bg-white p-8 shadow-lg rounded-lg w-96">
            <div className="grid grid-cols-1 place-items-center m-auto">
              <img className="w-40" src={logo} alt="Logo" />
            </div>

            <form className="grid w-full font-semibold" onSubmit={handleSubmit}>
              <hr className="border-t my-8" />
              <label className="mb-2" htmlFor="userName">
                Usuario
              </label>
              <input
                className="my-2 p-2 border border-gray-300 rounded"
                id="userName"
                type="text"
                name="userName"
                onChange={handleChange}
                value={inputs?.userName}
              />

              <label className="mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="my-2 p-2 border border-gray-300 rounded"
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                value={inputs?.password}
              />

              {/* <span className="text-right underline text-blue-500">
                  <a href="">Necesito ayuda</a>
                </span> */}
              <hr className="border-t mb-8 mt-4" />
            </form>

            <div className="grid gap-4 mt-5 mb-10 font-semibold w-full">
              <button
                className="btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
