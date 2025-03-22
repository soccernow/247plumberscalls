const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching bookings:', error);
  } else {
    const tableBody = document.querySelector('#bookings-table tbody');
    tableBody.innerHTML = data.map(booking => `
      <tr>
        <td>${booking.name}</td>
        <td>${booking.phone_number}</td>
        <td>${booking.location}</td>
        <td>${booking.service_type}</td>
        <td>${new Date(booking.created_at).toLocaleString()}</td>
      </tr>
    `).join('');
  }
}

async function fetchPlumberApplications() {
  const { data, error } = await supabase
    .from('plumber_applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching plumber applications:', error);
  } else {
    const tableBody = document.querySelector('#plumbers-table tbody');
    tableBody.innerHTML = data.map(application => `
      <tr>
        <td>${application.full_name}</td>
        <td>${application.phone_number}</td>
        <td>${application.email}</td>
        <td>${application.location}</td>
        <td>${application.experience}</td>
        <td><a href="${application.cv_url}" target="_blank">View CV</a></td>
        <td>${application.approved ? 'Approved' : 'Pending'}</td>
      </tr>
    `).join('');
  }
}

fetchBookings();
fetchPlumberApplications();