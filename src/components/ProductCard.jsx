// src/components/ProductCard.jsx

// เราจะรับ props เข้ามา ซึ่งก็คือข้อมูลของสินค้าแต่ละชิ้น
function ProductCard({ product }) {
  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain object-center lg:h-full lg:w-full p-4" // ใช้ object-contain เพื่อไม่ให้รูปยืด
        />
      </div>
      <div className="absolute top-2 right-2">
          <button className="p-2 bg-white rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 bg-orange-200 inline-block px-2 py-1 rounded">
            {product.category}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;