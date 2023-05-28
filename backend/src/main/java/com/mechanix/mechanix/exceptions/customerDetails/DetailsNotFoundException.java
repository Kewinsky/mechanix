package com.mechanix.mechanix.exceptions.customerDetails;

public class DetailsNotFoundException extends RuntimeException{
    public DetailsNotFoundException(Long id) {
        super("Could not find details with id: " + id);
    }
}
