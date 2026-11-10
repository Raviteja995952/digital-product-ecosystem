package com.ecosystem.academy.service;

import com.ecosystem.academy.entity.AcademyProgramme;
import com.ecosystem.academy.entity.StudentLead;
import com.ecosystem.academy.repository.AcademyProgrammeRepository;
import com.ecosystem.academy.repository.StudentLeadRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AcademyService {

    private final AcademyProgrammeRepository programmeRepository;
    private final StudentLeadRepository leadRepository;

    public AcademyService(AcademyProgrammeRepository programmeRepository, StudentLeadRepository leadRepository) {
        this.programmeRepository = programmeRepository;
        this.leadRepository = leadRepository;
    }

    @Transactional(readOnly = true)
    public List<AcademyProgramme> getAllProgrammes() {
        return programmeRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<AcademyProgramme> getProgrammeById(String id) {
        return programmeRepository.findById(id);
    }

    public StudentLead registerStudentLead(StudentLead lead) {
        lead.setStatus("NEW");
        return leadRepository.save(lead);
    }

    @Transactional(readOnly = true)
    public List<StudentLead> getAllLeads(String programmeId) {
        if (programmeId != null && !programmeId.equalsIgnoreCase("ALL") && !programmeId.trim().isEmpty()) {
            return leadRepository.findByProgrammeId(programmeId);
        }
        return leadRepository.findAll();
    }

    public Optional<StudentLead> updateLeadStatus(Long id, String newStatus) {
        return leadRepository.findById(id).map(lead -> {
            lead.setStatus(newStatus);
            return leadRepository.save(lead);
        });
    }
}

