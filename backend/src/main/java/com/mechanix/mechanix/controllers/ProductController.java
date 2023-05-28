package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.product.ProductNotFoundException;
import com.mechanix.mechanix.models.Product;
import com.mechanix.mechanix.payloads.requests.product.UpdateProduct;
import com.mechanix.mechanix.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping(path="/getAllProducts")
    @ResponseBody
    Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping(path="/addProduct")
    String addProduct (@RequestBody Product product) {
        productRepository.save(product);
        return "Product added.";
    }

    @PutMapping("updateProduct/{id}")
    String updateProduct(@RequestBody UpdateProduct product,
                         @PathVariable Long id){
        return productRepository.findById(id)
                .map(product1 -> {
                    product1.setName(product.getName());
                    product1.setDescription(product.getDescription());
                    product1.setCategory(product.getCategory());
                    product1.setPrice(product.getPrice());
                    product1.setDiscount_id(product.getDiscount_id());
                    productRepository.save(product1);
                    return "Product updated.";
                })
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @DeleteMapping("/deleteProduct/{id}")
    String deleteProduct(@PathVariable Long id) {
        if (!productRepository.existsById(id)){
            throw new ProductNotFoundException(id);
        }
        productRepository.deleteById(id);
        return "Product removed.";
    }
}
