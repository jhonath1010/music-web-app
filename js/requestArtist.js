/**
 * Form Validation and Dynamic Input Handling
 *
 * Description:
 * - Validates user input for "year" and "duration" fields in a form before submission.
 * - Ensures the year is between 1900 and the current year.
 * - Ensures the duration is in mm:ss format with both values under 60.
 * - Allows users to dynamically add and remove video URL input fields for songs.
 *
 * Author: Jhonatan Lopez
 * Date: July 29, 2024
 */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("request-form");
  form.addEventListener("submit", function (event) {
    const year = document.getElementById("year").value;
    const duration = document.getElementById("duration").value;

    // Validation for year
    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
      alert("Please enter a valid year between 1900 and " + currentYear);
      event.preventDefault();
      return;
    }

    // Validation for duration
    if (!/^\d{1,2}:\d{2}$/.test(duration)) {
      alert("Please enter the duration in the format mm:ss");
      event.preventDefault();
      return;
    }

    // Additional validation for mm:ss format
    const durationParts = duration.split(":");
    if (parseInt(durationParts[0]) > 59 || parseInt(durationParts[1]) > 59) {
      alert("Please enter a valid duration (minutes and seconds should be less than 60)");
      event.preventDefault();
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add-song-video-url").addEventListener("click", function (event) {
    event.preventDefault();

    const container = document.getElementById("song-video-urls-container");
    const inputWrapper = document.createElement("div");
    const newInput = document.createElement("input");
    const deleteButton = document.createElement("button");

    newInput.type = "url";
    newInput.name = "song-video-urls";
    newInput.placeholder = "https://example.com";
    newInput.required = true;

    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", function () {
      container.removeChild(inputWrapper);
    });

    inputWrapper.appendChild(newInput);
    inputWrapper.appendChild(deleteButton);
    container.appendChild(inputWrapper);
  });
});
