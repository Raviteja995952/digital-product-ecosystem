package com.ecosystem.studio.controller;

import com.ecosystem.common.ApiResponse;
import com.ecosystem.studio.dto.GenerateContentRequest;
import com.ecosystem.studio.entity.StudioProject;
import com.ecosystem.studio.service.StudioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/studio")
public class StudioController {

    private final StudioService studioService;

    public StudioController(StudioService studioService) {
        this.studioService = studioService;
    }

    @GetMapping("/projects")
    public ResponseEntity<ApiResponse<List<StudioProject>>> getProjects() {
        List<StudioProject> list = studioService.getAllProjects();
        return ResponseEntity.ok(ApiResponse.ok("Studio projects retrieved", list));
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<ApiResponse<StudioProject>> getProjectById(@PathVariable String id) {
        return studioService.getProjectById(id)
                .map(p -> ResponseEntity.ok(ApiResponse.ok("Project found", p)))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Project not found with ID: " + id)));
    }

    @PostMapping("/generate")
    public ResponseEntity<ApiResponse<StudioProject>> generateCarousel(
            @Valid @RequestBody GenerateContentRequest request
    ) {
        StudioProject project = studioService.generateCarousel(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Carousel generated successfully", project));
    }

    @PostMapping("/projects")
    public ResponseEntity<ApiResponse<StudioProject>> saveProject(@RequestBody StudioProject project) {
        StudioProject saved = studioService.saveProject(project);
        return ResponseEntity.ok(ApiResponse.ok("Project updated", saved));
    }

    @DeleteMapping("/projects/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteProject(@PathVariable String id) {
        studioService.deleteProject(id);
        return ResponseEntity.ok(ApiResponse.ok("Project deleted", null));
    }

    @PostMapping("/export/canva")
    public ResponseEntity<ApiResponse<Map<String, Object>>> exportToCanva(
            @RequestParam String projectId
    ) {
        return studioService.getProjectById(projectId).map(p -> {
            Map<String, Object> canvaPayload = new HashMap<>();
            canvaPayload.put("designTitle", p.getTitle());
            canvaPayload.put("platform", p.getPlatform());
            canvaPayload.put("dimensions", p.getPlatform().equals("LINKEDIN_SQUARE") ? "1080x1080" : "1080x1350");
            canvaPayload.put("slideCount", p.getSlides().size());
            canvaPayload.put("canvaApiStatus", "OAUTH2_SIMULATED_READY");
            canvaPayload.put("webhookUrl", "https://api.canva.com/v1/autofill");
            return ResponseEntity.ok(ApiResponse.ok("Canva export metadata prepared", canvaPayload));
        }).orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ApiResponse.error("Project not found with ID: " + projectId)));
    }
}

