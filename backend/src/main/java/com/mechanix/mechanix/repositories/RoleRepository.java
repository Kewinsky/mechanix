package com.mechanix.mechanix.repositories;

import com.mechanix.mechanix.models.Role;
import com.mechanix.mechanix.models.enums.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}