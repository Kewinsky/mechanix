package com.mechanix.mechanix.models;

import lombok.AllArgsConstructor;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private float discount_percent;

    private boolean active;

    private LocalDate created_at;

    public Discount(String name, String description, float discount_percent, boolean active, LocalDate created_at) {
        this.name = name;
        this.description = description;
        this.discount_percent = discount_percent;
        this.active = active;
        this.created_at = created_at;
    }
}
