package com.mechanix.mechanix.models;

import com.mechanix.mechanix.models.enums.EPaymentType;
import com.mechanix.mechanix.models.enums.EStatus;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private float total;

    @Enumerated(EnumType.STRING)
    private EPaymentType payment_type;

    private EStatus status;

    private LocalDate created_at;

    public OrderDetails(Long userId, float total, EPaymentType payment_type, EStatus status, LocalDate created_at) {
        this.userId = userId;
        this.total = total;
        this.payment_type = payment_type;
        this.status = status;
        this.created_at = created_at;
    }
}
