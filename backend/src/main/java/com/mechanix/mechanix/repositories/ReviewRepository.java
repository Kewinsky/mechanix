package com.mechanix.mechanix.repositories;

import com.mechanix.mechanix.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    Iterable<Review> findByProductId(Long productId);

}