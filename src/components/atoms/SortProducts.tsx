'use client'
import useToggleMenu from "@/hooks/useToggleMenu";

const SortProducts = () => {
    const { isOpen, toggleDropdown, ref } = useToggleMenu();

    const values = ["Recomendado","Menor precio","Mayor precio", "Menor tamaño","Mayor tamaño"]
  return (
    <div ref={ref} className="relative w-[160px] ">
    <button
    onClick={toggleDropdown}
        className={`w-full px-4 py-2 font-medium border rounded shadow-md ${isOpen ? "bg-primary text-white" : "bg-light text-gray-700 dark:bg-dark dark:text-gray-300"} `} 
    >
        Ordenar
    </button>
    {isOpen && (
            <ul className="absolute left-0 w-full mt-2 bg-light border rounded shadow-lg dark:bg-dark">
                {values.map((value, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary">
                        <a href="#" className="block text-gray-700 dark:text-gray-300">
                            {value}
                        </a>
                    </li>
                ))}
            </ul>
        )}
</div>
  )
}

export default SortProducts
