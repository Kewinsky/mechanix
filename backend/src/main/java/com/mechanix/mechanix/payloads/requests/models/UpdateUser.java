package com.mechanix.mechanix.payloads.requests.models;

import com.mechanix.mechanix.models.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUser {

    private String username;

    private String email;

}
