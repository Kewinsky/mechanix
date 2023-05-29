package com.mechanix.mechanix.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mechanix.mechanix.models.enums.EPaymentType;
import com.mechanix.mechanix.models.enums.EStatus;
import com.mechanix.mechanix.utils.RandomIdGenerator;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@Table(name = "order_details")
public class OrderDetails {

    @Id
    @JsonIgnore
    private Long id;

    @JsonIgnore
    private Long userId;

    private float total;

    @Enumerated(EnumType.STRING)
    private EPaymentType paymentType;

    private EStatus status;

    @JsonIgnore
    private LocalDate createdAt;

    @PrePersist
    private void generateRandomId() {
        this.id = RandomIdGenerator.generateRandomId();
        this.createdAt = LocalDate.now();
    }

    public OrderDetails(Long userId, float total, EPaymentType paymentType, EStatus status) {
        this.userId = userId;
        this.total = total;
        this.paymentType = paymentType;
        this.status = status;
    }

}
