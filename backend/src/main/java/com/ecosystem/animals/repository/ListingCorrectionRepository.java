package com.ecosystem.animals.repository;

import com.ecosystem.animals.entity.ListingCorrection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListingCorrectionRepository extends JpaRepository<ListingCorrection, Long> {
    List<ListingCorrection> findByStatus(String status);
}

