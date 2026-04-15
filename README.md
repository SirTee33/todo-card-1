## Project Overview

This project is an interactive Todo Card built using **HTML, CSS, and Vanilla JavaScript**.  
It extends the Stage 0 static UI into a fully interactive and stateful component.

## Live Demo

[https://todo-card-1.vercel.app/]

[https://github.com/SirTee33/todo-card-1]

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## What Changed from Stage 0

- Added full **edit mode functionality**
- Introduced **state management (status sync between checkbox and dropdown)**
- Added **expand/collapse description feature**
- Implemented **live time tracking system**
- Added **overdue detection and visual indicators**
- Improved accessibility and keyboard interaction
- Added **priority indicator with dynamic colors**

## New Design Decisions

- Clean card-based UI layout
- Soft shadows and rounded corners for modern look
- Color-coded priority indicator (Red = High, Orange = Medium, Green = Low)
- Overdue state highlighted in red for visibility
- Collapsible description to reduce UI clutter
- Minimalistic button styling for better UX

## Known Limitations

- No backend persistence (data resets on refresh)
- Single todo card only (no list management)
- Time updates depend on browser interval timing
- No drag-and-drop reordering

## Accessibility Notes

- All interactive elements are keyboard accessible
- Buttons include proper labels and focus states
- Expand/collapse uses aria-expanded attribute
- Form inputs are properly labeled
- Live time updates are readable and structured
- Color is not the only indicator of status (text + visual cues used)

## Features

- Edit Todo (title & description)
- Status control (Pending / In Progress / Done)
- Checkbox synchronization
- Expand / Collapse description
- Live countdown timer
- Overdue indicator
- Priority visual indicator
- Delete & Edit buttons (UI level)

## Author

Built as part of Frontend Internship Stage 1a Task
