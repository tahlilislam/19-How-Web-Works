console.log("Let's get this party started!");

async function search(term) {
  const res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  console.log(res.data);
  console.log(term);
  const searchInput = document.querySelector("#search");
  const gifHolder = $("#gifHolder");
  const result = res.data.data;
  const randomIdx = Math.floor(Math.random()* res.data.data.length);
//   const result = res.data.data[0];
  const img = $("<iframe>");
  const removeGifBtn = $("<div class = 'removeGifBtn'>XCloseX</div>")
  img.attr("src", result[randomIdx].embed_url);
  const imgContainer = $("<div class = '.imgContainer'></div>")
  img.appendTo(imgContainer);
  removeGifBtn.appendTo(imgContainer);
  imgContainer.appendTo(gifHolder);
  
}

$(document).ready(function () {
  $("#searchBtn").on("click", function (event) {
    event.preventDefault();
    search($("#search").val());
    $("form")[0].reset(); //using a non-specific selector instead of a single element; either selec the array element or get id
  });
  $("#deleteBtn").on("click", function (event) {
    event.preventDefault();
    $("#gifHolder").empty();
  })
//   $(".imgContainer").on("click", ".removeGifBtn", function (event) {
//     console.log("Remove button clicked."); // Debugging line

//     event.preventDefault();
//     const $imgContainer = $(this).closest(".imgContainer");
//     console.log($imgContainer); // Debugging line
//     $imgContainer.remove();
//   });
$("#gifHolder").on("click", ".removeGifBtn", function (event) {
    console.log("Remove button clicked."); // Debugging line

    event.preventDefault();
    const $imgContainer = $(this).parent();
    console.log($imgContainer); // Debugging line
    $imgContainer.remove();
  });

});

//remove each gif
//button to remove all gifs
//✅ grab the length of the data arrray and get a random number from it instead of selecting the first one; use random # to grab from ar