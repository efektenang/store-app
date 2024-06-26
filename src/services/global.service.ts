export async function getProduct(id: number) {
  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!result.ok) throw new Error("Failed to fetch data.");

  return result.json();
}

export async function getProducts() {
    const result = await fetch('https://fakestoreapi.com/products')
    if (!result.ok) throw new Error("Failed to fetch data.")

    return result.json()
}

export async function getCategories() {
    const result = await fetch('https://fakestoreapi.com/products/categories')
    if (!result.ok) throw new Error("Failed to fetch data.")

    return result.json()
}