import { useState } from 'react';
import Product from './components/Product';
function App() {
	const [productQuantity, setProductQuantity] = useState(0);
	const [cartProductQuantity, setCartProductQuantity] = useState(0);
	return (
		<>
			<Product
				productQuantity={productQuantity}
				setProductQuantity={setProductQuantity}

			/>
		</>
	);
}

export default App;
