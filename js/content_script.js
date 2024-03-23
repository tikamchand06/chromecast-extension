// const button = document.createElement("button");
// button.innerHTML = "Cast";
// button.classList.add("tcm-cast-button");
// button.onclick = function () {
//   const video = document.querySelector("video");
//   console.log(video, cjs, cjs.available);
//   if (video && cjs.available) cjs.cast(video.src);
// };

// document.body.appendChild(button);

// const videos = document.querySelectorAll("video");

// videos.forEach((video) => video.insertAdjacentElement("afterend", button));

// append cast button to each video
$("document").ready(() => {
  console.log($("video"));
  const button = $("<button class='tcm-cast-button'>Cast</button>");
  $("body").append(button);
  //   $.each($("video"), (index, video) => $(video).parent().parent().parent().parent().parent().append(button));

  const button2 = document.querySelector(".tcm-cast-button");
  console.log(button2);
  if (button2) {
    button2.addEventListener("click", () => {
      console.log("clicked");
      const cjs = new Castjs();
      const video = $("video")[0];
      //   const video = $(this).parent().parent().parent().parent().parent().find("video")[0];
      console.log(video, cjs, cjs.available);
      if (video && cjs.available) cjs.cast(video.src);
    });
  }

  //   $("document").on("click", ".tcm-cast-button", function () {
  //     console.log("clicked");
  //     const cjs = new Castjs();
  //     const video = $("video")[0];
  //     //   const video = $(this).parent().parent().parent().parent().parent().find("video")[0];
  //     console.log(video, cjs, cjs.available);
  //     if (video && cjs.available) cjs.cast(video.src);
  //   });
});
