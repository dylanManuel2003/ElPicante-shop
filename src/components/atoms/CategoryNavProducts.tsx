'use client'
import useToggleMenu from "@/hooks/useToggleMenu";

const categories = [
    'Jackets & Coats',
    'Hoodies',
    'T-shirts & Vests',
    'Shirts',
    'Blazers & Suits',
    'Jeans',
    'Trousers',
    'Shorts',
    'Underwear'
];

const CategoryNavProducts = () => {
    const { isOpen, toggleDropdown, ref } = useToggleMenu();

    return (
        <div ref={ref} className="z-0 relative w-[160px] ">
        <button
            onClick={toggleDropdown}
            className={`w-full px-4 py-2 font-medium border rounded shadow-md ${isOpen ? "bg-primary text-white" : "bg-light text-gray-700 dark:bg-dark dark:text-gray-300"} `}
        >
            Categorías
        </button>
        {isOpen && (
            <ul className="absolute left-0 w-full mt-2 bg-light border rounded shadow-lg dark:bg-dark">
                {categories.map((category, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-light-secondary dark:hover:bg-dark-secondary">
                        <a href="#" className="block text-gray-700 dark:text-gray-300">
                            {category}
                        </a>
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
};

export default CategoryNavProducts;
