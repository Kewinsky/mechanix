package com.mechanix.mechanix.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "customer_details")
public class CustomerDetails {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    private Long userId;

    private String firstName;

    private String latsName;

    private String telephone;

    public CustomerDetails(Long userId, String firstName, String latsName, String telephone) {
        this.userId = userId;
        this.firstName = firstName;
        this.latsName = latsName;
        this.telephone = telephone;
    }

}
