# Contact Manager Application

The Contact Manager Application is a simple web application built with Angular for the frontend and Spring Boot for the backend. It allows users to manage their contacts, including adding, updating, and deleting contacts.

## Features

- Add new contacts with name and phone number
- View a list of all contacts
- Update existing contacts
- Delete contacts
- Responsive design for mobile and desktop

## Technologies Used

- Angular
- TypeScript
- Material Design for Angular (Angular Material)
- Spring Boot
- Java
- MySQL

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)
- Java Development Kit (JDK) installed
- IDE (Integrated Development Environment) for Java (e.g., IntelliJ IDEA, Eclipse)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/contact-manager.git
   cd contact-manager



   ```

### Frontend (Angular)

```bash
cd frontend
npm install
ng serve

## Backend (Spring Boot)

1. Run the Spring Boot application from your IDE.

 The backend API will be available at [http://localhost:9090](http://localhost:9090).

## Usage

1. Open your web browser and go to [http://localhost:4200](http://localhost:4200) to access the Contact Manager application.
2. You can add, view, update, and delete contacts from the interface.
3. Use the "Add Contact" button to add new contacts.
4. Use the "Edit" and "Delete" buttons in the contact list to update or delete contacts.

## API Endpoints

- **GET** `/api/contacts` - Get all contacts
- **GET** `/api/contacts/{contactId}` - Get a single contact by ID
- **POST** `/api/contacts` - Create a new contact
- **PUT** `/api/contacts/{contactId}` - Update an existing contact
- **DELETE** `/api/contacts/{contactId}` - Delete a contact by ID
```
