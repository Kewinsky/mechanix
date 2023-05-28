package com.mechanix.mechanix.repositories;

import com.mechanix.mechanix.models.CustomerAddress;
import com.mechanix.mechanix.models.CustomerDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails, Long> {
    Optional<CustomerDetails> findByUserId(Long userId);

}