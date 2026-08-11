 // AI Business Recovery Agent
// Demo AI Engine — No API key required

function generateFollowUp() {

  const result = document.getElementById("aiResult");

  const customerMessage =
    "Price is a little high. I'll think about it.";

  const analysis = analyzeLead(customerMessage);

  result.innerHTML = `
    <div class="ai-box">
      <strong>🤖 AI Lead Analysis</strong>

      <p><b>Customer:</b> Rahul Sharma</p>

      <p>
        <b>Lead Status:</b>
        <span class="lead-status ${analysis.status.toLowerCase()}">
          ${analysis.status}
        </span>
      </p>

      <p><b>Recovery Score:</b> ${analysis.score}%</p>

      <p><b>Detected Issue:</b> ${analysis.issue}</p>

      <hr>

      <strong>✍️ Personalized AI Follow-up</strong>

      <p class="message">
        ${analysis.followUp}
      </p>

      <p><b>🎯 Recommended Action:</b> ${analysis.action}</p>

      <button onclick="copyFollowUp()">
        📋 Copy Follow-up
      </button>
    </div>
  `;

  window.currentFollowUp = analysis.followUp;
}


function analyzeLead(message) {

  const text = message.toLowerCase();

  let status = "WARM";
  let score = 65;
  let issue = "Customer needs more information.";
  let action = "Send a personalized follow-up.";

  let followUp =
    "Hi Rahul 👋, thanks for your interest. We'd be happy to help you find the best option for your needs. Would you like us to share a suitable offer?";


  // Price objection
  if (
    text.includes("price") ||
    text.includes("expensive") ||
    text.includes("cost")
  ) {

    status = "WARM";
    score = 72;
    issue = "Price concern";

    action =
      "Send a value-focused offer and follow up within 48 hours.";

    followUp =
      "Hi Rahul 👋, we completely understand that pricing is important. We'd love to help you find an option that gives you the best value for your budget. Would you like us to share a suitable offer?";
  }


  // Strong buying intent
  else if (
    text.includes("buy") ||
    text.includes("book") ||
    text.includes("today") ||
    text.includes("now")
  ) {

    status = "HOT";
    score = 92;
    issue = "Strong buying intent";

    action =
      "Contact the customer immediately.";

    followUp =
      "Hi Rahul 👋, thanks for your interest! We're ready to help you get started. Would you like us to confirm the next available option for you?";
  }


  // Future interest
  else if (
    text.includes("later") ||
    text.includes("next month") ||
    text.includes("think")
  ) {

    status = "WARM";
    score = 58;
    issue = "Customer is delaying the decision.";

    action =
      "Schedule a future follow-up.";

    followUp =
      "Hi Rahul 👋, just checking in regarding your earlier enquiry. If the timing is better now, we'd be happy to help. Would you like to continue?";
  }


  // No interest
  else if (
    text.includes("not interested") ||
    text.includes("no thanks")
  ) {

    status = "COLD";
    score = 20;
    issue = "Low buying intent.";

    action =
      "Stop frequent follow-ups and keep the lead for future campaigns.";

    followUp =
      "Thank you for considering us, Rahul. If your needs change in the future, we'll be happy to help.";
  }


  return {
    status,
    score,
    issue,
    action,
    followUp
  };
}


function copyFollowUp() {

  if (!window.currentFollowUp) {
    return;
  }

  navigator.clipboard.writeText(window.currentFollowUp)
    .then(() => {

      alert("✅ Follow-up copied successfully!");

    })
    .catch(() => {

      alert("Please copy the message manually.");

    });
}
