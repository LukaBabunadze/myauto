export const fetchProducts = async(values) => {
    const results =  await fetch(`https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0&Mans=&PriceFrom=${values.priceFrom}&PriceTo=${values.priceTo}&CurrencyID=3&MileageType=1&Page=1`)
    .then(res => res.json())
    .then(res => res.data.items)
    .catch((err) => alert(`Oops, ${err.message}`));
    return results;
} 