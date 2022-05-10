interface Product{
  id: number,
  name: string,
  price: number
};

// this function returns a 'Product'
//and the argument must the a number
function getProduct(id:number) : Product{
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}

const product = getProduct(1);
// ts automagically tells you if a variable doesn't exist
console.log(`The product ${product.name} costs $${product.price}`);


