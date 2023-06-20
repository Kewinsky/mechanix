package com.mechanix.mechanix.controllers;

import com.mechanix.mechanix.exceptions.users.UserNotFoundException;
import com.mechanix.mechanix.models.Favourite;
import com.mechanix.mechanix.models.OrderItem;
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

    private static final Long  USER_ID = 1L;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleConverter converter;

    @GetMapping(path = "/getUsers")
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path = "/getUserById/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping(path = "/getCurrentUser")
    User getCurrentUser() {
        return userRepository.findById(USER_ID)
                .orElseThrow(() -> new UserNotFoundException(USER_ID));
    }

    @PutMapping(path = "/updateUser")
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

    @GetMapping(path = "/getFavourites")
    public Iterable<Favourite> getFavourites() {
        User user = userRepository.findById(USER_ID)
                .orElseThrow(() -> new UserNotFoundException(USER_ID));

        return user.getFavourites();
    }

    @PostMapping(path = "/addFavourite")
    public String addFavorite(@RequestBody Favourite favourite) {
        User user = userRepository.findById(USER_ID)
                .orElseThrow(() -> new UserNotFoundException(USER_ID));

        Favourite favourite1 = new Favourite(favourite.getProductId());

        user.getFavourites().add(favourite1);

        userRepository.save(user);

        return "Favourite item added.";
    }

    @PutMapping(path = "/updateUserByAdmin/{id}")
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

    @DeleteMapping(path = "/deleteUser/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User deleted.";
    }
}
