package com.mechanix.mechanix.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@Table(name = "discounts")
public class Discount {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long productId;

    private String name;

    private String description;

    private float discountPercent;

    private Boolean active;

    @JsonIgnore
    private LocalDate createdAt;

    @PrePersist
    private void setCreatedAt() {
        this.createdAt = LocalDate.now();
    }

    public Discount(Long productId, String name, String description, float discountPercent, boolean active) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.discountPercent = discountPercent;
        this.active = active;
    }

}
