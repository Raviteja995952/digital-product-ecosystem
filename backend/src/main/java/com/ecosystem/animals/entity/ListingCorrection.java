package com.ecosystem.animals.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "listing_corrections")
public class ListingCorrection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "provider_name", nullable = false)
    private String providerName;

    @Column(name = "correction_type", nullable = false)
    private String correctionType;

    @Column(name = "correct_information", nullable = false, columnDefinition = "TEXT")
    private String correctInformation;

    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Column(name = "additional_details", columnDefinition = "TEXT")
    private String additionalDetails;

    @Column(name = "reference_code")
    private String referenceCode;

    @Column(name = "status")
    private String status = "PENDING_REVIEW";

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public ListingCorrection() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProviderName() { return providerName; }
    public void setProviderName(String providerName) { this.providerName = providerName; }

    // Compatibility alias
    public String getListingName() { return providerName; }
    public void setListingName(String listingName) { this.providerName = listingName; }

    public String getCorrectionType() { return correctionType; }
    public void setCorrectionType(String correctionType) { this.correctionType = correctionType; }

    public String getCorrectInformation() { return correctInformation; }
    public void setCorrectInformation(String correctInformation) { this.correctInformation = correctInformation; }

    // Compatibility alias
    public String getDetails() { return correctInformation; }
    public void setDetails(String details) { this.correctInformation = details; }

    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }

    // Compatibility alias
    public String getSubmitterEmail() { return userEmail; }
    public void setSubmitterEmail(String submitterEmail) { this.userEmail = submitterEmail; }

    public String getAdditionalDetails() { return additionalDetails; }
    public void setAdditionalDetails(String additionalDetails) { this.additionalDetails = additionalDetails; }

    public String getReferenceCode() { return referenceCode; }
    public void setReferenceCode(String referenceCode) { this.referenceCode = referenceCode; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
