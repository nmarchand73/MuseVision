## 1. Project Breakdown

### App Name
MuseVision

### App Summary
MuseVision is a digital music score reader that uniquely displays both traditional notation and piano roll format simultaneously. The app helps musicians of all levels learn and practice more effectively by providing multiple visual representations of music notation with synchronized playback, tempo control, and visual tracking. Key features include color-coded notes, piano keyboard visualization, and comprehensive practice tools.

### Primary Use Case
Music education, practice, and performance preparation for students, teachers, and musicians at all skill levels.

### Authentication Requirements
- **User Accounts:** Required for saving scores, annotations, and progress tracking
- **Guest Users:** Allowed with limited functionality (basic score viewing)
- **Social Login:** Google, Apple
- **User Roles:** 
  - Student (default)
  - Teacher (additional annotation and sharing capabilities)

## 2. Core Features

1. **Dual Visualization Display**
   - Simultaneous traditional notation and piano roll representation
   - Vertical time progression in piano roll format
   - Synchronized visual tracking during playback

2. **Score Management**
   - Import from PDF, images, and MusicXML files
   - AI-powered notation recognition
   - Library organization with tags and search

3. **Enhanced Visualization**
   - Color-coded notes (blue and green as specified)
   - Piano keyboard visualization with labeled keys
   - Current key signature display
   - Customizable visual elements (colors, sizes)

4. **Playback Controls**
   - Play, pause, stop, rewind
   - Adjustable tempo
   - Section looping
   - Integrated metronome
   - Different instrument sounds

5. **Practice Tools**
   - Bookmarking important sections
   - Score annotation
   - Practice session recording
   - Basic performance feedback (with MIDI keyboard)
   - Progress tracking

6. **Sharing and Collaboration**
   - Share annotated scores
   - Teacher-student score sharing
   - Export practice recordings

## 3. User Flow

1. **Onboarding**
   - User registers or logs in
   - App introduces key features through brief tutorial
   - User selects skill level for personalized experience

2. **Score Import**
   - User imports score from file or selects from library
   - App processes and displays in dual view format
   - User adjusts visualization preferences

3. **Practice Session**
   - User selects score from library
   - Adjusts display settings as needed
   - Sets tempo and practice parameters
   - Engages playback with visual tracking
   - Uses looping and bookmarking for challenging sections
   - Records practice session if desired

4. **Review and Progress**
   - User reviews practice history
   - Views performance feedback
   - Sets goals for next session
   - Shares progress with teacher if applicable

5. **Teacher Interaction** (Teacher Role)
   - Teacher imports and annotates scores
   - Shares with specific students
   - Reviews student practice recordings
   - Provides feedback on progress

## 4. Design and UI/UX

### Visual Design Guidelines
- **Color Palette:**
  - Primary: #3B82F6 (Blue for UI elements and accents)
  - Secondary: #10B981 (Green for secondary accents)
  - Neutral: #1F2937 (Dark for text and backgrounds)
  - Light: #F9FAFB (Light background)
  - Accent colors for notes: #60A5FA (Blue), #34D399 (Green)

- **Typography:**
  - Primary: Inter (clean, readable interface)
  - Secondary: Roboto Mono (for musicological labels)
  - Scale: Base 16px with modular scaling

- **Layout:**
  - Responsive grid system
  - Split view for dual visualization
  - Collapsible panels for tools and settings
  - Tab-based navigation for main sections

### UX Guidelines
- **Simplicity:** Focus on core music reading functionality with minimal distractions
- **Accessibility:** Support for screen readers, keyboard navigation, and customizable colors
- **Responsive:** Adapt to various screen sizes with optimized layouts
- **Feedback:** Clear visual and audio feedback for user actions
- **Progressive Disclosure:** Present advanced features only when needed

## 5. Technical Implementation

### Frontend
- **Framework:** React with TypeScript
- **State Management:** Redux for application state
- **UI Components:** Custom components with Tailwind CSS
- **Music Visualization:** VexFlow for traditional notation, custom Canvas for piano roll
- **Audio Engine:** Web Audio API with Tone.js
- **File Processing:** PDF.js for PDF rendering, custom image processing

### Backend
- **API:** Python FastAPI for backend services
- **AI Services:** Azure Cognitive Services and LlamaIndex for score recognition and processing
- **Database:** Azure Cosmos DB for user data and scores
- **Authentication:** Azure AD B2C
- **Storage:** Azure Blob Storage for scores and recordings
- **Real-time:** WebSocket for collaborative features

### Deployment
- **Infrastructure:** Azure App Service
- **CI/CD:** GitHub Actions for automated testing and deployment
- **Monitoring:** Azure Application Insights
- **Scaling:** Auto-scaling based on load

## 6. Workflow Links and Setup Instructions

### Tools and Resources
- **Code Editor:** VS Code with ESLint, Prettier
- **Version Control:** GitHub (main repository)
- **Design System:** Figma (UI components and screens)
- **API Documentation:** Swagger UI
- **Task Management:** Azure DevOps or GitHub Projects
- **Testing:** Jest for unit tests, Cypress for E2E testing

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/muse-vision.git
   cd muse-vision
   ```

2. Frontend setup:
   ```bash
   cd frontend
   npm install
   # Configure environment variables
   cp .env.example .env.local
   # Start development server
   npm run dev
   ```

3. Backend setup:
   ```bash
   cd backend
   # Create and activate virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   # Install dependencies
   pip install -r requirements.txt
   # Configure environment variables
   cp .env.example .env
   # Start development server
   uvicorn app.main:app --reload
   ```

4. Azure resources setup:
   - Create Azure resource group
   - Set up Azure Cosmos DB
   - Configure Azure Blob Storage
   - Setup Azure AD B2C for authentication
   - Deploy Azure Cognitive Services
   - Configure LlamaIndex

5. Run tests:
   ```bash
   # Frontend tests
   cd frontend
   npm test
   # Backend tests
   cd backend
   pytest
   ```

6. Deploy:
   ```bash
   # Frontend build
   cd frontend
   npm run build
   # Backend deployment via GitHub Actions
   git push origin main
   ```

---

Documentation is critical throughout the codebase. All components, functions, and classes should include JSDoc or Python docstrings. Follow clean code principles with meaningful variable names, proper function composition, and comprehensive error handling.