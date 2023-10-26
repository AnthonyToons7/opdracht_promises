async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  
  if (response.ok) {
    const htmlData = await response.text()
    document.body.innerHTML = htmlData;
  } else {
    console.error("Request failed with status:", response.status);
  }
}

postData("https://corsproxy.io/?https://www.dennisvanriet.nl/RESTAPI_PROMISES/", { answer: 42 });
