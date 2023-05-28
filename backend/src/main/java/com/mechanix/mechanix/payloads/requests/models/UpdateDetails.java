package com.mechanix.mechanix.payloads.requests.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateDetails {

    private String first_name;

    private String lats_name;

    private String telephone;

}
