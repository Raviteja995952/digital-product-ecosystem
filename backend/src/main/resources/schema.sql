-- ==========================================================================
-- ENTERPRISE DIGITAL PRODUCT ECOSYSTEM: PERSISTENCE DDL SCHEMA
-- Compatible with MySQL 8.x and H2 (MySQL Mode)
-- ==========================================================================

-- DOMAIN 1: PRACTO FOR ANIMALS (FAUNACARE)
CREATE TABLE IF NOT EXISTS animal_providers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    provider_type VARCHAR(50) NOT NULL,
    type_name VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    neighborhood VARCHAR(150),
    address VARCHAR(500) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    emergency_phone VARCHAR(50),
    operating_hours VARCHAR(100) NOT NULL,
    is_open_now BOOLEAN DEFAULT TRUE,
    is_emergency BOOLEAN DEFAULT FALSE,
    rating DOUBLE DEFAULT 5.0,
    review_count INT DEFAULT 0,
    distance_km DOUBLE DEFAULT 1.0,
    verified BOOLEAN DEFAULT TRUE,
    license_id VARCHAR(100),
    lead_doctor VARCHAR(255),
    consultation_fee VARCHAR(100),
    emergency_fee VARCHAR(100),
    image_url VARCHAR(1000),
    services_offered TEXT,
    about_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS business_submissions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    practice_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    business_category VARCHAR(100) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    address VARCHAR(500) NOT NULL,
    city VARCHAR(100) NOT NULL,
    pin_code VARCHAR(50),
    services_offered TEXT,
    opening_hours VARCHAR(150),
    website_url VARCHAR(255),
    description TEXT,
    license_number VARCHAR(100) DEFAULT 'PENDING-VERIFICATION',
    audit_status VARCHAR(50) DEFAULT 'PENDING_REVIEW',
    reference_code VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS listing_corrections (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    provider_name VARCHAR(255) NOT NULL,
    correction_type VARCHAR(100) NOT NULL,
    correct_information TEXT NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    additional_details TEXT,
    reference_code VARCHAR(50),
    status VARCHAR(50) DEFAULT 'PENDING_REVIEW',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DOMAIN 2: AI EDUCATION PLATFORM (APEX ACADEMY)
CREATE TABLE IF NOT EXISTS academy_programmes (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    effort VARCHAR(50) NOT NULL,
    format VARCHAR(100) NOT NULL,
    level VARCHAR(50) NOT NULL,
    tuition VARCHAR(50) NOT NULL,
    tagline VARCHAR(500),
    accent_color VARCHAR(20),
    overview TEXT,
    core_stack VARCHAR(500),
    capstone_brief TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS student_leads (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    programme_id VARCHAR(50) NOT NULL,
    experience_level VARCHAR(50),
    professional_role VARCHAR(255),
    learning_goal TEXT,
    status VARCHAR(50) DEFAULT 'NEW',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DOMAIN 3: AI CONTENT STUDIO (FOUNDERFORGE)
CREATE TABLE IF NOT EXISTS studio_projects (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    platform VARCHAR(50) NOT NULL,
    slide_count INT NOT NULL,
    tone VARCHAR(50) NOT NULL,
    theme_id VARCHAR(50) DEFAULT 'monochrome',
    author_handle VARCHAR(100) DEFAULT '@founder',
    status VARCHAR(50) DEFAULT 'READY',
    raw_idea TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS carousel_slides (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    project_id VARCHAR(50) NOT NULL,
    slide_number INT NOT NULL,
    slide_type VARCHAR(50) NOT NULL,
    tag VARCHAR(100),
    headline TEXT NOT NULL,
    body_text TEXT NOT NULL,
    visual_note TEXT,
    FOREIGN KEY (project_id) REFERENCES studio_projects(id) ON DELETE CASCADE
);
