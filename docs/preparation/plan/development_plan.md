Okay, here is a possible vertically-sliced development plan for MuseVision, assuming a single developer working 1 hour per day, 5 days per week as a side project. This plan prioritizes getting a core, usable slice of functionality working first and then iteratively adding features. Each week focuses on a specific user story.

**Guiding Principles:**

*   **Time Commitment:** 5 days per week, 1 hour per day (5 hours total per week).
*   **Vertical Slices:** Each week aims to deliver a small, end-to-end piece of user value.
*   **MVP First:** Focus on the absolute core: loading a score, displaying it in both formats, and basic synchronized playback.
*   **Incremental Complexity:** Start with the simplest implementations (e.g., MusicXML import before complex PDF/Image OCR) and build up.
*   **Realistic Pace:** 5 hours/week means progress is measured and steady, not rapid. Complex features will span multiple weeks.

---

**Phase 1: Core Score Viewing & Playback (Weeks 1-6)**

**Week 1: Project Setup & Basic Layout**

*   **User Story:** As a developer, I want the basic project structure and dependencies set up for both frontend and backend so that I can start implementing features.
*   **Acceptance Criteria:**
    - [x] Git repository initialized.
    - [x] Frontend (React/TS) project created with basic dependencies (React, TS, Tailwind).
    - [x] Backend (FastAPI) project created with basic dependencies (FastAPI, Uvicorn).
    - [x] Basic `frontend` and `backend` directories exist.
    - [x] A simple "Hello World" or placeholder UI runs for both frontend and backend.
*   **Daily Tasks:**
    - [x] Day 1: Initialize Git repo, create root `frontend` and `backend` folders.
    - [x] Day 2: Set up React/TS project (`npx create-react-app frontend --template typescript` or Vite equivalent). Install Tailwind.
    - [x] Day 3: Set up basic FastAPI project structure (`main.py`, `requirements.txt`).
    - [x] Day 4: Create placeholder components for the main app layout (e.g., Header, ScoreViewPane1, ScoreViewPane2, Controls).
    - [x] Day 5: Basic CSS/Tailwind to establish the split-view layout visually using the color palette (Primary: #3B82F6, Secondary: #10B981, Neutral: #1F2937, Light: #F9FAFB).

**Week 2: Basic MusicXML Loading & Traditional Notation Display**

*   **User Story:** As a user, I want to load a predefined MusicXML file into the app so that I can see its traditional music notation displayed.
*   **Acceptance Criteria:**
    - [ ] A hardcoded/sample MusicXML file's data is loaded on the frontend.
    - [ ] The traditional notation section of the UI renders the score using VexFlow.
    - [ ] Basic rendering shows notes and measures correctly.
    - [ ] ESLint and Prettier set up for code quality enforcement.
    - [ ] Typography implemented using Inter (primary) and Roboto Mono (for musicological labels) with base 16px.
*   **Daily Tasks (5 days, 1 hour per day):**
    - [ ] Day 1: Research VexFlow basics and integration with React. Install VexFlow. Configure ESLint and Prettier for code quality.
    - [ ] Day 2: Create a component dedicated to rendering traditional notation (`TraditionalView.tsx`). Set up convenience scripts in package.json.
    - [ ] Day 3: Find/create a simple MusicXML sample file. Write basic frontend logic to fetch/load its content (initially can be just importing the file).
    - [ ] Day 4: Implement basic VexFlow rendering logic within `TraditionalView.tsx` to draw notes from the loaded data.
    - [ ] Day 5: Refine VexFlow rendering for measures and basic clefs/time signatures based on the sample. Add typography implementation (Inter and Roboto Mono fonts).
    - [ ] Buffer: If needed, allocate time from the following week to resolve configuration challenges with VexFlow.

**Week 3: Basic Piano Roll Display**

*   **User Story:** As a user, I want to see a piano roll representation of the loaded MusicXML file alongside the traditional notation so that I can visualize the music structure differently.
*   **Acceptance Criteria:**
    - [ ] The piano roll section of the UI renders a representation of the score.
    - [ ] Notes are displayed as rectangles, positioned according to pitch (vertically) and time (horizontally).
    - [ ] The rendering is based on the same loaded MusicXML data.
    - [ ] Basic error handling for failed rendering is implemented.
    - [ ] **Vertical time progression** is implemented as specified in the context document.
*   **Daily Tasks (5 days, 1 hour per day):**
    - [ ] Day 1: Design the data structure needed to represent notes for the piano roll (pitch, start time, duration).
    - [ ] Day 2: Create a `PianoRollView.tsx` component using HTML Canvas. Add basic error boundaries for this component.
    - [ ] Day 3: Write logic to parse the loaded MusicXML data into the piano roll data structure.
    - [ ] Day 4: Implement basic Canvas drawing logic to render note rectangles based on the data structure, ensuring time flows vertically down the canvas.
    - [ ] Day 5: Add basic axes/lines to the canvas for pitch and time orientation.
    - [ ] Buffer: If needed, allocate time from the following week to resolve canvas-related issues.

**Week 4: Basic Playback Engine & Synchronization (Traditional View)**

*   **User Story:** As a user, I want to press a 'Play' button and hear the loaded score played back while seeing the current note highlighted in the traditional notation view.
*   **Acceptance Criteria:**
    - [ ] A basic Play/Pause button exists.
    - [ ] Clicking Play starts audio playback of the score using Tone.js.
    - [ ] The currently playing note is visually highlighted (e.g., changes color) in the VexFlow (traditional) view.
    - [ ] Playback is synchronized with the highlighting.
    - [ ] Basic error handling for audio playback is implemented.
*   **Daily Tasks (5 days, 1 hour per day):**
    - [ ] Day 1: Install Tone.js. Set up basic audio context and synth. Pin the specific version to avoid dependency issues.
    - [ ] Day 2: Create basic playback control components (Play/Pause buttons) and state management (e.g., `isPlaying`).
    - [ ] Day 3: Write logic to schedule notes from the MusicXML data using `Tone.Transport`.
    - [ ] Day 4: Implement callback logic with `Tone.Draw` or similar to update the application state with the currently playing note/time.
    - [ ] Day 5: Connect the playback state to the `TraditionalView.tsx` component to highlight the corresponding VexFlow element.
    - [ ] Buffer: Set up basic unit testing for frontend components in the following week.

**Week 5: Synchronize Piano Roll View**

*   **User Story:** As a user, during playback, I want to see the current position or playing notes highlighted in the piano roll view, synchronized with the audio and traditional view.
*   **Acceptance Criteria:**
    - [ ] A visual indicator (e.g., a horizontal line moving down, or highlighting notes as they are played) appears on the piano roll view during playback.
    - [ ] The piano roll indicator is synchronized with the audio and the highlighting in the traditional view.
    - [ ] API contracts between components are clearly documented.
*   **Daily Tasks (5 days, 1 hour per day):**
    - [ ] Day 1: Plan the synchronization mechanism for the canvas (e.g., redrawing with a progress line, changing note colors).
    - [ ] Day 2: Connect the playback state/time callback from Tone.js to the `PianoRollView.tsx` component.
    - [ ] Day 3: Implement the drawing logic for the playback indicator on the canvas.
    - [ ] Day 4: Test and refine synchronization between audio, traditional view, and piano roll view.
    - [ ] Day 5: Add basic Stop/Rewind functionality to the playback controls and document API contracts between components.
    - [ ] Buffer: Implement additional tests in the following week.

**Week 6: Basic Controls - Tempo & File Input**

*   **User Story:** As a user, I want to load my own MusicXML file and control the playback tempo so I can practice effectively.
*   **Acceptance Criteria:**
    - [ ] A file input button allows users to select a local MusicXML file.
    - [ ] The selected file is loaded, parsed, and displayed in both views.
    - [ ] A tempo control (e.g., slider or input field) allows adjusting the playback speed.
    - [ ] Changing the tempo affects the actual playback speed and visual synchronization.
    - [ ] Robust error handling for invalid file inputs is implemented.
*   **Daily Tasks (5 days, 1 hour per day):**
    - [ ] Day 1: Implement a file input component (`<input type="file">`) and handler with proper error boundaries.
    - [ ] Day 2: Add frontend logic to read the selected MusicXML file content.
    - [ ] Day 3: Refactor the score loading logic to handle user-provided files instead of hardcoded ones. Add robust error handling for invalid files.
    - [ ] Day 4: Implement a tempo control UI element and connect its state.
    - [ ] Day 5: Connect the tempo state to `Tone.Transport.bpm` to control playback speed. Test thoroughly.

**Week 6.5: Technical Debt Week**

*   **User Story:** As a developer, I want to address accumulated technical debt and ensure code quality before moving to Phase 2.
*   **Acceptance Criteria:**
    - [ ] Code consistency and quality issues identified in Weeks 1-6 are addressed.
    - [ ] Test coverage for critical components is increased.
    - [ ] Documentation is updated to reflect current implementation.
    - [ ] Environment-specific issues are resolved.
*   **Daily Tasks (5 days, 1 hour per day):**
    - [ ] Day 1: Conduct code review and identify technical debt issues (based on Week 1 lessons about configuration).
    - [ ] Day 2: Refactor code to address identified issues, focusing on maintaining ES module consistency.
    - [ ] Day 3: Continue refactoring, focusing on proper error handling, and code style.
    - [ ] Day 4: Enhance tests for critical components.
    - [ ] Day 5: Update documentation and verify that environment-specific configurations work properly.

---

**Phase 2: Enhancing Visualization & Core Practice Tools (Weeks 7-12+)**

**(Note: Timelines become more approximate here, complexity increases)**

**Week 7: Piano Keyboard Visualization**

*   **User Story:** As a user, I want to see a visual piano keyboard aligned with the piano roll view, with keys highlighted during playback, so I can better understand the notes being played.
*   **Acceptance Criteria:**
    - [ ] A static piano keyboard UI is displayed adjacent to the piano roll.
    - [ ] Keys on the keyboard highlight in sync with the notes being played during playback.
    - [ ] Keyboard visualization follows the UI color scheme defined in the context document.
*   **Daily Tasks (5 days, 1 hour per day):**
    - [ ] Day 1: Design the static piano keyboard component layout and structure.
    - [ ] Day 2: Implement the piano keyboard component (HTML/CSS/SVG) using the project's color palette.
    - [ ] Day 3: Begin connecting playback state to the keyboard component.
    - [ ] Day 4: Complete the playback-keyboard synchronization.
    - [ ] Day 5: Test and refine the keyboard highlighting functionality.
    - [ ] Buffer: Extend to the following week if the task requires more time.

**Week 8: Note Coloring & Basic Customization**

*   **User Story:** As a user, I want notes to be color-coded in both views so that I can visually distinguish them easily (e.g., for different hands or voices, initially just alternating).
*   **Acceptance Criteria:**
    - [ ] Notes in the traditional view are rendered with alternating specified colors exactly as defined in the context: #60A5FA (Blue) and #34D399 (Green).
    - [ ] Notes in the piano roll view use the corresponding colors.
    - [ ] Colors are consistently applied across the application.
*   **Daily Tasks:**
    - [ ] Day 1-2: Modify VexFlow rendering logic to apply specified colors (#60A5FA for blue notes, #34D399 for green notes).
    - [ ] Day 3-4: Modify Piano Roll canvas drawing logic to apply the same specified colors.
    - [ ] Day 5: Add a simple settings toggle/option (state only for now) to enable/disable coloring.

**Week 9: Section Looping**

*   **User Story:** As a user, I want to select a start and end point in the score and loop playback between these points so I can focus on practicing specific sections.
*   **Acceptance Criteria:**
    - [ ] UI elements exist to mark loop start/end points (e.g., clicking on measures).
    - [ ] A 'Loop' toggle button enables/disables looping mode.
    - [ ] When enabled, playback repeats between the marked points.
*   **Daily Tasks:** (Likely > 1 week)
    - [ ] Days 1-2: Implement UI logic for selecting start/end measures/times.
    - [ ] Days 3-5+: Integrate loop points with `Tone.Transport` scheduling (e.g., using `Transport.setLoopPoints`, `Transport.loop = true`).

**Week 10: Basic Backend Setup & Score Persistence**

*   **User Story:** As a user, I want the app to remember the last score I loaded so that I don't have to reload it every time I open the app (using simple backend storage).
*   **Acceptance Criteria:**
    - [ ] Basic FastAPI backend setup with an endpoint to store/retrieve score data (e.g., MusicXML content).
    - [ ] Simple database setup (e.g., SQLite locally first, or basic Azure Cosmos DB if feeling ambitious).
    - [ ] Frontend sends the loaded MusicXML to the backend for storage (e.g., associating with a hardcoded user ID initially).
    - [ ] On app load, the frontend fetches and displays the last stored score from the backend.
*   **Daily Tasks:** (Likely > 1 week)
    - [ ] Day 1: Define basic data model for storing a score (ID, name, content).
    - [ ] Day 2: Set up basic DB connection in FastAPI (e.g., SQLAlchemy with SQLite).
    - [ ] Day 3: Create FastAPI endpoints (e.g., `POST /scores`, `GET /scores/latest`).
    - [ ] Day 4: Implement frontend logic (`fetch` calls) to interact with the new endpoints.
    - [ ] Day 5: Test end-to-end saving and loading.

**Weeks 11-12+:** Continue building features incrementally:
*   **Score Library:**
    - [ ] Expand backend/frontend for multiple scores, basic list view, selection.
*   **Metronome:**
    - [ ] Integrate a Tone.js metronome sound during playback.
*   **Bookmarking:**
    - [ ] Allow users to mark specific points (similar to looping but just markers).
*   **Basic PDF Import (Proof of Concept):** *This is a major step.*
    *   **User Story:** As a user, I want to upload a simple PDF score, have the system attempt to recognize the notation, and display it, so I can work with PDF files.
    *   **Acceptance Criteria:**
        - [ ] Uploading a *very simple*, clear PDF results in *some* recognized MusicXML/internal format data being displayed, even if imperfectly.
    *   **Tasks:** Requires significant work:
        - [ ] Frontend upload
        - [ ] Backend storage
        - [ ] Calling an external OCR/OMR service (like Azure Cognitive Services Forms Recognizer/Custom Vision, or exploring open-source options)
        - [ ] Parsing the service's output
        - [ ] Converting to internal format/MusicXML
        - [ ] Displaying recognized notation
        
        This will likely take *multiple weeks*. Start with just sending the PDF to the backend and maybe logging the results from a test call to an AI service.

---

**Phase 3: Advanced Features (Future Development)**

Based on the context document, these additional features will be prioritized after completing Phase 2:

1. **Authentication System** (mentioned in context as a requirement)
   - User accounts with roles (Student/Teacher)
   - Social login integration (Google, Apple)
   - Guest user access with limited functionality
   - Technical implementation: Azure AD B2C as specified in the context

2. **Complete Score Management**
   - Expand PDF and image import capabilities
   - Implement library organization with tags and search
   - Azure Blob Storage for scores as specified in the context

3. **Advanced Practice Tools**
   - Score annotation
   - Practice session recording
   - Performance feedback (with MIDI keyboard)
   - Progress tracking

4. **Sharing and Collaboration**
   - Share annotated scores
   - Teacher-student score sharing
   - Export practice recordings
   - WebSocket implementation for collaborative features as specified in the context

The development phases have been organized to align with the user flow described in the context document:
1. Phase 1 (Weeks 1-6): Core score viewing and playback
2. Phase 2 (Weeks 7-12+): Enhanced visualization and practice tools
3. Phase 3: Authentication, score management, collaboration

This ensures that we're building the application in a way that supports the intended user flow while maintaining our vertical slice approach.

## Plan Adjustments Based on Week 1 Lessons Learned

After completing Week 1, we've identified several areas for improvement in our development process:

1. **Configuration Management:**
   - Ensure consistent use of ES modules vs. CommonJS across the project.
   - Pin specific versions of key dependencies to avoid breaking changes.
   - Document environment-specific configurations clearly.

2. **Development Workflow Enhancements:**
   - **Week 2 Addition**: Set up ESLint and Prettier for code quality enforcement.
   - **Week 2-3 Addition**: Create development convenience scripts in package.json for common operations.
   - Continue using checkboxes in the development plan for clear progress tracking.

2. **Error Handling Strategy:**
   - **Week 3-4 Addition**: Implement error boundaries in React components.
   - **Week 3-4 Addition**: Add robust exception handling in FastAPI endpoints.
   - Follow the established error diagnosis procedure (console checking, version verification, etc.).

3. **Testing Framework:**
   - **Week 4-5 Addition**: Set up basic unit testing framework for frontend components.
   - **Week 4-5 Addition**: Implement API endpoint testing for the backend.

4. **Documentation:**
   - **Continuous Task**: Define clear API contracts between frontend and backend before implementation.
   - Maintain clear documentation of configuration choices and architectural decisions.

5. **Time Management:**
   - Maintain the 5-day week, 1-hour per day schedule.
   - Use buffer periods for complex tasks that may exceed the allocated time.
   - Regularly reassess task estimates based on actual performance.

### Technical Stack Alignment

The development plan will continue to use the technologies specified in the context:
- Frontend: React with TypeScript, Tailwind CSS, VexFlow, Canvas, Tone.js
- Backend: Python FastAPI
- Database: We'll initially use SQLite locally as specified in Week 10, with a path to Azure Cosmos DB as mentioned in the context

### User Flow Considerations

The development phases have been organized to align with the user flow described in the context document:
1. Phase 1 (Weeks 1-6): Core score viewing and playback
2. Phase 2 (Weeks 7-12+): Enhanced visualization and practice tools
3. Phase 3: Authentication, score management, collaboration

This ensures that we're building the application in a way that supports the intended user flow while maintaining our vertical slice approach. 