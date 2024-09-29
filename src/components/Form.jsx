/* eslint-disable react/prop-types */
export const FormItem = ({newItem, setNewItem, isloading, handleClick}) => {

    


  return (
    <form action="#" className="flex flex-col items-center gap-4">
      <label htmlFor="#" className="text-xl font-poppins font-bold">
        Agregamos un item al menu
      </label>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New item"
        className="border-2 rounded-md px-2 py-1"
      />
      <button
        onClick={handleClick}
        className="ml-2 px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black"
      >
        {isloading ? "Cargando" : "Agregar item"}
      </button>
    </form>
  );
};
