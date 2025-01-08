import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from './ui/toast';

const AddToCart = ({
  btnStyles,
  text,
  icon,
  id,
  currency,
  name,
  description,
  image,
  price,
}) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();
  const product = {
    id: id,
    currency: currency,
    name: name,
    description: description,
    image: image,
    price: price,
  };
  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
        addItem(product);
        toast({
          title: `${name} has been added to the cart`,
        });
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCart;
