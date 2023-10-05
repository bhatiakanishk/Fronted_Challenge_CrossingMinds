import { StickyHeader } from './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

/* 
This template uses Typescript.
If you want to use Javascript, you can import `.js` files as well.
*/

export function NavBar() {
  return (
    <div className={StickyHeader.header}>
      <div className={StickyHeader.title}>Dress To Impress</div>
      <FontAwesomeIcon
      className={StickyHeader.cartIcon}
      icon={faShoppingCart}
      />
    </div>
  );
}
