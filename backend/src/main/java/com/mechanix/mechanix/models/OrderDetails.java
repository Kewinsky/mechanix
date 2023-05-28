package com.mechanix.mechanix.models;

import com.mechanix.mechanix.models.enums.EPaymentType;
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

    private Long user_id;

    private float total;

    @Enumerated(EnumType.STRING)
    private EPaymentType payment_type;

    private String status;

    private LocalDate created_at;

    public OrderDetails(Long user_id, float total, EPaymentType payment_type, String status, LocalDate created_at) {
        this.user_id = user_id;
        this.total = total;
        this.payment_type = payment_type;
        this.status = status;
        this.created_at = created_at;
    }
}
