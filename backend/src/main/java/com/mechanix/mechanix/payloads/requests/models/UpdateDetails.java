package com.mechanix.mechanix.payloads.requests.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateDetails {

    private String firstName;

    private String latsName;

    private String telephone;

}
