package com.mechanix.mechanix.models;

import com.mechanix.mechanix.models.enums.ECategory;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private ECategory category;

    private float price;

    private Long discount_id;

    private LocalDate created_at;

    public Product(String name, String description, ECategory category, float price, Long discount_id, LocalDate created_at) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discount_id = discount_id;
        this.created_at = created_at;
    }
}
