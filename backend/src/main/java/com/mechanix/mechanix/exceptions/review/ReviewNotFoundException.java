package com.mechanix.mechanix.exceptions.review;

public class ReviewNotFoundException extends RuntimeException{
    public ReviewNotFoundException(Long id) {
        super("Could not find review with id: " + id);
    }
}
