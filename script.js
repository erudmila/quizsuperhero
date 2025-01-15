let count = 0;

$(document).ready(function () {
  $(".submit-btn").click(function () {
    // Capture user inputs
    const name = $("#name").val().trim();
    const creativity = $("#creativity").val().toLowerCase().trim();
    const process = $("#process").val();

    // Validate the name input
    if (!name) {
      alert("Please enter your name to continue.");
      return;
    }

    // Determine superhero type
    let resultText = "";

    if (
      (creativity.includes("writing") || creativity.includes("problem-solving")) &&
      process === "1"
    ) {
      resultText =
        "You are The Brilliant Inventor! With your strategic mind and love for innovation, you have what it takes to design gadgets and fight evil with technology!";
    } else if (
      (creativity.includes("drawing") || creativity.includes("music")) &&
      process === "2"
    ) {
      resultText =
        "You are The Mystic Sorcerer! Your artistic soul and willingness to explore new ideas mirror the magical powers you wield to protect the world!";
    } else if (
      (creativity.includes("writing") || creativity.includes("problem-solving")) &&
      process === "3"
    ) {
      resultText =
        "You are The Brave Protector! Your determination, along with your dedication to knowledge, makes you a reliable hero when the world needs saving!";
    } else if (
      (creativity.includes("drawing") || creativity.includes("music")) &&
      process === "4"
    ) {
      resultText =
        "You are The Compassionate Healer! With your nurturing nature and ability to connect with others, you can heal and support the world with your powers of empathy!";
    } else {
      resultText =
        "Sorry, we couldn't determine your superhero type based on your answers. Try again!";
    }

    // Display the result with the user's name
    $(".result-text").text(`Hi ${name}, ${resultText}`);
    $(".result").fadeIn();

    // Update the quiz counter
    count += 1;
    $(".counter").text(`This quiz has been taken ${count} times`);
  });
});
