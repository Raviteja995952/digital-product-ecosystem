package com.ecosystem.academy.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "academy_programmes")
public class AcademyProgramme {

    @Id
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private String duration;

    @Column(nullable = false)
    private String effort;

    @Column(nullable = false)
    private String format;

    @Column(nullable = false)
    private String level;

    @Column(nullable = false)
    private String tuition;

    @Column(length = 500)
    private String tagline;

    @Column(name = "accent_color")
    private String accentColor;

    @Column(columnDefinition = "TEXT")
    private String overview;

    @Column(name = "core_stack", length = 500)
    private String coreStack;

    @Column(name = "capstone_brief", columnDefinition = "TEXT")
    private String capstoneBrief;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public AcademyProgramme() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public String getEffort() { return effort; }
    public void setEffort(String effort) { this.effort = effort; }

    public String getFormat() { return format; }
    public void setFormat(String format) { this.format = format; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }

    public String getTuition() { return tuition; }
    public void setTuition(String tuition) { this.tuition = tuition; }

    public String getTagline() { return tagline; }
    public void setTagline(String tagline) { this.tagline = tagline; }

    public String getAccentColor() { return accentColor; }
    public void setAccentColor(String accentColor) { this.accentColor = accentColor; }

    public String getOverview() { return overview; }
    public void setOverview(String overview) { this.overview = overview; }

    public String getCoreStack() { return coreStack; }
    public void setCoreStack(String coreStack) { this.coreStack = coreStack; }

    public String getCapstoneBrief() { return capstoneBrief; }
    public void setCapstoneBrief(String capstoneBrief) { this.capstoneBrief = capstoneBrief; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}

