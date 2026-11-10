package com.ecosystem.academy.controller;

import com.ecosystem.academy.entity.AcademyProgramme;
import com.ecosystem.academy.entity.StudentLead;
import com.ecosystem.academy.service.AcademyService;
import com.ecosystem.common.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/academy")
public class AcademyController {

    private final AcademyService academyService;

    public AcademyController(AcademyService academyService) {
        this.academyService = academyService;
    }

    @GetMapping("/programmes")
    public ResponseEntity<ApiResponse<List<AcademyProgramme>>> getProgrammes() {
        List<AcademyProgramme> list = academyService.getAllProgrammes();
        return ResponseEntity.ok(ApiResponse.ok("Programmes retrieved successfully", list));
    }

    @GetMapping("/programmes/{id}")
    public ResponseEntity<ApiResponse<AcademyProgramme>> getProgrammeById(@PathVariable String id) {
        return academyService.getProgrammeById(id)
                .map(p -> ResponseEntity.ok(ApiResponse.ok("Programme found", p)))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Programme not found with ID: " + id)));
    }

    @PostMapping("/leads")
    public ResponseEntity<ApiResponse<StudentLead>> registerLead(@RequestBody StudentLead lead) {
        StudentLead saved = academyService.registerStudentLead(lead);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Candidate application registered", saved));
    }

    @GetMapping("/leads")
    public ResponseEntity<ApiResponse<List<StudentLead>>> getLeads(
            @RequestParam(required = false) String programmeId
    ) {
        List<StudentLead> list = academyService.getAllLeads(programmeId);
        return ResponseEntity.ok(ApiResponse.ok("Student leads retrieved", list));
    }

    @PatchMapping("/leads/{id}/status")
    public ResponseEntity<ApiResponse<StudentLead>> updateLeadStatus(
            @PathVariable Long id,
            @RequestParam String status
    ) {
        return academyService.updateLeadStatus(id, status)
                .map(l -> ResponseEntity.ok(ApiResponse.ok("Lead status updated to " + status, l)))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Lead not found with ID: " + id)));
    }
}

