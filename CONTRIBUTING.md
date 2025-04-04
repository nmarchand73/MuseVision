# Contributing to MuseVision

Thank you for considering contributing to MuseVision! Here are some guidelines to help you get started.

## Development Process

We follow a weekly development cycle based on our project plan, focusing on vertical slices of functionality.

### Branch Strategy

- `main`: The primary branch containing stable code
- `feature/<feature-name>`: For new features
- `bugfix/<bug-description>`: For bug fixes
- `release/<version>`: For release preparation

### Pull Request Process

1. Create a branch from `main` for your feature or fix
2. Develop and test your changes
3. Submit a pull request with a clear description
4. Request review from a maintainer

## Coding Standards

- TypeScript/React (Frontend):
  - Follow ES6+ conventions
  - Use TypeScript types appropriately
  - Follow React hooks guidelines
  - Format code with Prettier

- Python/FastAPI (Backend):
  - Follow PEP 8 guidelines
  - Use type hints 
  - Format code with Black

## Commit Messages

Use clear, descriptive commit messages with the format:

```
[Component] Brief description of change

More detailed description if needed
```

For example:
- `[Frontend] Add piano roll view component`
- `[Backend] Implement MusicXML parsing utilities`

## Testing

- Write tests for new functionality
- Ensure all tests pass before submitting PR
- Include both unit and integration tests where appropriate

## Development Setup

See the README.md file for instructions on setting up the development environment. 