export const CreateProduct = () => {
  return (
    <form>
      <input
        type="text"
        className="border py-2 px-4 mb-2"
        placeholder="Enter product"
      />

      <button type="submit" className="py-2 px-4 border bg-yellow-400">
        Create
      </button>
    </form>
  );
};
