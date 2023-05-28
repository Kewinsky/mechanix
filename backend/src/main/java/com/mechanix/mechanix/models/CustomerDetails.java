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

    private Long user_id;

    private String first_name;

    private String lats_name;

    private String telephone;

    public CustomerDetails(Long user_id, String first_name, String lats_name, String telephone) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.lats_name = lats_name;
        this.telephone = telephone;
    }
}
