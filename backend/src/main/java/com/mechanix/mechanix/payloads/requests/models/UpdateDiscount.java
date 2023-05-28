package com.mechanix.mechanix.payloads.requests.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateDiscount {

    private String name;

    private String description;

    private float discount_percent;

    private Boolean active;

}
