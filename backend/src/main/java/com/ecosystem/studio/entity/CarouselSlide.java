package com.ecosystem.studio.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
@Table(name = "carousel_slides")
public class CarouselSlide {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    @JsonIgnore
    private StudioProject project;

    @Column(name = "slide_number", nullable = false)
    private Integer slideNumber;

    @Column(name = "slide_type", nullable = false)
    private String slideType;

    private String tag;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String headline;

    @Column(name = "body_text", nullable = false, columnDefinition = "TEXT")
    private String bodyText;

    @Column(name = "visual_note", columnDefinition = "TEXT")
    private String visualNote;

    public CarouselSlide() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public StudioProject getProject() { return project; }
    public void setProject(StudioProject project) { this.project = project; }

    public Integer getSlideNumber() { return slideNumber; }
    public void setSlideNumber(Integer slideNumber) { this.slideNumber = slideNumber; }

    public String getSlideType() { return slideType; }
    public void setSlideType(String slideType) { this.slideType = slideType; }

    public String getTag() { return tag; }
    public void setTag(String tag) { this.tag = tag; }

    public String getHeadline() { return headline; }
    public void setHeadline(String headline) { this.headline = headline; }

    public String getBodyText() { return bodyText; }
    public void setBodyText(String bodyText) { this.bodyText = bodyText; }

    public String getVisualNote() { return visualNote; }
    public void setVisualNote(String visualNote) { this.visualNote = visualNote; }
}

