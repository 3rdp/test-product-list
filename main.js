jQuery(document).ready(function($) {

  function catchInputChange(e) {
    function countSum() {
      var array = Array.prototype.slice.call(arguments)
      return array.reduce(function(prev, item) {
        return prev * Number(item)
      })
    }
    var thisRow = $(this).parents("tr")
    var inputPrice = thisRow.find("input.price").val()
    var inputQuantity = thisRow.find("input.quantity").val()

    thisRow.find(".result-row").text( countSum(inputPrice, inputQuantity))
    countTableSum()
  }

  function countTableSum() {
    var table = $("#price-table tbody")
    var Sum = 0
    table.find(".input-row").each(function() {

      Sum += Number( $(this).find(".result-row").text() )

    })

    table.find("#result-table").text(Sum)
  }

  // function

  $("#price-table input.quantity").change(catchInputChange)
  $("#price-table input.price").change(catchInputChange)
  .trigger("change")

  $("#price-table #sort-by-sum").click(function() {
    console.log("click")
    var flag = $(this).find("i.flag")
    var sortType
    var tableRows = $("#price-table tbody .input-row").toArray()

    if (!flag.hasClass("asc")) {
      flag.attr("class", "flag asc")
      sortType = "asc"
    } else {
      flag.attr("class", "flag desc")
      sortType = "desc"

    }

    tableRows.sort(function(a, b) {
      var inputA = $(a).find(".result-row").text()
      var inputB = $(b).find(".result-row").text()
      console.log(a)
      if (sortType == "desc") return Number(a)-Number(b)
      else return Number(b)-Number(a)

    })
    $("#price-table tbody .input-row").remove()
    tableRows.every(function(row) {
      $("#price-table tbody").prepend(row)
      return true
    })

  $("#price-table input.quantity").change(catchInputChange)
  $("#price-table input.price").change(catchInputChange)

  })
  .trigger("click")

})


// 1. Не работает правильно сортировка: 0 наверху
// 2. Сбрасываются ивенты после сортировки - надо было писать через on
//
/* 
 * Прототипное наследование - что это и зачем?
 * Что такое метод конструктор? 
 * Что же такое замыкания? 
 * Как работают float & clear? Что такое clearfix? 
 * Схлопывание отступов. 
 * Что такое пропагация ивентов? Что делает e.stopPropagation 
