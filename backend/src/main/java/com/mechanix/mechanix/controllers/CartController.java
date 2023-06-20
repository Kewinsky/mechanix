package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.users.UserNotFoundException;
import com.mechanix.mechanix.models.*;
import com.mechanix.mechanix.repositories.CartRepository;
import com.mechanix.mechanix.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/cart")
public class CartController {

    private static final Long  USER_ID = 1L;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    CartRepository cartRepository;

    @GetMapping(path = "/getCurrentUserCart")
    Cart getCurrentUserCart() {
        return cartRepository.findByUserId(USER_ID)
                .orElseThrow(() -> new UserNotFoundException(USER_ID));
    }

    @PostMapping(path = "/createCart")
    public String createCart () {
        Cart cart = new Cart(USER_ID);

        cartRepository.save(cart);

        return "Cart created.";
    }

    @PostMapping(path = "/addItemToCart")
    public String addItemToCart(@RequestBody CartItem item) {

        Cart cart = getCurrentUserCart();

        CartItem item1 = new CartItem(
                item.getProductId(),
                item.getQuantity()
        );

        cart.getCartItems().add(item1);
        cartRepository.save(cart);

        return "Product added to cart.";
    }
}
