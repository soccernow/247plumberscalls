# 247 Plumber Calls

A plumbing service website for Nigeria, built using the **Taynor Plumbing** template. Customers can book plumbers, and plumbers can apply to be added to the dispatch list. Bookings and applications are stored in **Supabase**, and the site is hosted on **Netlify**.

---

## Features
- **Customer Booking:**
  - Customers can book a plumber by providing their name, phone number, location, and service type.
  - Bookings are saved to the Supabase `bookings` table.
- **Plumber Application:**
  - Plumbers can apply by providing their full name, phone number, email, location, experience, and CV/resume URL.
  - Applications are saved to the Supabase `plumber_applications` table.
- **Admin Dashboard:**
  - View all bookings and plumber applications in one place.
  - Manually approve or reject plumber applications.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Supabase (Database and Authentication)
- **Hosting:** Netlify
- **Template:** Taynor Plumbing

---

## Setup Instructions

### 1. GitHub Repository
- Clone the repository:
  ```bash
  git clone https://github.com/your-username/247plumbercalls.git
  cd 247plumbercalls
