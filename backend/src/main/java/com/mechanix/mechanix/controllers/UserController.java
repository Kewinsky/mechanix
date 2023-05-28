package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.users.UserNotFoundException;
import com.mechanix.mechanix.models.User;
import com.mechanix.mechanix.payloads.requests.models.UpdateUser;
import com.mechanix.mechanix.payloads.requests.models.UpdateUserByAdmin;
import com.mechanix.mechanix.repositories.UserRepository;
import com.mechanix.mechanix.utils.RoleConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/user")
public class UserController {

    private static final Long  USER_ID = 2L;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleConverter converter;

    @GetMapping("/getUsers")
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path="/getUserById/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/updateUserByAdmin/{id}")
    String updateUserByAdmin(@RequestBody UpdateUserByAdmin user,
                             @PathVariable Long id){
        return userRepository.findById(id)
                .map(user1 -> {
                    user1.setUsername(user.getUsername());
                    user1.setEmail(user.getEmail());
                    user1.setRoles(converter.toRoleSet(user.getRole()));
                    userRepository.save(user1);
                    return "User updated.";
                })
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/deleteUser/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User deleted.";
    }

    // user access
    @PutMapping("/updateUser")
    String updateUser(@RequestBody UpdateUser user){
        return userRepository.findById(USER_ID)
                .map(user1 -> {
                    user1.setUsername(user.getUsername());
                    user1.setEmail(user.getEmail());
                    userRepository.save(user1);
                    return "User updated.";
                })
                .orElseThrow(() -> new UserNotFoundException(USER_ID));
    }
}
