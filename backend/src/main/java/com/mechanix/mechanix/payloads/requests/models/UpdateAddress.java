package com.mechanix.mechanix.payloads.requests.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateAddress {

    private String address_line1;

    private String address_line2;

    private String city;

    private String postal_code;

    private String country;

}
