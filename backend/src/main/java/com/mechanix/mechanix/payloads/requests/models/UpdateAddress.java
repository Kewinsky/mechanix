package com.mechanix.mechanix.payloads.requests.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateAddress {

    private String addressLine1;

    private String addressLine2;

    private String city;

    private String postalCode;

    private String country;

}
