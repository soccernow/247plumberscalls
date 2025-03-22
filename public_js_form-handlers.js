const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('booking-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phone').value;
  const location = document.getElementById('location').value;
  const serviceType = document.getElementById('service-type').value;

  const { data, error } = await supabase
    .from('bookings')
    .insert([{ name, phone_number: phoneNumber, location, service_type: serviceType }]);

  if (error) {
    alert('Error submitting booking. Please try again.');
  } else {
    alert('Thank you! We will call you shortly.');
  }
});
