import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate()
  function hanldeRedirect() {
    navigate('/')
  }
  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 w-[60%]">
      <div
        className="bg-white p-8 rounded shadow-md text-center">
        <h1
          className="text-4xl font-bold text-red-600">
          404
        </h1>
        <p
          className="mt-4 text-lg text-gray-700">
          Kechirasiz, siz qidirayotgan sahifa topilmadi.
        </p>
        <button
          onClick={hanldeRedirect}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Bosh sahifaga qaytish
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;