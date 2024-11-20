import PropTypes from 'prop-types';
import './CartContainer.css'

const CartContainer = ({ handleCartBtn, cartData }) => {

    return (
        <div>
            <h1 className='text-5xl'>Cart Container</h1>
            <div className="flex gap-8">
                <button onClick={() => handleCartBtn('cart')} className={`btn text-2xl font-bold ${cartData && 'active'}`}>Cart</button>
                <button onClick={() => handleCartBtn('about')} className={`btn text-2xl font-bold ${cartData|| 'active'}`}>About</button>
            </div>
        </div>
    );
};

CartContainer.propTypes = {
    handleCartBtn: PropTypes.func,
    cartData:PropTypes.bool
};

export default CartContainer;