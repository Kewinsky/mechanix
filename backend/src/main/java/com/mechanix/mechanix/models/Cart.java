package com.mechanix.mechanix.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = "carts")
public class Cart {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    private Long userId;

    @ElementCollection
    private List<CartItem> cartItems;

    public Cart(Long userId) {
        this.userId = userId;
    }
}
