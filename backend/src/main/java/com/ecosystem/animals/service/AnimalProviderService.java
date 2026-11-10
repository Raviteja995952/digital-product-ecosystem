package com.ecosystem.animals.service;

import com.ecosystem.animals.dto.CorrectionRequestDto;
import com.ecosystem.animals.dto.PracticeRegistrationDto;
import com.ecosystem.animals.entity.AnimalProvider;
import com.ecosystem.animals.entity.BusinessSubmission;
import com.ecosystem.animals.entity.ListingCorrection;
import com.ecosystem.animals.repository.AnimalProviderRepository;
import com.ecosystem.animals.repository.BusinessSubmissionRepository;
import com.ecosystem.animals.repository.ListingCorrectionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
@Transactional
public class AnimalProviderService {

    private final AnimalProviderRepository providerRepository;
    private final BusinessSubmissionRepository submissionRepository;
    private final ListingCorrectionRepository correctionRepository;
    private final Random random = new Random();

    public AnimalProviderService(
            AnimalProviderRepository providerRepository,
            BusinessSubmissionRepository submissionRepository,
            ListingCorrectionRepository correctionRepository
    ) {
        this.providerRepository = providerRepository;
        this.submissionRepository = submissionRepository;
        this.correctionRepository = correctionRepository;
    }

    @Transactional(readOnly = true)
    public List<AnimalProvider> getAllProviders() {
        return providerRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<AnimalProvider> getProviderById(Long id) {
        return providerRepository.findById(id);
    }

    @Transactional(readOnly = true)
    public List<AnimalProvider> searchProviders(String city, String service, Boolean emergencyOnly, Double minRating) {
        String filterCity = (city != null && !city.equalsIgnoreCase("All Cities") && !city.trim().isEmpty()) ? city.trim().toLowerCase() : null;
        String filterService = (service != null && !service.equalsIgnoreCase("ALL") && !service.trim().isEmpty()) ? service.trim() : null;
        boolean isEmergency = Boolean.TRUE.equals(emergencyOnly);

        List<AnimalProvider> all = providerRepository.findAll();
        List<AnimalProvider> result = new java.util.ArrayList<>();
        for (AnimalProvider p : all) {
            if (filterCity != null && !p.getCity().toLowerCase().contains(filterCity)) {
                continue;
            }
            if (filterService != null && !p.getProviderType().equalsIgnoreCase(filterService)) {
                continue;
            }
            if (isEmergency && !Boolean.TRUE.equals(p.getIsEmergency())) {
                continue;
            }
            if (minRating != null && (p.getRating() == null || p.getRating() < minRating)) {
                continue;
            }
            result.add(p);
        }
        return result;
    }

    public ListingCorrection createCorrection(CorrectionRequestDto dto) {
        ListingCorrection correction = new ListingCorrection();
        correction.setProviderName(dto.getProviderName());
        correction.setCorrectionType(dto.getCorrectionType());
        correction.setCorrectInformation(dto.getCorrectInformation());
        correction.setUserEmail(dto.getUserEmail());
        correction.setAdditionalDetails(dto.getAdditionalDetails());
        correction.setStatus("PENDING_REVIEW");

        String refCode = "CORR-" + (10000 + random.nextInt(90000));
        correction.setReferenceCode(refCode);

        return correctionRepository.save(correction);
    }

    public BusinessSubmission registerPractice(PracticeRegistrationDto dto) {
        BusinessSubmission submission = new BusinessSubmission();
        submission.setPracticeName(dto.getPracticeName());
        submission.setContactPerson(dto.getContactPerson());
        submission.setBusinessCategory(dto.getBusinessCategory());
        submission.setPhoneNumber(dto.getPhoneNumber());
        submission.setEmailAddress(dto.getEmailAddress());
        submission.setAddress(dto.getAddress());
        submission.setCity(dto.getCity());
        submission.setPinCode(dto.getPinCode());

        if (dto.getServices() != null && !dto.getServices().isEmpty()) {
            submission.setServicesOffered(String.join(", ", dto.getServices()));
        } else {
            submission.setServicesOffered("General Practice");
        }

        submission.setOpeningHours(dto.getOpeningHours());
        submission.setWebsiteUrl(dto.getWebsiteUrl());
        submission.setDescription(dto.getDescription());
        submission.setAuditStatus("PENDING_REVIEW");

        String refCode = "PRAC-" + (10000 + random.nextInt(90000));
        submission.setReferenceCode(refCode);

        return submissionRepository.save(submission);
    }

    public BusinessSubmission submitBusiness(BusinessSubmission submission) {
        if (submission.getAuditStatus() == null) {
            submission.setAuditStatus("PENDING_REVIEW");
        }
        if (submission.getReferenceCode() == null) {
            submission.setReferenceCode("PRAC-" + (10000 + random.nextInt(90000)));
        }
        return submissionRepository.save(submission);
    }

    public ListingCorrection submitCorrection(ListingCorrection correction) {
        if (correction.getStatus() == null) {
            correction.setStatus("PENDING_REVIEW");
        }
        if (correction.getReferenceCode() == null) {
            correction.setReferenceCode("CORR-" + (10000 + random.nextInt(90000)));
        }
        return correctionRepository.save(correction);
    }

    @Transactional(readOnly = true)
    public List<BusinessSubmission> getAllSubmissions() {
        return submissionRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<ListingCorrection> getAllCorrections() {
        return correctionRepository.findAll();
    }
}
