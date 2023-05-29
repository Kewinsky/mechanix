package com.mechanix.mechanix.exceptions.orderItem;

public class OrderItemNotFoundException extends RuntimeException{
    public OrderItemNotFoundException(Long id) {
        super("Could not find order item with id: " + id);
    }
}
