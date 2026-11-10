package com.ecosystem.studio.entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "studio_projects")
public class StudioProject {

    @Id
    private String id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String platform;

    @Column(name = "slide_count", nullable = false)
    private Integer slideCount;

    @Column(nullable = false)
    private String tone;

    @Column(name = "theme_id")
    private String themeId = "monochrome";

    @Column(name = "author_handle")
    private String authorHandle = "@founder";

    private String status = "READY";

    @Column(name = "raw_idea", columnDefinition = "TEXT")
    private String rawIdea;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<CarouselSlide> slides = new ArrayList<>();

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    public StudioProject() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getPlatform() { return platform; }
    public void setPlatform(String platform) { this.platform = platform; }

    public Integer getSlideCount() { return slideCount; }
    public void setSlideCount(Integer slideCount) { this.slideCount = slideCount; }

    public String getTone() { return tone; }
    public void setTone(String tone) { this.tone = tone; }

    public String getThemeId() { return themeId; }
    public void setThemeId(String themeId) { this.themeId = themeId; }

    public String getAuthorHandle() { return authorHandle; }
    public void setAuthorHandle(String authorHandle) { this.authorHandle = authorHandle; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getRawIdea() { return rawIdea; }
    public void setRawIdea(String rawIdea) { this.rawIdea = rawIdea; }

    public List<CarouselSlide> getSlides() { return slides; }
    public void setSlides(List<CarouselSlide> slides) { this.slides = slides; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}

