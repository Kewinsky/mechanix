package com.mechanix.mechanix.exceptions.discount;

public class DiscountNotFoundException extends RuntimeException{
    public DiscountNotFoundException(Long id) {
        super("Could not find discount with id: " + id);
    }
}
