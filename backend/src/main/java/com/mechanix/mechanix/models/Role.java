package com.mechanix.mechanix.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mechanix.mechanix.models.enums.ERole;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "roles")
public class Role {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ERole name;

    public Role(ERole name) {
        this.name = name;
    }

}
