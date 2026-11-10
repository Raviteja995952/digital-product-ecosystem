package com.ecosystem.studio.repository;

import com.ecosystem.studio.entity.StudioProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudioProjectRepository extends JpaRepository<StudioProject, String> {
    List<StudioProject> findAllByOrderByUpdatedAtDesc();
}

