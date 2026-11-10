package com.ecosystem.animals.repository;

import com.ecosystem.animals.entity.AnimalProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalProviderRepository extends JpaRepository<AnimalProvider, Long> {

    List<AnimalProvider> findByCityIgnoreCase(String city);

    List<AnimalProvider> findByProviderType(String providerType);

    List<AnimalProvider> findByIsEmergencyTrue();

    @Query("SELECT p FROM AnimalProvider p WHERE " +
           "(:city IS NULL OR LOWER(p.city) = LOWER(:city)) AND " +
           "(:providerType IS NULL OR p.providerType = :providerType) AND " +
           "(:emergencyOnly = FALSE OR p.isEmergency = TRUE) AND " +
           "(:minRating IS NULL OR p.rating >= :minRating)")
    List<AnimalProvider> searchProviders(
            @Param("city") String city,
            @Param("providerType") String providerType,
            @Param("emergencyOnly") boolean emergencyOnly,
            @Param("minRating") Double minRating
    );
}

