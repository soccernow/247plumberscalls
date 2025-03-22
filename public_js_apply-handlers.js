const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('plumber-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const fullName = document.getElementById('full-name').value;
  const phoneNumber = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const location = document.getElementById('location').value;
  const experience = document.getElementById('experience').value;
  const cvUrl = document.getElementById('cv-url').value;

  const { data, error } = await supabase
    .from('plumber_applications')
    .insert([{ full_name: fullName, phone_number: phoneNumber, email, location, experience, cv_url: cvUrl }]);

  if (error) {
    alert('Error submitting application. Please try again.');
  } else {
    alert('Application submitted successfully! We will contact you if approved.');
  }
});