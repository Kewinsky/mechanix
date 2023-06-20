package com.mechanix.mechanix.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mechanix.mechanix.models.enums.ECategory;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

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

    private String shortDescription;

    private String longDescription;

    @Enumerated(EnumType.STRING)
    private ECategory category;

    private float price;

    @ElementCollection
    private List<String> specification;

    @ElementCollection
    private List<String> packageContent;

    @ElementCollection
    private List<String> physicalUnit;

    @JsonIgnore
    private LocalDate createdAt;

    @PrePersist
    private void setCreatedAt() {
        this.createdAt = LocalDate.now();
    }

    public Product(String name, String shortDescription, String longDescription, ECategory category, float price, List<String> specification, List<String> packageContent, List<String> physicalUnit) {
        this.name = name;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.category = category;
        this.price = price;
        this.specification = specification;
        this.packageContent = packageContent;
        this.physicalUnit = physicalUnit;
    }
}
