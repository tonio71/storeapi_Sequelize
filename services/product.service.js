import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from "../repositories/sale.repository.js";


async function createProduct(product) {
  const Supplier = await SupplierRepository.getSupplier(product.supplierId);
  if (Supplier) {
    return ProductRepository.insertProduct(product);
  } else {
    throw new Error(
      "Supplier não existe! Cadastre o Supplier antes de cadastrar os produtos dele!"
    );
  }
}

async function getProducts() {
  return ProductRepository.getProducts();
}
async function getProduct(id) {
  return ProductRepository.getProduct(id);
}
async function deleteProduct(id) {
  const sales = await SaleRepository.getSalesByProductId(id);
  if(sales.length>0){
    throw new Error ("Não é possível excluir o produto pois ele tem vendas!")
  }
  return ProductRepository.deleteProduct(id);
}
async function updateProduct(product) {
  const Supplier = await SupplierRepository.getSupplier(product.supplierId);
  if (Supplier) {
    return ProductRepository.updateProduct(product);
  } else {
    throw new Error(
      "Supplier não existe! Cadastre o novo Supplier antes de alterar o Supplier do produto!"
    );
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
