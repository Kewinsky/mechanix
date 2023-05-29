package com.mechanix.mechanix.repositories;

import com.mechanix.mechanix.models.OrderDetails;
import com.mechanix.mechanix.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    Iterable<OrderItem> findByOrderId(Long orderId);

}