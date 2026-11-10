package com.ecosystem.academy.repository;

import com.ecosystem.academy.entity.StudentLead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentLeadRepository extends JpaRepository<StudentLead, Long> {
    List<StudentLead> findByProgrammeId(String programmeId);
    List<StudentLead> findByStatus(String status);
}

