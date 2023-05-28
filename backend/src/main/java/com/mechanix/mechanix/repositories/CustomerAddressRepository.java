package com.mechanix.mechanix.repositories;

import com.mechanix.mechanix.models.CustomerAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerAddressRepository extends JpaRepository<CustomerAddress, Long> {
    Optional<CustomerAddress> findByUserId(Long userId);

}