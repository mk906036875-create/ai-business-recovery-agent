 function generateFollowUp() {
  const result = document.getElementById("aiResult");

  result.innerHTML = `
    <strong>🤖 AI Follow-up Generated</strong>
    <br><br>
    Hi Rahul 👋
    <br><br>
    We understand that pricing is important.
    We'd be happy to help you find the best option for your needs.
    Would you like us to share a suitable offer?
    <br><br>
    <strong>Lead Status:</strong> WARM
    <br>
    <strong>Recovery Score:</strong> 72%
    <br>
    <strong>Detected Issue:</strong> Price Concern
    <br>
    <strong>Recommended Action:</strong>
    Send a personalized offer and follow up within 48 hours.
  `;
 }
