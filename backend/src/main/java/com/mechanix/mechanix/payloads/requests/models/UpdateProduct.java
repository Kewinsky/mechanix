package com.mechanix.mechanix.payloads.requests.models;

import com.mechanix.mechanix.models.enums.ECategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateProduct {

    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private ECategory category;

    private float price;

    private Long discountId;

}