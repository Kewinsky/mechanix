package com.mechanix.mechanix.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "customer_addresses")
public class CustomerAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long user_id;

    private String address_line1;

    private String address_line2;

    private String city;

    private String postal_code;

    private String country;

    public CustomerAddress(Long user_id, String address_line1, String address_line2, String city, String postal_code, String country) {
        this.user_id = user_id;
        this.address_line1 = address_line1;
        this.address_line2 = address_line2;
        this.city = city;
        this.postal_code = postal_code;
        this.country = country;
    }
}
