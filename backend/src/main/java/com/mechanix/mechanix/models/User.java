package com.mechanix.mechanix.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    private String email;

    private Long customer_details_id;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    private LocalDate created_at;

    public User(String username, String password, String email, Long customer_details_id, Set<Role> roles, LocalDate created_at) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.customer_details_id = customer_details_id;
        this.roles = roles;
        this.created_at = created_at;
    }
}
