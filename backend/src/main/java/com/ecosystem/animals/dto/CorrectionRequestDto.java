package com.ecosystem.animals.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class CorrectionRequestDto {

    @NotBlank(message = "Provider or clinic name is required")
    private String providerName;

    @NotBlank(message = "Type of correction is required")
    private String correctionType;

    @NotBlank(message = "Correct information is required")
    private String correctInformation;

    @NotBlank(message = "Email address is required")
    @Email(message = "A valid email address is required")
    private String userEmail;

    private String additionalDetails;

    public CorrectionRequestDto() {}

    public CorrectionRequestDto(String providerName, String correctionType, String correctInformation, String userEmail, String additionalDetails) {
        this.providerName = providerName;
        this.correctionType = correctionType;
        this.correctInformation = correctInformation;
        this.userEmail = userEmail;
        this.additionalDetails = additionalDetails;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getCorrectionType() {
        return correctionType;
    }

    public void setCorrectionType(String correctionType) {
        this.correctionType = correctionType;
    }

    public String getCorrectInformation() {
        return correctInformation;
    }

    public void setCorrectInformation(String correctInformation) {
        this.correctInformation = correctInformation;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getAdditionalDetails() {
        return additionalDetails;
    }

    public void setAdditionalDetails(String additionalDetails) {
        this.additionalDetails = additionalDetails;
    }
}

