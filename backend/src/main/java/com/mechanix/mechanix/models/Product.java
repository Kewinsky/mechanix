package com.mechanix.mechanix.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private ECategory category;

    private float price;

    private Long discountId;

    @JsonIgnore
    private LocalDate createdAt;

    @PrePersist
    private void setCreatedAt() {
        this.createdAt = LocalDate.now();
    }

    public Product(String name, String description, ECategory category, float price, Long discountId) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountId = discountId;
    }

}
