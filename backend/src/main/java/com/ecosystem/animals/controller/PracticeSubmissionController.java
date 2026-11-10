package com.ecosystem.animals.controller;

import com.ecosystem.animals.dto.CorrectionRequestDto;
import com.ecosystem.animals.dto.PracticeRegistrationDto;
import com.ecosystem.animals.entity.BusinessSubmission;
import com.ecosystem.animals.entity.ListingCorrection;
import com.ecosystem.animals.service.AnimalProviderService;
import com.ecosystem.common.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PracticeSubmissionController {

    private final AnimalProviderService providerService;

    public PracticeSubmissionController(AnimalProviderService providerService) {
        this.providerService = providerService;
    }

    /**
     * Submit a listing correction
     * POST /api/corrections
     */
    @PostMapping("/corrections")
    public ResponseEntity<ApiResponse<ListingCorrection>> submitCorrection(
            @Valid @RequestBody CorrectionRequestDto requestDto
    ) {
        ListingCorrection saved = providerService.createCorrection(requestDto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Correction submitted successfully for verification review", saved));
    }

    /**
     * Get all listing corrections
     * GET /api/corrections
     */
    @GetMapping("/corrections")
    public ResponseEntity<ApiResponse<List<ListingCorrection>>> getCorrections() {
        List<ListingCorrection> list = providerService.getAllCorrections();
        return ResponseEntity.ok(ApiResponse.ok("Corrections retrieved", list));
    }

    /**
     * Register a new practice/clinic
     * POST /api/practices
     */
    @PostMapping("/practices")
    public ResponseEntity<ApiResponse<BusinessSubmission>> registerPractice(
            @Valid @RequestBody PracticeRegistrationDto requestDto
    ) {
        BusinessSubmission saved = providerService.registerPractice(requestDto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Practice registration received and queued for clinical verification (PENDING_REVIEW)", saved));
    }

    /**
     * Get all practice submissions
     * GET /api/practices
     */
    @GetMapping("/practices")
    public ResponseEntity<ApiResponse<List<BusinessSubmission>>> getPractices() {
        List<BusinessSubmission> list = providerService.getAllSubmissions();
        return ResponseEntity.ok(ApiResponse.ok("Practices retrieved", list));
    }
}

