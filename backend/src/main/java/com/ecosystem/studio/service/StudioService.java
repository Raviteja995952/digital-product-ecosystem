package com.ecosystem.studio.service;

import com.ecosystem.studio.dto.GenerateContentRequest;
import com.ecosystem.studio.entity.CarouselSlide;
import com.ecosystem.studio.entity.StudioProject;
import com.ecosystem.studio.repository.StudioProjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class StudioService {

    private final StudioProjectRepository projectRepository;

    public StudioService(StudioProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Transactional(readOnly = true)
    public List<StudioProject> getAllProjects() {
        return projectRepository.findAllByOrderByUpdatedAtDesc();
    }

    @Transactional(readOnly = true)
    public Optional<StudioProject> getProjectById(String id) {
        return projectRepository.findById(id);
    }

    public StudioProject generateCarousel(GenerateContentRequest request) {
        StudioProject project = new StudioProject();
        String projectId = "proj-" + UUID.randomUUID().toString().substring(0, 8);
        project.setId(projectId);

        String raw = request.getRawIdea().trim();
        String[] words = raw.split("\\s+");
        StringBuilder titleBuilder = new StringBuilder("The Blueprint for ");
        for (int i = 0; i < Math.min(5, words.length); i++) {
            titleBuilder.append(words[i].replaceAll("[.,!]", "")).append(" ");
        }
        project.setTitle(titleBuilder.toString().trim());
        project.setPlatform(request.getPlatform());
        project.setSlideCount(request.getSlideCount());
        project.setTone(request.getTone());
        project.setAuthorHandle(request.getAuthorHandle());
        project.setRawIdea(request.getRawIdea());
        project.setThemeId("editorial-paper");
        project.setStatus("READY");
        project.setCreatedAt(LocalDateTime.now());
        project.setUpdatedAt(LocalDateTime.now());

        int count = request.getSlideCount() != null ? request.getSlideCount() : 7;
        List<CarouselSlide> slides = new ArrayList<>();

        // Slide 1: Hook
        CarouselSlide s1 = new CarouselSlide();
        s1.setProject(project);
        s1.setSlideNumber(1);
        s1.setSlideType("HOOK");
        s1.setTag(request.getTone() + " PERSPECTIVE");
        s1.setHeadline("Why everything founders believe about \"" + words[0] + "\" is fundamentally upside down.");
        s1.setBodyText("Most leaders optimize for surface metrics. Here is the unvarnished reality behind " + (raw.length() > 80 ? raw.substring(0, 80) : raw) + "...");
        s1.setVisualNote("High contrast editorial serif, generous whitespace, author stamp in top header.");
        slides.add(s1);

        // Slide 2: Problem
        CarouselSlide s2 = new CarouselSlide();
        s2.setProject(project);
        s2.setSlideNumber(2);
        s2.setSlideType("PROBLEM");
        s2.setTag("THE CONVENTIONAL FLAW");
        s2.setHeadline("The hidden cost of continuing with the default industry consensus.");
        s2.setBodyText("When operators accept default assumptions without first-principles testing, they burn 80% of their operational energy on low-yield vanity loops.");
        s2.setVisualNote("Bold metric marker emphasizing compound friction.");
        slides.add(s2);

        // Slide 3: Mechanism
        CarouselSlide s3 = new CarouselSlide();
        s3.setProject(project);
        s3.setSlideNumber(3);
        s3.setSlideType("FRAMEWORK");
        s3.setTag("THE MECHANISM");
        s3.setHeadline("The Core Law: Compounding begins only when variance is eliminated.");
        s3.setBodyText("Decouple your execution from ad-hoc manual heroics. Replace ambiguity with deterministic, measurable feedback thresholds.");
        s3.setVisualNote("Three-part horizontal architecture visual.");
        slides.add(s3);

        // Middle action slides
        int middleSteps = count - 4;
        for (int i = 1; i <= Math.max(middleSteps, 1); i++) {
            CarouselSlide sm = new CarouselSlide();
            sm.setProject(project);
            sm.setSlideNumber(slides.size() + 1);
            sm.setSlideType("ACTION");
            sm.setTag("PILLAR 0" + i);
            sm.setHeadline("Phase " + i + ": Systematize the foundational " + (i == 1 ? "telemetry" : i == 2 ? "thresholds" : "distribution") + ".");
            sm.setBodyText("Track weekly divergence, document error boundaries, and hold operators accountable to clear KPIs.");
            sm.setVisualNote("Tactical checklist card with clean spatial margins.");
            slides.add(sm);
        }

        // Summary Slide
        if (slides.size() < count - 1) {
            CarouselSlide sSum = new CarouselSlide();
            sSum.setProject(project);
            sSum.setSlideNumber(slides.size() + 1);
            sSum.setSlideType("SUMMARY");
            sSum.setTag("THE SUMMARY");
            sSum.setHeadline("The Executive Takeaway in Three Rules:");
            sSum.setBodyText("1. Audit your baseline without defensive pride.\n2. Fix the single bottleneck before secondary levers.\n3. Institutionalize the feedback loop into team rhythm.");
            sSum.setVisualNote("Minimalist numbered manifesto layout with generous line-height.");
            slides.add(sSum);
        }

        // Final CTA Slide
        CarouselSlide sCta = new CarouselSlide();
        sCta.setProject(project);
        sCta.setSlideNumber(count);
        sCta.setSlideType("CTA");
        sCta.setTag("FOUNDER REFLECTION");
        sCta.setHeadline("Great companies are built on durable principles, not transient hype.");
        sCta.setBodyText("Save this carousel for your next strategic planning session. What is your team's approach to this challenge? Let's discuss below.");
        sCta.setVisualNote("Founder stamp signature, bookmark and repost callout.");
        slides.add(sCta);

        project.setSlides(slides);
        return projectRepository.save(project);
    }

    public StudioProject saveProject(StudioProject project) {
        project.setUpdatedAt(LocalDateTime.now());
        return projectRepository.save(project);
    }

    public void deleteProject(String id) {
        projectRepository.deleteById(id);
    }
}

