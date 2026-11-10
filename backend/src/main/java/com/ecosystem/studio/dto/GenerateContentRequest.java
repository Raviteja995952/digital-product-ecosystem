package com.ecosystem.studio.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class GenerateContentRequest {

    @NotBlank(message = "Raw founder idea or thesis memo cannot be blank")
    private String rawIdea;

    private String platform = "LINKEDIN";

    @NotNull(message = "Slide count is required")
    private Integer slideCount = 7;

    private String tone = "ANALYTICAL";

    private String authorHandle = "@founder";

    public GenerateContentRequest() {}

    public String getRawIdea() { return rawIdea; }
    public void setRawIdea(String rawIdea) { this.rawIdea = rawIdea; }

    public String getPlatform() { return platform; }
    public void setPlatform(String platform) { this.platform = platform; }

    public Integer getSlideCount() { return slideCount; }
    public void setSlideCount(Integer slideCount) { this.slideCount = slideCount; }

    public String getTone() { return tone; }
    public void setTone(String tone) { this.tone = tone; }

    public String getAuthorHandle() { return authorHandle; }
    public void setAuthorHandle(String authorHandle) { this.authorHandle = authorHandle; }
}

