import { FC } from "react";
import { Product } from "../type/index";
import { useAppDispatch , useAppSelector } from "../store/store";
import { addToCart } from "../store/slices/cartSlices";

interface ItemProps {
  product: Product;
}

const Item: FC<ItemProps> = ({ product }) => {

    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state?.auth);

    const onClickaddToCart = (): void => {
      if(user){
        dispatch(addToCart({ ...product, qty: 1 }))
      }
    }

  return (
    <div className="product rounded-lg drop-shadow-2xl border border-gray-200">
      <img
        className="w-20 h-auto rounded-full mb-3 m-auto"
        src={product.img}
        alt={product.name}
      />

      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <button  onClick={() => onClickaddToCart()} className="px-4 py-3 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
