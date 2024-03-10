import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import undraw from "../assets/undraw.svg";
import { INewCustomer } from "../interfaces/ICustomer";
import { createCustomer } from "../services/api/customerData";

export default function CustomerNew() {
  const { register, handleSubmit } = useForm<INewCustomer>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<INewCustomer> = async (data) => {
    const response = await createCustomer(data);
    if (response) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex items-center">
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold mb-4">Criar Novo Cliente</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Nome
              </label>
              <input
                {...register("name", { required: "Nome é obrigatório" })}
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                {...register("email", { required: "Email é obrigatório" })}
                type="text"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600">
                Telefone
              </label>
              <input
                {...register("phone", { required: "Telefone é obrigatório" })}
                type="text"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="x" className="block text-gray-600">
                Coordenada X
              </label>
              <input
                {...register("x", {
                  required: "Coordenada X é obrigatório",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a number",
                  },
                })}
                type="number"
                id="x"
                name="x"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="y" className="block text-gray-600">
                Coordenada y
              </label>
              <input
                {...register("y", {
                  required: "Coordenada Y é obrigatório",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a number",
                  },
                })}
                type="number"
                id="y"
                name="y"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Criar Contato
            </button>
          </form>
        </div>
        <div>
          <img src={undraw} alt="" />
        </div>
      </div>
    </>
  );
}
