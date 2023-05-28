package com.mechanix.mechanix.models;

import com.mechanix.mechanix.models.enums.ECategory;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "product_categories")
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ECategory name;

    private String description;

    public ProductCategory(ECategory name, String description) {
        this.name = name;
        this.description = description;
    }
}
