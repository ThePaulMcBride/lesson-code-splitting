const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const $ = await import("jquery");
  const $container = $(".container");
  const randomColor =
    "#" +
    ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);

  $container.css({
    "background-color": randomColor,
  });
});
