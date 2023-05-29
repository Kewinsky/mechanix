package com.mechanix.mechanix.repositories;

import com.mechanix.mechanix.models.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {
    Iterable<OrderDetails> findByUserId(Long userId);

}