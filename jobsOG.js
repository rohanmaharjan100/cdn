<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        @import url("https://cms.harness.io/uploads/job_listing_ba960241f2.css");
    </style>
    <meta property="og:image" content="https://developer.harness.io/img/harness-platform.svg">

</head>

<body>
    <div id="grnhse_app">Loading...</div>
    <script src="https://boards.greenhouse.io/embed/job_board/js?for=harnessinc"></script>
    <script>
    async function main() {
  const urlParams = new URLSearchParams(window.location.search);
  const gh_jid = urlParams.get("gh_jid");
  const response = await fetch(
    `https://boards-api.greenhouse.io/v1/boards/harnessinc/jobs/${gh_jid}`
  );
  let data = await response.json();


  const head = document.getElementsByTagName("head")[0];

  

  const meta2 = document.createElement("meta");
  meta2.setAttribute("property", "og:title");
  meta2.setAttribute("content", data.title);
  head.appendChild(meta2);
}

main();

console.log("Metatag");
    </script>
</body>





</html>
