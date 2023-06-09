package com.mechanix.mechanix.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mechanix.mechanix.utils.RandomIdGenerator;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @JsonIgnore
    private Long id;

    private String username;

    private String password;

    private String email;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "userId"),
            inverseJoinColumns = @JoinColumn(name = "roleId"))
    private Set<Role> roles = new HashSet<>();

    @ElementCollection
    private List<Favourite> favourites;

    @JsonIgnore
    private LocalDate createdAt;

    @PrePersist
    private void generateRandomId() {
        this.id = RandomIdGenerator.generateRandomId();
        this.createdAt = LocalDate.now();
    }

    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

}
