# Weekly Todo List App

A clean and organized weekly task management application that displays tasks by day of the week with persistent checkbox states.

**Experience Qualities**:
1. **Organized** - Clear visual separation between days with intuitive left-to-right flow
2. **Efficient** - Quick task completion tracking with immediate visual feedback
3. **Reliable** - State persistence ensures progress is never lost between sessions

**Complexity Level**: Light Application (multiple features with basic state)
- Multiple interactive elements with persistent state management across seven day columns

## Essential Features

### Weekly Calendar Display
- **Functionality**: Seven-column layout showing Monday through Sunday
- **Purpose**: Provides clear temporal organization for task planning
- **Trigger**: Automatic on page load
- **Progression**: App loads → Calendar headers display → Tasks populate under each day
- **Success criteria**: All seven days visible with Chinese day names, responsive layout

### Task Display with Checkboxes
- **Functionality**: Shows tasks under each day with interactive checkboxes
- **Purpose**: Enables users to track completion status of individual tasks
- **Trigger**: Page load and checkbox interactions
- **Progression**: Tasks load from config → Checkboxes reflect saved state → User clicks checkbox → State updates and persists
- **Success criteria**: All tasks visible, checkboxes functional, state persists across page refreshes

### State Persistence
- **Functionality**: Saves checkbox states to browser storage automatically
- **Purpose**: Preserves user progress between sessions
- **Trigger**: Any checkbox state change
- **Progression**: User checks/unchecks task → State saves to localStorage → User refreshes/revisits → Previous state restored
- **Success criteria**: No progress lost when page refreshes or app reopens

### Reset Functionality
- **Functionality**: Clears all checkbox states with confirmation
- **Purpose**: Allows users to start fresh weekly planning
- **Trigger**: User clicks reset button
- **Progression**: User clicks reset → Confirmation prompt → User confirms → All checkboxes unchecked → State cleared
- **Success criteria**: All tasks return to unchecked state, storage cleared

## Edge Case Handling
- **Empty task days**: Display placeholder text when no tasks configured for a day
- **Long task names**: Text wraps appropriately without breaking layout
- **Mobile viewport**: Tasks stack vertically with day headers remaining visible
- **Storage unavailable**: App continues functioning without persistence (graceful degradation)

## Design Direction
The design should feel clean and professional with a focus on clarity and efficiency - think digital planner aesthetic with subtle visual hierarchy that makes daily task organization effortless.

## Color Selection
Analogous cool palette - blues and grays create a calm, focused environment for productivity planning.

- **Primary Color**: Deep blue (oklch(0.45 0.15 240)) - communicates trust and organization
- **Secondary Colors**: Light gray backgrounds for subtle day separation
- **Accent Color**: Green (oklch(0.65 0.15 140)) - positive feedback for completed tasks
- **Foreground/Background Pairings**: 
  - Background (Light Gray #F8F9FA): Dark text (oklch(0.2 0 0)) - Ratio 16.7:1 ✓
  - Primary (Deep Blue): White text (oklch(1 0 0)) - Ratio 8.9:1 ✓
  - Accent (Green): White text (oklch(1 0 0)) - Ratio 6.2:1 ✓

## Font Selection
Clean, readable sans-serif typography that emphasizes legibility and organization - Inter font family for its excellent readability at various sizes.

- **Typographic Hierarchy**: 
  - H1 (App Title): Inter Bold/24px/tight spacing
  - H2 (Day Headers): Inter SemiBold/18px/normal spacing  
  - Body (Tasks): Inter Regular/16px/relaxed line height for readability
  - Button Text: Inter Medium/14px/normal spacing

## Animations
Subtle and functional - gentle transitions that provide feedback without distraction, focusing on checkbox state changes and hover effects.

- **Purposeful Meaning**: Smooth checkbox animations communicate completion satisfaction
- **Hierarchy of Movement**: Checkbox interactions get priority, followed by button hover states

## Component Selection
- **Components**: Card for overall container, Checkbox for task items, Button for reset action
- **Customizations**: Custom grid layout for seven-day structure, task list components
- **States**: Checkboxes with checked/unchecked states, hover effects on interactive elements
- **Icon Selection**: Check icon for completed tasks, RotateCcw icon for reset button
- **Spacing**: Consistent 4-unit spacing (16px) between day columns, 2-unit (8px) between tasks
- **Mobile**: Horizontal scroll for day columns on smaller screens, maintaining day header visibility