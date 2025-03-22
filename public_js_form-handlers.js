// Initialize Supabase using environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('booking-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phone').value;
  const location = document.getElementById('location').value;
  const serviceType = document.getElementById('service-type').value;

  // Save booking to Supabase
  const { data, error } = await supabase
    .from('bookings')
    .insert([{ name, phone_number: phoneNumber, location, service_type: serviceType }]);

  if (error) {
    alert('Error submitting booking. Please try again.');
  } else {
    // Call Netlify Function to send email
    const response = await fetch('/.netlify/functions/send-booking-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phoneNumber, location, serviceType }),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Thank you! Expect a call within 10-30 minutes.');
    } else {
      alert('Booking submitted, but email notification failed.');
    }
  }
});