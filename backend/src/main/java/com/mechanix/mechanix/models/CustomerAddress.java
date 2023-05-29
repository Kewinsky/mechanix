package com.mechanix.mechanix.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "customer_addresses")
public class CustomerAddress {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    private Long userId;

    private String addressLine1;

    private String addressLine2;

    private String city;

    private String postalCode;

    private String country;

    public CustomerAddress(Long userId, String addressLine1, String addressLine2, String city, String postalCode, String country) {
        this.userId = userId;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.postalCode = postalCode;
        this.country = country;
    }

}
