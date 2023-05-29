package com.mechanix.mechanix.payloads.requests.models;

import com.mechanix.mechanix.models.enums.EStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateOrderStatus {

    private EStatus status;

}
