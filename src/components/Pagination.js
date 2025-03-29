import { useUsers } from "./UserContext";

const Pagination = () => {
  const { page, setPage, totalPages } = useUsers();

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`px-4 py-2 mx-1 rounded ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
        onClick={handlePrev}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2">Page {page} of {totalPages}</span>
      <button
        className={`px-4 py-2 mx-1 rounded ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
        onClick={handleNext}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
