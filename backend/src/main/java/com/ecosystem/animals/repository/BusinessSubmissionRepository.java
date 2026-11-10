package com.ecosystem.animals.repository;

import com.ecosystem.animals.entity.BusinessSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BusinessSubmissionRepository extends JpaRepository<BusinessSubmission, Long> {
    List<BusinessSubmission> findByAuditStatus(String auditStatus);
}

