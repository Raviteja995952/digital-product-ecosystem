package com.ecosystem.animals.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "animal_providers")
public class AnimalProvider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "provider_type", nullable = false)
    private String providerType;

    @Column(name = "type_name", nullable = false)
    private String typeName;

    @Column(nullable = false)
    private String city;

    private String neighborhood;

    @Column(nullable = false, length = 500)
    private String address;

    @Column(nullable = false)
    private String phone;

    @Column(name = "emergency_phone")
    private String emergencyPhone;

    @Column(name = "operating_hours", nullable = false)
    private String operatingHours;

    @Column(name = "is_open_now")
    private Boolean isOpenNow = true;

    @Column(name = "is_emergency")
    private Boolean isEmergency = false;

    private Double rating = 5.0;

    @Column(name = "review_count")
    private Integer reviewCount = 0;

    @Column(name = "distance_km")
    private Double distanceKm = 1.0;

    private Boolean verified = true;

    @Column(name = "license_id")
    private String licenseId;

    @Column(name = "lead_doctor")
    private String leadDoctor;

    @Column(name = "consultation_fee")
    private String consultationFee;

    @Column(name = "emergency_fee")
    private String emergencyFee;

    @Column(name = "image_url", length = 1000)
    private String imageUrl;

    @Column(name = "services_offered", columnDefinition = "TEXT")
    private String servicesOffered;

    @Column(name = "about_text", columnDefinition = "TEXT")
    private String aboutText;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public AnimalProvider() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getProviderType() { return providerType; }
    public void setProviderType(String providerType) { this.providerType = providerType; }

    public String getTypeName() { return typeName; }
    public void setTypeName(String typeName) { this.typeName = typeName; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getNeighborhood() { return neighborhood; }
    public void setNeighborhood(String neighborhood) { this.neighborhood = neighborhood; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getEmergencyPhone() { return emergencyPhone; }
    public void setEmergencyPhone(String emergencyPhone) { this.emergencyPhone = emergencyPhone; }

    public String getOperatingHours() { return operatingHours; }
    public void setOperatingHours(String operatingHours) { this.operatingHours = operatingHours; }

    public Boolean getIsOpenNow() { return isOpenNow; }
    public void setIsOpenNow(Boolean isOpenNow) { this.isOpenNow = isOpenNow; }

    public Boolean getIsEmergency() { return isEmergency; }
    public void setIsEmergency(Boolean isEmergency) { this.isEmergency = isEmergency; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public Integer getReviewCount() { return reviewCount; }
    public void setReviewCount(Integer reviewCount) { this.reviewCount = reviewCount; }

    public Double getDistanceKm() { return distanceKm; }
    public void setDistanceKm(Double distanceKm) { this.distanceKm = distanceKm; }

    public Boolean getVerified() { return verified; }
    public void setVerified(Boolean verified) { this.verified = verified; }

    public String getLicenseId() { return licenseId; }
    public void setLicenseId(String licenseId) { this.licenseId = licenseId; }

    public String getLeadDoctor() { return leadDoctor; }
    public void setLeadDoctor(String leadDoctor) { this.leadDoctor = leadDoctor; }

    public String getConsultationFee() { return consultationFee; }
    public void setConsultationFee(String consultationFee) { this.consultationFee = consultationFee; }

    public String getEmergencyFee() { return emergencyFee; }
    public void setEmergencyFee(String emergencyFee) { this.emergencyFee = emergencyFee; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getServicesOffered() { return servicesOffered; }
    public void setServicesOffered(String servicesOffered) { this.servicesOffered = servicesOffered; }

    public String getAboutText() { return aboutText; }
    public void setAboutText(String aboutText) { this.aboutText = aboutText; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
