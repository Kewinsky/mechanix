package com.mechanix.mechanix.exceptions.customerAddress;

public class AddressNotFoundException extends RuntimeException{
    public AddressNotFoundException(Long id) {
        super("Could not find address with id: " + id);
    }
}
