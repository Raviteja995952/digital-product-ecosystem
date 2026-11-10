package com.ecosystem.academy.repository;

import com.ecosystem.academy.entity.AcademyProgramme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademyProgrammeRepository extends JpaRepository<AcademyProgramme, String> {
}

