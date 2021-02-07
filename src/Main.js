const router = new Navigo("/");
var options = {
  valueNames: ["category", "zekr"],
  // Since there are no elements in the list, this will be used as template.
  item: `
    <div class="card border-secondary mb-3">
      <div class="card-body text-secondary">
      <h5 class="card-title zekr"></h5>
      <p class="card-text category"></p>
    </div>
    `
};
var userList = new List("azkar", options, azkar);
let tap = $(".nav-item");

tap.click(function () {
  tap.removeClass("active");
  this.classList.add("active");
  ls(this.getAttribute("data-set"));
});

function ls(name) {
  if (name == "all") {
    router.navigate("");
    userList.filter(() => true);
  } else {
    router.navigate("?type=" + name);
    userList.filter((e) => e["_values"].category == name);
  }
}

let paramsString = location.search;
let type = new URLSearchParams(paramsString).get("type");

$('.nav-item[data-set="' + type + '"]').click();
