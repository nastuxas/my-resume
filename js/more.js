function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Показать больше";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Показать меньше";
      more.style.display = "inline";

    }
  }
//   при нажатии кнопки - все что заключено в span принимает display inlain - соответственно отображается