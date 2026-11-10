package com.ecosystem.animals.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "business_submissions")
public class BusinessSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "practice_name", nullable = false)
    private String practiceName;

    @Column(name = "contact_person", nullable = false)
    private String contactPerson;

    @Column(name = "business_category", nullable = false)
    private String businessCategory;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "email_address", nullable = false)
    private String emailAddress;

    @Column(nullable = false, length = 500)
    private String address;

    @Column(nullable = false)
    private String city;

    @Column(name = "pin_code")
    private String pinCode;

    @Column(name = "services_offered", columnDefinition = "TEXT")
    private String servicesOffered;

    @Column(name = "opening_hours")
    private String openingHours;

    @Column(name = "website_url")
    private String websiteUrl;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "license_number")
    private String licenseNumber = "PENDING-VERIFICATION";

    @Column(name = "audit_status")
    private String auditStatus = "PENDING_REVIEW";

    @Column(name = "reference_code")
    private String referenceCode;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public BusinessSubmission() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPracticeName() { return practiceName; }
    public void setPracticeName(String practiceName) { this.practiceName = practiceName; }

    // Compatibility alias
    public String getBusinessName() { return practiceName; }
    public void setBusinessName(String businessName) { this.practiceName = businessName; }

    public String getContactPerson() { return contactPerson; }
    public void setContactPerson(String contactPerson) { this.contactPerson = contactPerson; }

    public String getBusinessCategory() { return businessCategory; }
    public void setBusinessCategory(String businessCategory) { this.businessCategory = businessCategory; }

    // Compatibility alias
    public String getProviderType() { return businessCategory; }
    public void setProviderType(String providerType) { this.businessCategory = providerType; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    // Compatibility alias
    public String getPhone() { return phoneNumber; }
    public void setPhone(String phone) { this.phoneNumber = phone; }

    public String getEmailAddress() { return emailAddress; }
    public void setEmailAddress(String emailAddress) { this.emailAddress = emailAddress; }

    // Compatibility alias
    public String getEmail() { return emailAddress; }
    public void setEmail(String email) { this.emailAddress = email; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getPinCode() { return pinCode; }
    public void setPinCode(String pinCode) { this.pinCode = pinCode; }

    public String getServicesOffered() { return servicesOffered; }
    public void setServicesOffered(String servicesOffered) { this.servicesOffered = servicesOffered; }

    public String getOpeningHours() { return openingHours; }
    public void setOpeningHours(String openingHours) { this.openingHours = openingHours; }

    // Compatibility alias
    public String getOperatingHours() { return openingHours; }
    public void setOperatingHours(String operatingHours) { this.openingHours = operatingHours; }

    public String getWebsiteUrl() { return websiteUrl; }
    public void setWebsiteUrl(String websiteUrl) { this.websiteUrl = websiteUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    // Compatibility alias
    public String getNotes() { return description; }
    public void setNotes(String notes) { this.description = notes; }

    public String getLicenseNumber() { return licenseNumber; }
    public void setLicenseNumber(String licenseNumber) { this.licenseNumber = licenseNumber; }

    public String getAuditStatus() { return auditStatus; }
    public void setAuditStatus(String auditStatus) { this.auditStatus = auditStatus; }

    public String getReferenceCode() { return referenceCode; }
    public void setReferenceCode(String referenceCode) { this.referenceCode = referenceCode; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
