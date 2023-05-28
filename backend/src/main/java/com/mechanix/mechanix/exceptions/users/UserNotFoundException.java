package com.mechanix.mechanix.exceptions.users;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("Could not find user with id: " + id);
    }
    public UserNotFoundException(String email) {
        super("Could not find user with email: " + email);
    }
}
