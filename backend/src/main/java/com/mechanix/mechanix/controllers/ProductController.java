package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.product.ProductNotFoundException;
import com.mechanix.mechanix.models.Product;
import com.mechanix.mechanix.payloads.requests.models.UpdateProduct;
import com.mechanix.mechanix.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping(path = "/getProducts")
    @ResponseBody
    Iterable<Product> getProducts() {
        return productRepository.findAll();
    }

    @GetMapping(path = "/getProductById/{id}")
    Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @PostMapping(path = "/addProduct")
    String addProduct (@RequestBody Product product) {
        productRepository.save(product);
        return "Product added.";
    }

    @PutMapping(path = "/updateProduct/{id}")
    String updateProduct(@RequestBody UpdateProduct product,
                         @PathVariable Long id){
        return productRepository.findById(id)
                .map(product1 -> {
                    product1.setName(product.getName());
                    product1.setShortDescription(product.getShortDescription());
                    product1.setLongDescription(product.getLongDescription());
                    product1.setCategory(product.getCategory());
                    product1.setPrice(product.getPrice());
                    product1.setSpecification(product.getSpecification());
                    product1.setPackageContent(product.getPackageContent());
                    product1.setPhysicalUnit(product.getPhysicalUnit());
                    productRepository.save(product1);
                    return "Product updated.";
                })
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @DeleteMapping(path = "/deleteProduct/{id}")
    String deleteProduct(@PathVariable Long id) {
        if (!productRepository.existsById(id)){
            throw new ProductNotFoundException(id);
        }
        productRepository.deleteById(id);
        return "Product deleted.";
    }
}
