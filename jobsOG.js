// const API_URL = "http://localhost:8888/api/jobscdn?gh_jid=4202444007";

const API_URL = "http://localhost:8888/api/jobscdn";
// const urlParams = new URLSearchParams(window.location.search);
// const gh_jid = urlParams.get("gh_jid");
const gh_jid = 4202444007;

async function fetchData() {
  try {
    const response = await fetch(`${API_URL}?gh_jid=${gh_jid}`);
    const data = await response.json();
    return data.html;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function displayHTML() {
  try {
    const html = await fetchData();
    if (html) {
      writeHTML(html);
      console.log(html);
    } else {
      console.error("No HTML data received.");
    }
  } catch (error) {
    console.error("Error displaying HTML:", error);
  }
}

function writeHTML(html) {
  // Replace the content of a div with id 'result' with the fetched HTML
  const resultDiv = document.getElementById("result");
  if (resultDiv) {
    resultDiv.innerHTML = html;
  } else {
    console.error("Result div not found.");
  }
}

displayHTML();
