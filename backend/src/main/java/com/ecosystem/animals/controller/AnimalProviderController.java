package com.ecosystem.animals.controller;

import com.ecosystem.animals.entity.AnimalProvider;
import com.ecosystem.animals.entity.BusinessSubmission;
import com.ecosystem.animals.entity.ListingCorrection;
import com.ecosystem.animals.service.AnimalProviderService;
import com.ecosystem.common.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animals")
public class AnimalProviderController {

    private final AnimalProviderService providerService;

    public AnimalProviderController(AnimalProviderService providerService) {
        this.providerService = providerService;
    }

    @GetMapping("/providers")
    public ResponseEntity<ApiResponse<List<AnimalProvider>>> getProviders(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String service,
            @RequestParam(required = false, defaultValue = "false") Boolean emergencyOnly,
            @RequestParam(required = false) Double minRating
    ) {
        List<AnimalProvider> list = providerService.searchProviders(city, service, emergencyOnly, minRating);
        return ResponseEntity.ok(ApiResponse.ok("Providers retrieved successfully", list));
    }

    @GetMapping("/providers/{id}")
    public ResponseEntity<ApiResponse<AnimalProvider>> getProviderById(@PathVariable Long id) {
        return providerService.getProviderById(id)
                .map(p -> ResponseEntity.ok(ApiResponse.ok("Provider found", p)))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Provider not found with ID: " + id)));
    }

    @PostMapping("/submissions")
    public ResponseEntity<ApiResponse<BusinessSubmission>> submitBusiness(@RequestBody BusinessSubmission submission) {
        BusinessSubmission saved = providerService.submitBusiness(submission);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Clinic submitted for verification audit", saved));
    }

    @PostMapping("/corrections")
    public ResponseEntity<ApiResponse<ListingCorrection>> submitCorrection(@RequestBody ListingCorrection correction) {
        ListingCorrection saved = providerService.submitCorrection(correction);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Correction received for data verification", saved));
    }
}

