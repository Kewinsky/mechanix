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
@Table(name = "reviews")
public class Review {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long productId;

    private Long userId;

    private String description;

    private int stars;

    @JsonIgnore
    private LocalDate createdAt;

    @PrePersist
    private void setCreatedAt() {
        this.createdAt = LocalDate.now();
    }

    public Review(Long productId, Long userId, String description, int stars) {
        this.productId = productId;
        this.userId = userId;
        this.description = description;
        this.stars = stars;
    }
}
