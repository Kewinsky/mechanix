package com.mechanix.mechanix.exceptions.orderDetails;

public class OrderDetailsNotFoundException extends RuntimeException{
    public OrderDetailsNotFoundException(Long id) {
        super("Could not find order details with id: " + id);
    }
}
