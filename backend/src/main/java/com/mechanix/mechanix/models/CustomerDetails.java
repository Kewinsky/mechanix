package com.mechanix.mechanix.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "customer_details")
public class CustomerDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String first_name;

    private String lats_name;

    private String telephone;

    public CustomerDetails(Long userId, String first_name, String lats_name, String telephone) {
        this.userId = userId;
        this.first_name = first_name;
        this.lats_name = lats_name;
        this.telephone = telephone;
    }
}
